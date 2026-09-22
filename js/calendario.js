/* =====================================================================
   AAAGV — lógica específica da página Calendário & Modalidades
   ===================================================================== */

function getGameById(id) {
  return SITE_DATA.jogos.find(j => j.id === id);
}

function renderGameRow(jogo) {
  const data = new Date(jogo.data);
  const finalizado = jogo.status === 'finalizado';
  const passado = !finalizado && data < new Date();
  const venceu = finalizado && jogo.placarAAAGV > jogo.placarAdversario;

  let resultBlock;
  if (finalizado) {
    resultBlock = `<div class="game-result">${jogo.placarAAAGV} × ${jogo.placarAdversario}</div>`;
  } else if (passado) {
    resultBlock = `<div class="game-result" style="font-size:.82rem;color:var(--gray-600);">Encerrado</div>`;
  } else {
    resultBlock = `<div class="game-actions">${renderCalAdd(jogo, 'full-' + jogo.id)}</div>`;
  }

  const statusTag = finalizado
    ? `<span class="tag ${venceu ? 'win' : ''}">${venceu ? 'Vitória' : 'Resultado'}</span>`
    : passado
      ? `<span class="tag">Encerrado</span>`
      : `<span class="tag">Agendado</span>`;

  return `
    <div class="game-row" data-reveal>
      <div class="game-date-box">
        <span class="day">${String(data.getDate()).padStart(2,'0')}</span>
        <span class="month">${MESES_ABREV[data.getMonth()]}</span>
      </div>
      <div class="game-info">
        <div class="game-teams">AAAGV × ${escapeHtml(jogo.adversario)}</div>
        <div class="game-tags">
          <span class="tag">${escapeHtml(jogo.modalidade)}</span>
          <span class="tag">${escapeHtml(jogo.genero)}</span>
          ${statusTag}
        </div>
        <div class="game-meta">${icon('pin')} ${escapeHtml(jogo.local)} <span class="dot">&middot;</span> ${icon('calendar')} ${formatMatchMeta(data)}</div>
      </div>
      ${resultBlock}
    </div>`;
}

/* ---------- Calendário (visão mensal) ---------- */
let calMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

function jogosFiltrados() {
  return SITE_DATA.jogos;
}

function renderCalendarGrid() {
  const daysMount = document.getElementById('cal-days');
  const label = document.getElementById('cal-month-label');
  if (!daysMount || !label) return;

  const year = calMonth.getFullYear();
  const month = calMonth.getMonth();
  const nomeMes = MESES_LONGO[month];
  label.textContent = `${nomeMes.charAt(0).toUpperCase()}${nomeMes.slice(1)} ${year}`;

  const startOffset = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const todayStr = new Date().toDateString();
  const jogos = jogosFiltrados();

  const cells = [];
  for (let i = 0; i < startOffset; i++) {
    const day = daysInPrevMonth - startOffset + i + 1;
    cells.push(new Date(year, month - 1, day));
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }
  let nextDay = 1;
  while (cells.length % 7 !== 0) {
    cells.push(new Date(year, month + 1, nextDay++));
  }

  daysMount.innerHTML = cells.map(date => {
    const outside = date.getMonth() !== month;
    const isToday = date.toDateString() === todayStr;
    const jogosDoDia = jogos.filter(j => new Date(j.data).toDateString() === date.toDateString());
    const hasGame = jogosDoDia.length > 0;

    const classes = ['cal-day'];
    if (outside) classes.push('outside');
    if (isToday) classes.push('today');
    if (hasGame) classes.push('has-game');

    const dots = jogosDoDia.slice(0, 4).map(j => {
      const venceu = j.status === 'finalizado' && j.placarAAAGV > j.placarAdversario;
      return `<span class="dot ${venceu ? 'win' : ''}"></span>`;
    }).join('');

    return `
      <button type="button" class="${classes.join(' ')}" data-date="${date.toDateString()}" ${hasGame ? '' : 'tabindex="-1"'}>
        <span class="num">${date.getDate()}</span>
        ${hasGame ? `<span class="dots">${dots}</span>` : ''}
      </button>`;
  }).join('');

  daysMount.querySelectorAll('.cal-day.has-game').forEach(btn => {
    btn.addEventListener('click', () => selectCalDay(btn));
  });
}

function selectCalDay(btn) {
  document.querySelectorAll('.cal-day.selected').forEach(el => el.classList.remove('selected'));
  btn.classList.add('selected');

  const dateStr = btn.dataset.date;
  const jogosDoDia = jogosFiltrados().filter(j => new Date(j.data).toDateString() === dateStr);
  const panel = document.getElementById('cal-day-detail');
  panel.hidden = false;
  panel.innerHTML = `
    <div class="cal-day-detail-title">Jogos em ${dateStr === new Date().toDateString() ? 'hoje' : new Date(dateStr).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}</div>
    ${jogosDoDia.map(renderGameRow).join('')}`;
  initReveal();
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function changeCalMonth(delta) {
  calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() + delta, 1);
  document.getElementById('cal-day-detail').hidden = true;
  renderCalendarGrid();
}

