/* =====================================================================
   AAAGV — lógica específica da página Sobre (sobre.html)
   ===================================================================== */

function renderStats() {
  const mount = document.getElementById('stats-mount');
  if (!mount) return;

  const anos = new Date().getFullYear() - SITE_DATA.fundacao;
  const stats = [
    { valor: anos, prefixo: '', label: 'Anos de história' },
    { valor: SITE_DATA.stats.modalidades, prefixo: '+', label: 'Modalidades' },
    { valor: SITE_DATA.stats.atletas, prefixo: '+', label: 'Atletas' },
    { valor: SITE_DATA.stats.economiadas, prefixo: '', label: 'Economíadas' }
  ];

  mount.innerHTML = stats.map((s, i) => `
    <div class="stat-card" data-reveal style="transition-delay:${i * 80}ms">
      <div class="stat-number"><span class="plus">${s.prefixo}</span><span class="count" data-target="${s.valor}">0</span></div>
      <div class="stat-label">${escapeHtml(s.label)}</div>
    </div>`).join('');

  initReveal();
  animateCounters(mount);
}

function animateCounters(scope) {
  const counters = scope.querySelectorAll('.count');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target);
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => obs.observe(c));
}

/* Linha do tempo horizontal: na linha ficam só os anos. Clicando num ano, o
   texto (com o título) abre numa janela por cima da página (#modal-timeline),
   com setas pra ir ao ano anterior/seguinte. Anos com "campeao: true" ganham
   troféu e destaque. */
function renderTimeline() {
  const mount = document.getElementById('timeline-mount');
  const overlay = document.getElementById('modal-timeline');
  if (!mount || !overlay) return;
  const itens = SITE_DATA.timeline;
  if (!itens.length) return;

  mount.innerHTML = `
    <div class="tl-h-scroll">
      <ol class="tl-h-track" aria-label="Linha do tempo da AAAGV">
        ${itens.map((item, i) => `
          <li class="tl-h-item${item.campeao ? ' campeao' : ''}">
            <button type="button" class="tl-h-ano" data-index="${i}" aria-haspopup="dialog">
              <span class="tl-h-dot">${item.campeao ? icon('trophy', 18) : ''}</span>
              <span class="tl-h-label">${escapeHtml(String(item.ano))}</span>
            </button>
          </li>`).join('')}
      </ol>
    </div>
    <p class="tl-h-dica"><span class="so-desktop">Clique em um ano para ler a história.</span><span class="so-celular">Toque em um ano para ler a história. Arraste a linha para ver mais anos.</span></p>`;

  const scroll = mount.querySelector('.tl-h-scroll');
  const items = [...mount.querySelectorAll('.tl-h-item')];
  const tabs = [...mount.querySelectorAll('.tl-h-ano')];
  const caixa = overlay.querySelector('.tl-modal');
  const conteudo = overlay.querySelector('.tl-modal-conteudo');
  let atual = -1;

  function marcar() {
    items.forEach((li, k) => {
      li.classList.toggle('ativo', k === atual);
      li.classList.toggle('passado', atual !== -1 && k < atual);
    });
  }

  function mostrar(i) {
    atual = Math.max(0, Math.min(itens.length - 1, i));
    const item = itens[atual];
    marcar();
    caixa.classList.toggle('campeao', !!item.campeao);
    conteudo.innerHTML = `
      <div class="tl-h-painel-inner">
        <div class="tl-h-painel-head">
          <span class="tl-h-painel-ano">${escapeHtml(String(item.ano))}</span>
          ${item.campeao ? `<span class="tl-h-painel-badge">${icon('trophy', 16)} Campeões das Economíadas</span>` : ''}
        </div>
        ${item.titulo ? `<h2 class="tl-h-painel-titulo">${escapeHtml(item.titulo)}</h2>` : ''}
        <p class="tl-h-painel-texto">${italicizeQuotes(item.texto)}</p>
        <div class="tl-h-nav">
          <button type="button" class="tl-h-seta" data-dir="-1" aria-label="Ano anterior"${atual === 0 ? ' disabled' : ''}>‹</button>
          <span class="tl-h-contador">${atual + 1} / ${itens.length}</span>
          <button type="button" class="tl-h-seta" data-dir="1" aria-label="Próximo ano"${atual === itens.length - 1 ? ' disabled' : ''}>›</button>
        </div>
      </div>`;
    caixa.scrollTop = 0;
    // no celular a linha rola de lado: deixa o ano aberto à vista
    const r = tabs[atual].getBoundingClientRect(), rs = scroll.getBoundingClientRect();
    scroll.scrollTo({ left: Math.max(0, scroll.scrollLeft + (r.left - rs.left) + r.width / 2 - scroll.clientWidth / 2) });
  }

  tabs.forEach(t => t.addEventListener('click', () => {
    mostrar(Number(t.dataset.index));
    openModal(overlay);
  }));
  conteudo.addEventListener('click', (e) => {
    const seta = e.target.closest('.tl-h-seta');
    if (seta) mostrar(atual + Number(seta.dataset.dir));
  });
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'ArrowRight' && atual < itens.length - 1) mostrar(atual + 1);
    if (e.key === 'ArrowLeft' && atual > 0) mostrar(atual - 1);
  });
  // quando a janela fecha (✕, clique fora ou Esc), desmarca o ano
  new MutationObserver(() => {
    if (!overlay.classList.contains('open') && atual !== -1) {
      const ultimo = atual;
      atual = -1;
      marcar();
      tabs[ultimo].focus({ preventScroll: true });
    }
  }).observe(overlay, { attributes: true, attributeFilter: ['class'] });
}

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderTimeline();
  initReveal();
  initImageFallback();

  const btnCampeonatos = document.getElementById('btn-campeonatos');
  if (btnCampeonatos) {
    btnCampeonatos.addEventListener('click', () => openModal(document.getElementById('modal-campeonatos')));
  }

  const btnMascote = document.getElementById('btn-mascote');
  if (btnMascote) {
    btnMascote.addEventListener('click', () => openModal(document.getElementById('modal-mascote')));
  }
});
