/* =====================================================================
   AAAGV — lógica específica da página Sobre (sobre.html)
   ===================================================================== */

function renderStats() {
  const mount = document.getElementById('stats-mount');
  if (!mount) return;

  const anos = new Date().getFullYear() - SITE_DATA.fundacao;
  const stats = [
    { valor: SITE_DATA.stats.modalidades, prefixo: '+', label: 'Modalidades' },
    { valor: SITE_DATA.stats.atletas, prefixo: '+', label: 'Atletas' },
    { valor: anos, prefixo: '', label: 'Anos de história' },
    { valor: SITE_DATA.stats.titulos, prefixo: '+', label: 'Títulos' },
    { valor: SITE_DATA.stats.eventos, prefixo: '+', label: 'Eventos realizados' }
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

function renderTimeline() {
  const mount = document.getElementById('timeline-mount');
  if (!mount) return;
  mount.innerHTML = SITE_DATA.timeline.map(item => `
    <div class="timeline-item" data-reveal>
      <div class="timeline-year">${item.ano}</div>
      <div class="timeline-text">${escapeHtml(item.texto)}</div>
    </div>`).join('');
}

function avatarInitials(nome) {
  return nome.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

function renderRetrospectiva() {
  const mount = document.getElementById('retrospectiva-mount');
  if (!mount) return;

  const gestoes = [...SITE_DATA.retrospectivaGestoes].sort((a, b) => a.ano - b.ano);

  mount.innerHTML = `
    <div class="retro-years" id="retro-years">
      ${gestoes.map(g => `<button type="button" class="retro-year-btn" data-ano="${g.ano}">${g.ano}</button>`).join('')}
    </div>
    <div class="retro-detail" id="retro-detail"></div>`;

  const yearButtons = mount.querySelectorAll('.retro-year-btn');

  function selectYear(ano) {
    yearButtons.forEach(b => b.classList.toggle('active', Number(b.dataset.ano) === ano));
    renderRetroDetail(gestoes.find(g => g.ano === ano));
  }

  yearButtons.forEach(btn => {
    btn.addEventListener('click', () => selectYear(Number(btn.dataset.ano)));
  });

  selectYear(gestoes[gestoes.length - 1].ano);
}

function renderRetroDetail(gestao) {
  const detail = document.getElementById('retro-detail');
  if (!detail || !gestao) return;

  detail.innerHTML = `
    <div class="retro-detail-year" data-reveal>${gestao.ano}</div>
    <div class="retro-detail-grid">
      ${gestao.pessoas.map(p => `
        <div class="retro-detail-card" data-reveal>
          <div class="avatar">
            ${p.foto ? `<img src="${escapeHtml(p.foto)}" alt="${escapeHtml(p.nome)}" data-fallback-text="${avatarInitials(p.nome)}">` : avatarInitials(p.nome)}
          </div>
          <div class="name">${escapeHtml(p.nome)}</div>
          <div class="role">${escapeHtml(p.cargo)}</div>
        </div>`).join('')}
    </div>`;

  initReveal();
  initImageFallback(detail);
}

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderTimeline();
  renderRetrospectiva();
  initReveal();
  initImageFallback();
});
