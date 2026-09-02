/* =====================================================================
   AAAGV — carregamento dos dados do site a partir do Google Sheets

   Cada aba da planilha é publicada em CSV (Arquivo > Compartilhar >
   Publicar na Web > CSV) e o link entra em SHEETS_CSV abaixo.

   loadSiteDataFromSheets() busca esses CSVs, converte para o mesmo
   formato de SITE_DATA (js/data.js) e substitui SITE_DATA.jogos e
   SITE_DATA.noticias. Se a planilha não responder, o site continua
   funcionando com os dados de exemplo de data.js.

   Colunas esperadas
   -----------------
   jogos:    ID | ADVERSÁRIO | MODALIDADE | GÊNERO | DATA E HORA | LOCAL |
             STATUS | PlacarAAAGV | PlacarADVERSÁRIO | COMPETIÇÃO | NEWSID
   noticias: ID | CATEGORIA | TÍTULO | DATA | IMAGEM | RESUMO | CORPO DO TEXTO
             (parágrafos do corpo separados por "||" ou quebra de linha)
   ===================================================================== */

const SHEETS_CSV = {
  jogos: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRJcb-elIOjeggXNAQR4qSqswFvU0kfMFGalfapx8cjifxufhZ9UWT8USKipl2pdw/pub?gid=631853086&single=true&output=csv',
  noticias: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRJcb-elIOjeggXNAQR4qSqswFvU0kfMFGalfapx8cjifxufhZ9UWT8USKipl2pdw/pub?gid=816405129&single=true&output=csv'
};

/* ---------- Parser de CSV (lida com aspas, vírgulas e quebras de linha dentro dos campos) ---------- */
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  text = String(text).replace(/^﻿/, '');

  const pushField = () => { row.push(field); field = ''; };
  const pushRow = () => {
    if (row.length > 1 || row[0] !== '') rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i++) {
    const c = text[i];

    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else {
        field += c;
      }
      continue;
    }

    if (c === '"') { inQuotes = true; }
    else if (c === ',') { pushField(); }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      pushField();
      pushRow();
    } else {
      field += c;
    }
  }

  if (field !== '' || row.length) { pushField(); pushRow(); }
  return rows;
}

/* ---------- Helpers ---------- */
function normalizeHeader(h) {
  return String(h == null ? '' : h)
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .trim().toUpperCase().replace(/\s+/g, ' ');
}

function csvToNumber(v) {
  if (v === undefined || v === null || String(v).trim() === '') return undefined;
  const n = Number(String(v).trim().replace(',', '.'));
  return Number.isNaN(n) ? undefined : n;
}

/* Devolve uma função de leitura de célula por nome de coluna (com fallback por índice) */
function makeRowReader(headerRow) {
  const norm = headerRow.map(normalizeHeader);
  const indexOfName = name => norm.indexOf(normalizeHeader(name));

  return function read(dataRow, names, fallbackIndex) {
    const candidates = Array.isArray(names) ? names : [names];
    for (const name of candidates) {
      const idx = indexOfName(name);
      if (idx !== -1 && dataRow[idx] !== undefined) {
        const val = String(dataRow[idx]).trim();
        if (val !== '') return val;
      }
    }
    if (fallbackIndex !== undefined && dataRow[fallbackIndex] !== undefined) {
      return String(dataRow[fallbackIndex]).trim();
    }
    return '';
  };
}