/* ---------- Modalidades ---------- */
function athleteInitials(nome) {
  return nome.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

function generateAthletes(genero) {
  return Array.from({ length: 8 }, (_, i) => ({
    nome: 'Nome Sobrenome',
    numero: i + 1,
    genero
  }));
}

function getAthletes(slug, genero) {
  const reais = SITE_DATA.atletas?.[slug]?.[genero];
  return reais && reais.length ? reais : generateAthletes(genero);
}

function renderModalidades() {
  const mount = document.getElementById('modalidades-grid');
  if (!mount) return;

  mount.innerHTML = SITE_DATA.modalidades.map(m => `
    <button type="button" class="modality-card" data-reveal data-slug="${m.slug}">
      <img src="${escapeHtml(m.foto)}" alt="${escapeHtml(m.nome)}" data-fallback-text="${escapeHtml(m.nome)}">
      <div class="content">
        <div class="name">${escapeHtml(m.nome)}</div>
        <div class="genders">${m.generos.join(' | ')}</div>
      </div>
    </button>`).join('');

  mount.querySelectorAll('.modality-card').forEach(card => {
    card.addEventListener('click', () => {
      const wasActive = card.classList.contains('active');
      mount.querySelectorAll('.modality-card').forEach(c => c.classList.remove('active'));
      if (wasActive) {
        closeAthletesPanel();
      } else {
        card.classList.add('active');
        const modalidade = SITE_DATA.modalidades.find(m => m.slug === card.dataset.slug);
        openAthletesPanel(modalidade);
      }
    });
  });

  initReveal();
}

function closeAthletesPanel() {
  const panel = document.getElementById('athletes-panel');
  panel.hidden = true;
}

function getModalidadeInstagram(modalidade, genero) {
  const ig = modalidade.instagram;
  if (!ig) return null;
  return typeof ig === 'string' ? ig : (ig[genero] || null);
}

function instagramHandle(url) {
  const match = url && url.match(/instagram\.com\/([^/?]+)/i);
  return match ? match[1] : 'Instagram';
}

function openAthletesPanel(modalidade) {
  const panel = document.getElementById('athletes-panel');
  panel.hidden = false;
  document.getElementById('athletes-title').textContent = `Atletas — ${modalidade.nome}`;

  const igLink = document.getElementById('athletes-instagram');

  const tabsMount = document.getElementById('gender-tabs');
  tabsMount.innerHTML = modalidade.generos.map((g, i) => `
    <button type="button" class="filter-btn ${i === 0 ? 'active' : ''}" data-genero="${escapeHtml(g)}">${escapeHtml(g)}</button>`).join('');

  function renderGrid(genero) {
    const url = getModalidadeInstagram(modalidade, genero);
    igLink.href = url || '#';
    igLink.hidden = !url;
    igLink.innerHTML = `${icon('instagram', 16)}${instagramHandle(url)}`;

    const grid = document.getElementById('athletes-grid');
    const atletas = getAthletes(modalidade.slug, genero);
    grid.innerHTML = atletas.map(a => `
      <button type="button" class="athlete-card"
        data-nome="${escapeHtml(a.nome)}" data-genero="${escapeHtml(genero)}"
        data-foto="${escapeHtml(a.foto || '')}" data-numero="${escapeHtml(a.numero != null ? String(a.numero) : '')}"
        data-modalidade="${escapeHtml(modalidade.nome)}">
        <div class="avatar">${a.foto ? `<img src="${escapeHtml(a.foto)}" alt="${escapeHtml(a.nome)}" data-fallback-text="${athleteInitials(a.nome)}">` : (a.numero ?? athleteInitials(a.nome))}</div>
        <div class="name">${escapeHtml(a.nome)}</div>
        <div class="number">${escapeHtml(genero)}</div>
      </button>`).join('');
    initImageFallback(grid);
  }

  tabsMount.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsMount.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
      renderGrid(btn.dataset.genero);
    });
  });

  renderGrid(modalidade.generos[0]);
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- Modal de detalhe do atleta ---------- */
function initAtletaModal() {
  const overlay = document.getElementById('modal-atleta');
  if (!overlay) return;

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.athlete-card');
    if (!card) return;

    const { nome = '', genero = '', foto = '', numero = '', modalidade = '' } = card.dataset;
    const initials = athleteInitials(nome);

    overlay.querySelector('#atleta-avatar').innerHTML = foto
      ? `<img src="${escapeHtml(foto)}" alt="${escapeHtml(nome)}" data-fallback-text="${initials}">`
      : (numero || initials);
    overlay.querySelector('#atleta-nome').textContent = nome;
    overlay.querySelector('#atleta-genero').textContent = [modalidade, genero].filter(Boolean).join(' · ');
    overlay.querySelector('#atleta-extra').textContent = numero ? `Camisa ${numero}` : '';

    initImageFallback(overlay);
    openModal(overlay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Renderiza já com os dados locais — a página nunca fica em branco esperando a planilha
  renderCalendarGrid();
  renderModalidades();
  initCalAddButtons(getGameById);
  initAtletaModal();
  initImageFallback();

  document.getElementById('cal-prev').addEventListener('click', () => changeCalMonth(-1));
  document.getElementById('cal-next').addEventListener('click', () => changeCalMonth(1));

  const closeBtn = document.getElementById('athletes-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeAthletesPanel();
      document.querySelectorAll('.modality-card.active').forEach(c => c.classList.remove('active'));
    });
  }

  // Se a planilha responder, atualiza o calendário com os jogos reais
  if (typeof loadSiteDataFromSheets === 'function') {
    loadSiteDataFromSheets()
      .then(() => renderCalendarGrid())
      .catch(err => console.warn('[AAAGV] Erro ao carregar dados da planilha:', err));
  }
});
