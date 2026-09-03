/* =====================================================================
   AAAGV — lógica da página Museu (museu.html)

   3 partes, todas alimentadas por SITE_DATA:
     - museu    -> MOMENTOS  (#museu-galeria)  : depoimento + fotos, alternando
     - acervo   -> PAPÉIS    (#museu-acervo)   : tira horizontal arrastável
     - gestoes  -> ÁLBUNS    (#museu-gestoes)  : pasta por gestão -> grade de fotos

   Clicar em qualquer foto/documento abre o visualizador (#modal-foto),
   que navega para os lados (setas / teclado / swipe) dentro do conjunto.
   ===================================================================== */

function museuIniciais(nome) {
  if (!nome) return 'AAAGV';
  return nome.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

/* Peça reutilizada: uma foto clicável (momentos e álbuns de gestão).
   reveal=false para conteúdo que já aparece visível (painel de gestão). */
function fotoTile(foto, extraClass, reveal = true) {
  const legenda = foto.legenda || '';
  return `
    <figure class="${extraClass}" tabindex="0" role="button"${reveal ? ' data-reveal' : ''}
            aria-label="Ampliar${legenda ? ': ' + escapeHtml(legenda) : ' imagem'}"
            data-src="${escapeHtml(foto.src || '')}" data-legenda="${escapeHtml(legenda)}">
      <div class="frame">
        <img src="${escapeHtml(foto.src || '')}" alt="${escapeHtml(legenda)}" data-fallback-text="">
      </div>
      ${legenda ? `<figcaption class="legenda">${escapeHtml(legenda)}</figcaption>` : ''}
    </figure>`;
}

/* ---------- 1) MOMENTOS ---------- */
function renderMuseuBloco(bloco, index) {
  const reverse = index % 2 === 1;
  const rotulo = bloco.momento || bloco.era || '';
  const fotos = (bloco.fotos || []).slice(0, 6).map(f => fotoTile(f, 'museu-foto')).join('');
  const autorAvatar = bloco.fotoAutor
    ? `<img src="${escapeHtml(bloco.fotoAutor)}" alt="${escapeHtml(bloco.autor || '')}" data-fallback-text="${museuIniciais(bloco.autor)}">`
    : museuIniciais(bloco.autor);

  return `
    <article class="museu-bloco ${reverse ? 'reverse' : ''}">
      <span class="museu-era-bg" aria-hidden="true">${escapeHtml(rotulo)}</span>

      <div class="museu-depoimento" data-reveal>
        ${rotulo ? `<div class="museu-era">${escapeHtml(rotulo)}</div>` : ''}
        ${bloco.titulo ? `<h2 class="museu-titulo">${escapeHtml(bloco.titulo)}</h2>` : ''}
        <blockquote class="museu-quote">${escapeHtml(bloco.depoimento || '')}</blockquote>
        <div class="museu-autor">
          <div class="avatar">${autorAvatar}</div>
          <div>
            <div class="museu-autor-nome">${escapeHtml(bloco.autor || '')}</div>
            <div class="museu-autor-cargo">${escapeHtml(bloco.cargo || '')}</div>
          </div>
        </div>
      </div>

      <div class="museu-fotos">${fotos}</div>
    </article>`;
}

function renderMuseu() {
  const mount = document.getElementById('museu-galeria');
  if (!mount) return;
  const blocos = SITE_DATA.museu || [];
  mount.innerHTML = blocos.length
    ? blocos.map(renderMuseuBloco).join('')
    : `<p class="museu-vazio">Os momentos estão sendo selecionados.</p>`;
}

/* ---------- 2) ACERVO ---------- */
function renderAcervoItem(doc) {
  const meta = [doc.tipo, doc.referencia].filter(Boolean).join(' · ');
  const legendaZoom = [doc.titulo, meta, doc.descricao].filter(Boolean).join(' — ');
  const formato = (doc.formato || 'retrato').toLowerCase();

  return `
    <figure class="acervo-item fmt-${escapeHtml(formato)}" tabindex="0" role="button" data-reveal
            aria-label="Ampliar documento: ${escapeHtml(doc.titulo || doc.tipo || '')}"
            data-doc="1" data-src="${escapeHtml(doc.imagem || '')}"
            data-legenda="${escapeHtml(legendaZoom)}">
      <div class="frame">
        <img src="${escapeHtml(doc.imagem || '')}" alt="${escapeHtml(doc.titulo || '')}" data-fallback-text="" draggable="false">
      </div>
      <figcaption class="acervo-plate">
        ${meta ? `<span class="acervo-tipo">${escapeHtml(meta)}</span>` : ''}
        <span class="acervo-titulo">${escapeHtml(doc.titulo || '')}</span>
      </figcaption>
    </figure>`;
}

function renderAcervo() {
  const mount = document.getElementById('museu-acervo');
  if (!mount) return;
  const docs = SITE_DATA.acervo || [];
  mount.innerHTML = docs.length
    ? docs.map(renderAcervoItem).join('')
    : `<p class="museu-vazio">O arquivo em papel está sendo digitalizado.</p>`;
}

/* tira arrastável do acervo */
function initAcervoScroller() {
  const strip = document.getElementById('museu-acervo');
  const scroller = strip && strip.closest('.acervo-scroller');
  if (!strip || !scroller) return;

  let down = false, startX = 0, startLeft = 0, moved = false;

  strip.addEventListener('pointerdown', (e) => {
    down = true; moved = false;
    startX = e.clientX; startLeft = strip.scrollLeft;
    strip.classList.add('dragging');
  });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    strip.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    down = false;
    strip.classList.remove('dragging');
  });
  // se arrastou, não abre o zoom no "click" que vem em seguida
  strip.addEventListener('click', (e) => {
    if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
  }, true);

  const step = () => Math.max(260, strip.clientWidth * 0.82);
  const prev = scroller.querySelector('.acervo-prev');
  const next = scroller.querySelector('.acervo-next');
  if (prev) prev.addEventListener('click', () => strip.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => strip.scrollBy({ left: step(), behavior: 'smooth' }));

  const update = () => {
    const max = strip.scrollWidth - strip.clientWidth - 2;
    scroller.classList.toggle('no-scroll', strip.scrollWidth <= strip.clientWidth + 2);
    scroller.classList.toggle('at-start', strip.scrollLeft <= 2);
    scroller.classList.toggle('at-end', strip.scrollLeft >= max);
  };
  strip.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ---------- 3) ÁLBUNS DAS GESTÕES ---------- */