/* ---------- Mapeamento das linhas para o formato de SITE_DATA ---------- */
function mapJogosRows(rows) {
  if (rows.length < 2) return [];
  const read = makeRowReader(rows[0]);

  return rows.slice(1)
    .filter(r => r.join('').trim() !== '')
    .map(r => {
      const jogo = {
        id: csvToNumber(read(r, 'ID', 0)),
        adversario: read(r, 'ADVERSARIO', 1) || 'A confirmar',
        modalidade: read(r, 'MODALIDADE', 2),
        genero: read(r, 'GENERO', 3),
        local: read(r, 'LOCAL', 5),
        status: (read(r, 'STATUS', 6) || 'agendado').toLowerCase()
      };

      const dataHora = read(r, ['DATA E HORA', 'DATA/HORA', 'DATA'], 4);
      if (dataHora) jogo.data = dataHora;

      const placarAAAGV = csvToNumber(read(r, ['PLACARAAAGV', 'PLACAR AAAGV'], 7));
      const placarAdv = csvToNumber(read(r, ['PLACARADVERSARIO', 'PLACAR ADVERSARIO'], 8));
      if (placarAAAGV !== undefined) jogo.placarAAAGV = placarAAAGV;
      if (placarAdv !== undefined) jogo.placarAdversario = placarAdv;

      const competicao = read(r, 'COMPETICAO', 9);
      if (competicao) jogo.competicao = competicao;

      // "RESUMO" so e usado se a planilha tiver essa coluna (sem fallback por
      // indice, para nao colidir com NEWSID).
      const resumo = read(r, 'RESUMO');
      if (resumo) jogo.resumo = resumo;

      const newsId = csvToNumber(read(r, ['NEWSID', 'NEWS ID'], 10));
      if (newsId !== undefined) jogo.newsId = newsId;

      return jogo;
    })
    .filter(j => j.data || (j.modalidade && j.adversario));
}

function mapNoticiasRows(rows) {
  if (rows.length < 2) return [];
  const read = makeRowReader(rows[0]);

  return rows.slice(1)
    .filter(r => r.join('').trim() !== '')
    .map(r => {
      // A 6ª coluna da planilha às vezes vem rotulada como "TÍTULO" (repetida):
      // por isso o fallback por índice (5) além dos nomes prováveis.
      const resumo = read(r, ['RESUMO', 'SUBTITULO', 'LINHA FINA'], 5);
      const corpoRaw = read(r, ['CORPO DO TEXTO', 'CORPO DO TESTO', 'CORPO', 'TEXTO'], 6);
      const corpo = corpoRaw
        .split(/\s*\|\|\s*|\r?\n/)
        .map(p => p.trim())
        .filter(Boolean);

      return {
        id: csvToNumber(read(r, 'ID', 0)),
        categoria: read(r, 'CATEGORIA', 1) || 'Institucional',
        titulo: read(r, 'TITULO', 2),
        data: read(r, 'DATA', 3),
        imagem: read(r, 'IMAGEM', 4),
        resumo: resumo,
        corpo: corpo.length ? corpo : (resumo ? [resumo] : [])
      };
    })
    .filter(n => n.titulo);
}

/* ---------- Busca (com timeout — nunca pode travar a renderização da página) ---------- */
async function fetchCSVRows(url, timeoutMs = 5000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { cache: 'no-store', signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return parseCSV(await res.text());
  } finally {
    clearTimeout(timer);
  }
}

/* ---------- API pública: chame no início do DOMContentLoaded de cada página ---------- */
async function loadSiteDataFromSheets() {
  if (typeof SITE_DATA === 'undefined') {
    console.warn('[AAAGV] SITE_DATA indefinido — carregue js/data.js antes de js/sheets.js.');
    return;
  }

  const jobs = [];

  if (SHEETS_CSV.jogos && /^https?:\/\//.test(SHEETS_CSV.jogos)) {
    jobs.push(
      fetchCSVRows(SHEETS_CSV.jogos)
        .then(rows => {
          const jogos = mapJogosRows(rows);
          if (jogos.length) {
            SITE_DATA.jogos = jogos;
            console.info(`[AAAGV] ${jogos.length} jogo(s) carregado(s) da planilha.`);
          }
        })
        .catch(err => console.warn('[AAAGV] Falha ao carregar "jogos" da planilha — usando dados de data.js.', err))
    );
  }

  if (SHEETS_CSV.noticias && /^https?:\/\//.test(SHEETS_CSV.noticias)) {
    jobs.push(
      fetchCSVRows(SHEETS_CSV.noticias)
        .then(rows => {
          const noticias = mapNoticiasRows(rows);
          if (noticias.length) {
            SITE_DATA.noticias = noticias;
            console.info(`[AAAGV] ${noticias.length} notícia(s) carregada(s) da planilha.`);
          }
        })
        .catch(err => console.warn('[AAAGV] Falha ao carregar "notícias" da planilha — usando dados de data.js.', err))
    );
  }

  await Promise.all(jobs);
}
