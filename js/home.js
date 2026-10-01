/* =====================================================================
   AAAGV — lógica específica da página Início (index.html)
   ===================================================================== */

function getGameById(id) {
  return SITE_DATA.jogos.find(j => j.id === id);
}

/* ---------- Fotos do hero em loop (fundo) ---------- */
function initHeroSlides() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4500);
}

/* ---------- Próximos jogos (até 4, passando para o lado) ---------- */
const MAX_PROXIMOS_JOGOS = 4;

function renderNextGame() {
  const mount = document.getElementById('next-game-mount');
  if (!mount) return;

  const now = new Date();
  const proximos = SITE_DATA.jogos
    .filter(j => j.status === 'agendado' && new Date(j.data) >= now)
    .sort((a, b) => new Date(a.data) - new Date(b.data))
    .slice(0, MAX_PROXIMOS_JOGOS);

  if (!proximos.length) {
    mount.innerHTML = `<div class="next-game-card"><p>Nenhum jogo agendado no momento. Fique de olho no calendário completo.</p></div>`;
    return;
  }

  const cards = proximos.map((jogo, i) => `
    <div class="next-game-card" role="group" aria-roledescription="slide" aria-label="Jogo ${i + 1} de ${proximos.length}">
      <div class="next-game-main">
        <span class="next-game-tag">${i === 0 ? 'Próximo jogo' : 'Na sequência'}</span>
        <div class="next-game-match">AAAGV <span style="color:var(--yellow)">×</span> ${escapeHtml(jogo.adversario)}</div>
        <div class="next-game-modality">${escapeHtml(jogo.modalidade)} ${escapeHtml(jogo.genero)}</div>
        <div class="next-game-meta">
          <span>${icon('calendar')} ${formatMatchMeta(new Date(jogo.data))}</span>
          <span>${icon('pin')} ${escapeHtml(jogo.local)}</span>
        </div>
      </div>
      <div class="next-game-actions">
        ${renderCalAdd(jogo, 'next')}
        <a href="calendario.html" class="btn-link on-dark">Ver calendário completo →</a>
      </div>
    </div>`).join('');

  const nav = proximos.length > 1 ? `
    <div class="next-games-nav">
      <button type="button" class="next-games-arrow" data-dir="-1" aria-label="Jogo anterior">‹</button>
      <div class="next-games-dots">
        ${proximos.map((_, i) => `<button type="button" class="next-games-dot" data-index="${i}" aria-label="Ir para o jogo ${i + 1}"></button>`).join('')}
      </div>
      <button type="button" class="next-games-arrow" data-dir="1" aria-label="Próximo jogo">›</button>
    </div>` : '';

  mount.innerHTML = `
    <div class="next-games" data-reveal aria-roledescription="carrossel">
      <div class="next-games-viewport"><div class="next-games-track">${cards}</div></div>
      ${nav}
    </div>`;

  if (proximos.length > 1) initNextGamesCarousel(mount.querySelector('.next-games'));
}

function initNextGamesCarousel(root) {
  const track = root.querySelector('.next-games-track');
  const slides = [...track.children];
  const dots = [...root.querySelectorAll('.next-games-dot')];
  const [prev, next] = root.querySelectorAll('.next-games-arrow');
  let current = 0;

  function goTo(i) {
    current = Math.max(0, Math.min(slides.length - 1, i));
    track.style.transform = `translateX(calc(${-current} * (100% + var(--next-games-gap))))`;
    slides.forEach((s, k) => { s.inert = k !== current; });
    dots.forEach((d, k) => d.setAttribute('aria-current', k === current ? 'true' : 'false'));
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    root.querySelectorAll('.cal-add.open').forEach(el => el.classList.remove('open'));
  }

  root.querySelectorAll('.next-games-arrow').forEach(btn => {
    btn.addEventListener('click', () => goTo(current + Number(btn.dataset.dir)));
  });
  dots.forEach(d => d.addEventListener('click', () => goTo(Number(d.dataset.index))));

  // Arrastar com o dedo (celular) ou com o mouse (notebook): o card
  // acompanha o movimento e, ao soltar, passa para o lado se andou o bastante.
  let startX = null, startY = null, dx = 0, dragging = false;
  track.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || e.target.closest('a, button, .cal-add')) return;
    if (e.pointerType === 'mouse') e.preventDefault(); // não seleciona texto ao arrastar
    startX = e.clientX; startY = e.clientY; dx = 0; dragging = false;
  });
  track.addEventListener('pointermove', (e) => {
    if (startX === null) return;
    dx = e.clientX - startX;
    if (!dragging) {
      if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(e.clientY - startY)) return;
      dragging = true;
      track.setPointerCapture(e.pointerId);
      track.classList.add('dragging');
    }
    const naPonta = (current === 0 && dx > 0) || (current === slides.length - 1 && dx < 0);
    track.style.transform = `translateX(calc(${-current} * (100% + var(--next-games-gap)) + ${naPonta ? dx / 3 : dx}px))`;
  });
  function endDrag() {
    if (startX === null) return;
    startX = null;
    if (!dragging) return;
    track.classList.remove('dragging');
    goTo(Math.abs(dx) > track.offsetWidth * 0.15 ? current + (dx < 0 ? 1 : -1) : current);
  }
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  // depois de arrastar com o mouse, o "clique" de soltar não abre nada
  track.addEventListener('click', (e) => {
    if (dragging) { e.preventDefault(); e.stopPropagation(); dragging = false; }
  }, true);

  // Deslizar com dois dedos no touchpad do notebook (rolagem horizontal).
  // Um gesto passa um jogo só: espera o touchpad parar antes de aceitar outro.
  let acumulado = 0, travado = false, parouTimer = null;
  track.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    clearTimeout(parouTimer);
    parouTimer = setTimeout(() => { acumulado = 0; travado = false; }, 180);
    if (travado) return;
    acumulado += e.deltaX;
    if (Math.abs(acumulado) > 40) {
      goTo(current + (acumulado > 0 ? 1 : -1));
      travado = true;
    }
  }, { passive: false });

  goTo(0);
}