function gestaoNumero(id) {
  return String(id || '').replace(/\D/g, '');
}

function gestaoFotos(g) {
  if (g.fotos && g.fotos.length) return g.fotos;
  return Array.from({ length: g.qtd || 8 }, () => ({ src: '', legenda: '' }));
}

function renderGestaoFolder(g) {
  const num = gestaoNumero(g.id);
  const fotos = (g.fotos && g.fotos.length) ? g.fotos : [];
  const total = fotos.length || g.qtd || 0;

  const peekSrcs = [g.capa, fotos[0] && fotos[0].src, fotos[1] && fotos[1].src].filter(Boolean).slice(0, 3);
  const peekList = peekSrcs.length ? peekSrcs : ['', '', ''];
  const peek = peekList.map(s =>
    `<span class="peek-card">${s ? `<img src="${escapeHtml(s)}" alt="" loading="lazy" draggable="false">` : ''}</span>`
  ).join('');

  return `
    <button type="button" class="gestao-folder" data-reveal data-gestao="${escapeHtml(g.id)}">
      <span class="gestao-peek" aria-hidden="true">${peek}</span>
      <span class="gestao-body">
        <span class="gestao-tab">G${escapeHtml(num)}</span>
        <span class="gestao-nome">Gestão ${escapeHtml(num)}${g.periodo ? ' &middot; ' + escapeHtml(g.periodo) : ''}</span>
        <span class="gestao-count">${total} foto${total === 1 ? '' : 's'}</span>
      </span>
    </button>`;
}

let gestaoAberta = null;

