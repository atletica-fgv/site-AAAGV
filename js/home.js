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

/* ---------- Próximo jogo ---------- */
function renderNextGame() {
  const mount = document.getElementById('next-game-mount');
  if (!mount) return;

  const now = new Date();
  const proximos = SITE_DATA.jogos
    .filter(j => j.status === 'agendado' && new Date(j.data) >= now)
    .sort((a, b) => new Date(a.data) - new Date(b.data));

  if (!proximos.length) {
    mount.innerHTML = `<div class="next-game-card"><p>Nenhum jogo agendado no momento. Fique de olho no calendário completo.</p></div>`;
    return;
  }

  const jogo = proximos[0];
  const data = new Date(jogo.data);

  mount.innerHTML = `
    <div class="next-game-card" data-reveal>
      <div class="next-game-main">
        <span class="next-game-tag">Próximo jogo</span>
        <div class="next-game-match">AAAGV <span style="color:var(--yellow)">×</span> ${escapeHtml(jogo.adversario)}</div>
        <div class="next-game-modality">${escapeHtml(jogo.modalidade)} ${escapeHtml(jogo.genero)}</div>
        <div class="next-game-meta">
          <span>${icon('calendar')} ${formatMatchMeta(data)}</span>
          <span>${icon('pin')} ${escapeHtml(jogo.local)}</span>
        </div>
      </div>
      <div class="next-game-actions">
        ${renderCalAdd(jogo, 'next')}
        <a href="calendario.html" class="btn-link on-dark">Ver calendário completo →</a>
      </div>
    </div>`;
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

  const benefitsMount = document.getElementById('benefits-mount');
  if (benefitsMount) {
    benefitsMount.innerHTML = SITE_DATA.parceiros.beneficios.map(b => `
      <div class="benefit-item">
        <span class="icon-badge">${icon(b.icone, 22)}</span>
        <h4>${escapeHtml(b.titulo)}</h4>
        <p>${escapeHtml(b.desc)}</p>
      </div>`).join('');
  }

  const contatoMount = document.getElementById('partner-contact-mount');
  if (contatoMount) {
    const c = SITE_DATA.parceiros.contato;
    const mensagem = encodeURIComponent('Olá, quero ser parceiro da AAAGV');
    const whatsappUrl = `https://wa.me/${c.whatsapp}?text=${mensagem}`;
    contatoMount.innerHTML = `
      <p class="name">${escapeHtml(c.nome)}</p>
      <p class="role">${escapeHtml(c.cargo)}</p>
      <a href="${whatsappUrl}" class="btn btn-primary" target="_blank" rel="noopener">Fale com nossa área de parcerias</a>`;
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
  initCalAddButtons(getGameById);

  // Renderiza já com os dados locais (data.js) — a página nunca fica em branco
  renderHomeDynamic();

  // Se a planilha responder, atualiza o que mudou
  if (typeof loadSiteDataFromSheets === 'function') {
    loadSiteDataFromSheets()
      .then(() => renderHomeDynamic())
      .catch(err => console.warn('[AAAGV] Erro ao carregar dados da planilha:', err));
  }
});
