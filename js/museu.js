/* =====================================================================
   AAAGV — lógica da página Museu (museu.html)

   Duas partes, alimentadas por SITE_DATA:
     - museu    -> MOMENTOS (#museu-galeria) : depoimento + fotos, alternando
     - galeria  -> GALERIA  (#galeria-strip) : fotos soltas de gestões passadas,
                   tira arrastável; passando do limite, botão "Ver mais fotos"
                   abre o resto numa grade embaixo (#galeria-panel)

   Clicar em qualquer foto abre o visualizador (#modal-foto), que navega
   para os lados (setas / teclado / swipe) dentro do conjunto.
   ===================================================================== */

// Quantas fotos ficam na tira arrastável antes do "Ver mais fotos".
// Faixa confortável: 12–18. Mais que isso, arrastar cansa — o resto vai
// para a grade que abre embaixo.
const GALERIA_STRIP_MAX = 15;

function museuIniciais(nome) {
  if (!nome) return 'AAAGV';
  return nome.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

/* ---------- 1) MOMENTOS ---------- */
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

/* ---------- 2) GALERIA (gestões passadas) ---------- */
function galeriaCard(foto, index, { grade = false } = {}) {
  const legenda = foto.legenda || '';
  const formato = (foto.formato || 'paisagem').toLowerCase();
  const cls = ['galeria-foto', `fmt-${formato}`];
  if (legenda) cls.push('com-legenda');
  if (grade) cls.push('na-grade');
  return `
    <figure class="${cls.join(' ')}" tabindex="0" role="button"${grade ? '' : ' data-reveal'}
            data-index="${index}"
            aria-label="Ampliar${legenda ? ': ' + escapeHtml(legenda) : ' foto'}">
      <div class="frame">
        <img src="${escapeHtml(foto.src || '')}" alt="${escapeHtml(legenda)}" data-fallback-text="" draggable="false">
      </div>
      ${legenda ? `<figcaption class="legenda">${escapeHtml(legenda)}</figcaption>` : ''}
    </figure>`;
}

let galeriaAberta = false;

function renderGaleria() {
  const strip = document.getElementById('galeria-strip');
  if (!strip) return;
  const fotos = SITE_DATA.galeria || [];

  strip.innerHTML = fotos.length
    ? fotos.slice(0, GALERIA_STRIP_MAX).map((f, i) => galeriaCard(f, i)).join('')
    : `<p class="museu-vazio">As fotos das gestões passadas estão sendo reunidas.</p>`;
  initImageFallback(strip);

  const btn = document.getElementById('galeria-mais');
  if (btn) btn.hidden = fotos.length <= GALERIA_STRIP_MAX;
}

function toggleGaleriaMais() {
  const panel = document.getElementById('galeria-panel');
  const grid = document.getElementById('galeria-grid');
  const btn = document.getElementById('galeria-mais');
  if (!panel || !grid || !btn) return;

  galeriaAberta = !galeriaAberta;

  if (galeriaAberta) {
    const fotos = SITE_DATA.galeria || [];
    grid.innerHTML = fotos.map((f, i) => galeriaCard(f, i, { grade: true })).join('');
    initImageFallback(grid);
    panel.hidden = false;
    btn.textContent = 'Ver menos';
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    panel.hidden = true;
    btn.textContent = 'Ver mais fotos';
  }
}

/* tira arrastável (mouse / touch) + setas + dica de "tem mais" */
function initGaleriaScroller() {
  const strip = document.getElementById('galeria-strip');
  const scroller = strip && strip.closest('.galeria-scroller');
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
  const prev = scroller.querySelector('.galeria-prev');
  const next = scroller.querySelector('.galeria-next');
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

/* ---------- Visualizador (lightbox) com navegação lateral ---------- */
let lbItems = [];
let lbIndex = 0;

function lbRender() {
  const overlay = document.getElementById('modal-foto');
  const item = lbItems[lbIndex];
  if (!overlay || !item) return;

  overlay.querySelector('.modal-box').classList.toggle('is-doc', item.doc === '1');

  const frame = overlay.querySelector('.foto-modal-frame');
  const placeholder = '<div class="foto-modal-ph" aria-hidden="true"></div>';
  if (item.src) {
    frame.innerHTML = `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.legenda)}">`;
    const img = frame.querySelector('img');
    // se a foto ainda não existe (placeholder), cai no ícone em vez de imagem quebrada
    img.addEventListener('error', () => { frame.innerHTML = placeholder; }, { once: true });
  } else {
    frame.innerHTML = placeholder;
  }

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

function openLightbox(items, index) {
  lbItems = items;
  lbIndex = Math.max(0, Math.min(index, items.length - 1));
  lbRender();
  openModal(document.getElementById('modal-foto'));
}

function openLightboxFromCard(card) {
  // Galeria: navega a lista inteira (mesmo as fotos que ainda não estão na tela)
  if (card.matches('.galeria-foto')) {
    const fotos = SITE_DATA.galeria || [];
    openLightbox(
      fotos.map(f => ({ src: f.src || '', legenda: f.legenda || '', doc: '', loaded: !!f.src })),
      Number(card.dataset.index) || 0
    );
    return;
  }

  // Momentos: navega as fotos daquele bloco
  const set = (card.closest('.museu-fotos') || document).querySelectorAll('.museu-foto');
  const cards = Array.from(set).length ? Array.from(set) : [card];
  openLightbox(
    cards.map(c => {
      const img = c.querySelector('.frame img');
      return {
        src: c.dataset.src || '',
        legenda: c.dataset.legenda || '',
        doc: c.dataset.doc || '',
        loaded: !!(img && img.complete && img.naturalWidth > 0)
      };
    }),
    cards.indexOf(card)
  );
}

function initMuseuLightbox() {
  const main = document.querySelector('.museu-main');
  const overlay = document.getElementById('modal-foto');
  if (!main || !overlay) return;
  const SEL = '.museu-foto, .galeria-foto';

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
  renderGaleria();
  initGaleriaScroller();
  initMuseuLightbox();

  const mais = document.getElementById('galeria-mais');
  if (mais) mais.addEventListener('click', toggleGaleriaMais);

  initReveal();
  initImageFallback();
});
