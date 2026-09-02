/* =====================================================================
   AAAGV — lógica específica da página Museu (museu.html)

   Renderiza os "blocos de memória" de SITE_DATA.museu. Os blocos se
   alternam automaticamente: par -> depoimento à esquerda / fotos à
   direita; ímpar -> invertido (classe .reverse).

   Clicar numa foto abre a versão ampliada num modal (#modal-foto).
   ===================================================================== */

function museuIniciais(nome) {
  if (!nome) return 'AAAGV';
  return nome.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

function renderMuseuFoto(foto) {
  const legenda = foto.legenda || '';
  return `
    <figure class="museu-foto" tabindex="0" role="button" data-reveal
            aria-label="Ampliar foto${legenda ? ': ' + escapeHtml(legenda) : ''}"
            data-src="${escapeHtml(foto.src || '')}" data-legenda="${escapeHtml(legenda)}">
      <div class="frame">
        <img src="${escapeHtml(foto.src || '')}" alt="${escapeHtml(legenda)}" data-fallback-text="">
      </div>
      ${legenda ? `<figcaption class="legenda">${escapeHtml(legenda)}</figcaption>` : ''}
    </figure>`;
}

function renderMuseuBloco(bloco, index) {
  const reverse = index % 2 === 1;
  // 1 foto em destaque (largura total) + as demais numa grade de 2 colunas.
  // Para mais fotos num bloco, é só acrescentar itens em "fotos" (até 6).
  const fotos = (bloco.fotos || []).slice(0, 6).map(renderMuseuFoto).join('');
  const autorAvatar = bloco.fotoAutor
    ? `<img src="${escapeHtml(bloco.fotoAutor)}" alt="${escapeHtml(bloco.autor || '')}" data-fallback-text="${museuIniciais(bloco.autor)}">`
    : museuIniciais(bloco.autor);

  return `
    <article class="museu-bloco ${reverse ? 'reverse' : ''}">
      <span class="museu-era-bg" aria-hidden="true">${escapeHtml(bloco.era || '')}</span>

      <div class="museu-depoimento" data-reveal>
        ${bloco.era ? `<div class="museu-era">${escapeHtml(bloco.era)}</div>` : ''}
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
  if (!blocos.length) {
    mount.innerHTML = `<p class="museu-vazio">O acervo do museu está sendo montado. Volte em breve.</p>`;
    return;
  }

  mount.innerHTML = blocos.map(renderMuseuBloco).join('');
  initReveal();
  initImageFallback(mount);
}

/* ---------- Lightbox das fotos ---------- */
function openMuseuFoto(card) {
  const overlay = document.getElementById('modal-foto');
  if (!overlay) return;

  const src = card.dataset.src || '';
  const legenda = card.dataset.legenda || '';
  const img = card.querySelector('.frame img');
  const carregada = img && img.complete && img.naturalWidth > 0;

  const frame = overlay.querySelector('.foto-modal-frame');
  frame.innerHTML = carregada
    ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(legenda)}">`
    : `<div class="foto-modal-ph" aria-hidden="true"></div>`;

  const legendaEl = overlay.querySelector('.foto-modal-legenda');
  legendaEl.textContent = legenda;
  legendaEl.hidden = !legenda;

  openModal(overlay);
}

function initMuseuLightbox() {
  const galeria = document.getElementById('museu-galeria');
  if (!galeria) return;

  galeria.addEventListener('click', (e) => {
    const card = e.target.closest('.museu-foto');
    if (card) openMuseuFoto(card);
  });
  galeria.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.museu-foto');
    if (!card) return;
    e.preventDefault();
    openMuseuFoto(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMuseu();
  initMuseuLightbox();
  initReveal();
  initImageFallback();
});