/* ---------- Resultados recentes ---------- */
function renderRecentResults() {
  const mount = document.getElementById('results-mount');
  if (!mount) return;

  const finalizados = SITE_DATA.jogos
    .filter(j => j.status === 'finalizado')
    .sort((a, b) => new Date(b.data) - new Date(a.data))
    .slice(0, 3);

  if (!finalizados.length) {
    mount.innerHTML = `<p>Ainda não há resultados registrados.</p>`;
    return;
  }

  mount.innerHTML = finalizados.map(jogo => {
    const venceu = jogo.placarAAAGV > jogo.placarAdversario;
    const data = new Date(jogo.data);
    return `
      <button class="result-card" data-reveal data-id="${jogo.id}">
        <div class="result-score">AAAGV <span class="${venceu ? 'win' : ''}">${jogo.placarAAAGV}</span> × ${jogo.placarAdversario} ${escapeHtml(jogo.adversario)}</div>
        <div class="result-modality">${escapeHtml(jogo.modalidade)} ${escapeHtml(jogo.genero)}</div>
        <div class="result-date">${String(data.getDate()).padStart(2,'0')} ${MESES_ABREV[data.getMonth()]}</div>
      </button>`;
  }).join('');

  mount.querySelectorAll('.result-card').forEach(card => {
    card.addEventListener('click', () => openResultModal(Number(card.dataset.id)));
  });
}

function openResultModal(id) {
  const jogo = getGameById(id);
  if (!jogo) return;
  const overlay = document.getElementById('modal-result');
  const venceu = jogo.placarAAAGV > jogo.placarAdversario;
  const noticia = jogo.newsId ? SITE_DATA.noticias.find(n => n.id === jogo.newsId) : null;

  overlay.querySelector('.result-modal-score').innerHTML =
    `AAAGV <span class="${venceu ? 'win' : ''}" style="${venceu ? 'color:var(--green)' : ''}">${jogo.placarAAAGV}</span> × ${jogo.placarAdversario} ${escapeHtml(jogo.adversario)}`;
  overlay.querySelector('.result-modal-comp').textContent = `${jogo.modalidade} ${jogo.genero}${jogo.competicao ? ' — ' + jogo.competicao : ''}`;
  overlay.querySelector('.result-modal-summary').textContent = jogo.resumo || '';

  const actions = overlay.querySelector('.result-modal-actions');
  actions.innerHTML = noticia
    ? `<a href="noticias.html?id=${noticia.id}" class="btn btn-primary">Ler notícia</a>`
    : '';

  openModal(overlay);
}

/* ---------- Parceiros ---------- */
function renderPartners() {
  const strip = document.getElementById('partners-strip');
  if (strip) {
    strip.innerHTML = SITE_DATA.parceiros.logos.map(p => {
      if (p.logo) {
        const cls = p.semFundo ? 'partner-logo partner-logo--plain' : 'partner-logo';
        return `<div class="${cls}"><img src="${escapeHtml(p.logo)}" alt="${escapeHtml(p.nome)}" data-fallback-text="${escapeHtml(p.nome)}"></div>`;
      }
      return `<div class="logo-slot">${escapeHtml(p.nome)}</div>`;
    }).join('');
  }

  const contatoMount = document.getElementById('partner-contact-mount');
  if (contatoMount) {
    const c = SITE_DATA.parceiros.contato;
    const assunto = encodeURIComponent('Quero ser parceiro da AAAGV');
    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(c.email)}&su=${assunto}`;
    contatoMount.innerHTML = `
      <p class="name">${escapeHtml(c.nome)}</p>
      <p class="role">${escapeHtml(c.cargo)}</p>
      <a href="${emailUrl}" class="btn btn-primary" target="_blank" rel="noopener">Fale com nossa área de parcerias</a>`;
  }
}

function initPartnerModal() {
  const overlay = document.getElementById('modal-partner');
  document.querySelectorAll('[data-open="partner"]').forEach(btn => {
    btn.addEventListener('click', () => openModal(overlay));
  });
}

/* Conteúdo que depende dos dados (jogos/notícias) — pode ser re-renderizado
   quando a planilha chega, sem re-atachar os inits de uma vez só. */
function renderHomeDynamic() {
  renderNextGame();
  renderRecentResults();
  renderPartners();
  initReveal();
  initImageFallback();
}

document.addEventListener('DOMContentLoaded', () => {
  // Inits que rodam uma vez só
  initHeroSlides();
  initPartnerModal();
  initCalAddButtons();

  // Renderiza já com os dados locais (data.js) — a página nunca fica em branco
  renderHomeDynamic();

  // Se a planilha responder, atualiza o que mudou
  if (typeof loadSiteDataFromSheets === 'function') {
    loadSiteDataFromSheets()
      .then(() => renderHomeDynamic())
      .catch(err => console.warn('[AAAGV] Erro ao carregar dados da planilha:', err));
  }
});