function openGestao(id) {
  const panel = document.getElementById('gestao-panel');
  const grid = document.getElementById('gestao-grid');
  const g = (SITE_DATA.gestoes || []).find(x => x.id === id);
  if (!panel || !grid || !g) return;

  document.querySelectorAll('.gestao-folder').forEach(b =>
    b.classList.toggle('active', b.dataset.gestao === id));

  const num = gestaoNumero(g.id);
  panel.querySelector('.gestao-panel-title').textContent =
    `Gestão ${num}${g.periodo ? ' · ' + g.periodo : ''}`;
  grid.innerHTML = gestaoFotos(g).map(f => fotoTile(f, 'gestao-foto', false)).join('');

  panel.hidden = false;
  initImageFallback(grid);
  gestaoAberta = id;
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeGestao() {
  const panel = document.getElementById('gestao-panel');
  if (panel) panel.hidden = true;
  document.querySelectorAll('.gestao-folder.active').forEach(b => b.classList.remove('active'));
  gestaoAberta = null;
}

function renderGestoes() {
  const mount = document.getElementById('museu-gestoes');
  if (!mount) return;
  const list = SITE_DATA.gestoes || [];
  mount.innerHTML = list.length
    ? list.map(renderGestaoFolder).join('')
    : `<p class="museu-vazio">Os álbuns das gestões estão sendo organizados.</p>`;

  mount.querySelectorAll('.gestao-folder').forEach(btn => {
    btn.addEventListener('click', () => {
      if (gestaoAberta === btn.dataset.gestao) closeGestao();
      else openGestao(btn.dataset.gestao);
    });
  });
}

/* ---------- Visualizador (lightbox) com navegação lateral ---------- */
let lbItems = [];
let lbIndex = 0;

function lbRender() {
  const overlay = document.getElementById('modal-foto');
  const item = lbItems[lbIndex];
  if (!overlay || !item) return;

  overlay.querySelector('.modal-box').classList.toggle('is-doc', item.doc === '1');

  const frame = overlay.querySelector('.foto-modal-frame');
  frame.innerHTML = item.loaded
    ? `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.legenda)}">`
    : `<div class="foto-modal-ph" aria-hidden="true"></div>`;

  const legendaEl = overlay.querySelector('.foto-modal-legenda');
  legendaEl.textContent = item.legenda || '';
  legendaEl.hidden = !item.legenda;

  const many = lbItems.length > 1;
  const countEl = overlay.querySelector('.foto-modal-count');
  countEl.textContent = many ? `${lbIndex + 1} / ${lbItems.length}` : '';
  countEl.hidden = !many;
  overlay.querySelectorAll('.lb-nav').forEach(b => { b.hidden = !many; });
}

function lbStep(dir) {
  if (lbItems.length < 2) return;
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  lbRender();
}

function openLightboxFromCard(card) {
  let set;
  if (card.matches('.gestao-foto')) set = document.querySelectorAll('#gestao-grid .gestao-foto');
  else if (card.matches('.acervo-item')) set = document.querySelectorAll('#museu-acervo .acervo-item');
  else set = (card.closest('.museu-fotos') || document).querySelectorAll('.museu-foto');

  const cards = Array.from(set).length ? Array.from(set) : [card];
  lbItems = cards.map(c => {
    const img = c.querySelector('.frame img');
    return {
      src: c.dataset.src || '',
      legenda: c.dataset.legenda || '',
      doc: c.dataset.doc || '',
      loaded: !!(img && img.complete && img.naturalWidth > 0)
    };
  });
  lbIndex = Math.max(0, cards.indexOf(card));
  lbRender();
  openModal(document.getElementById('modal-foto'));
}

function initMuseuLightbox() {
  const main = document.querySelector('.museu-main');
  const overlay = document.getElementById('modal-foto');
  if (!main || !overlay) return;
  const SEL = '.museu-foto, .acervo-item, .gestao-foto';

  main.addEventListener('click', (e) => {
    const card = e.target.closest(SEL);
    if (card) openLightboxFromCard(card);
  });
  main.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest(SEL);
    if (!card) return;
    e.preventDefault();
    openLightboxFromCard(card);
  });

  overlay.querySelector('.lb-prev').addEventListener('click', () => lbStep(-1));
  overlay.querySelector('.lb-next').addEventListener('click', () => lbStep(1));

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') lbStep(-1);
    else if (e.key === 'ArrowRight') lbStep(1);
  });

  // swipe (touch)
  let sx = null;
  const fr = overlay.querySelector('.foto-modal-frame');
  fr.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  fr.addEventListener('touchend', (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 45) lbStep(dx < 0 ? 1 : -1);
    sx = null;
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMuseu();
  renderAcervo();
  renderGestoes();
  initAcervoScroller();
  initMuseuLightbox();

  const gc = document.getElementById('gestao-close');
  if (gc) gc.addEventListener('click', closeGestao);

  initReveal();
  initImageFallback();
});
