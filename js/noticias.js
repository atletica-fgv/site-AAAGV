/* =====================================================================
   AAAGV — lógica específica da página Notícias
   ===================================================================== */

const CATEGORIAS_FILTRO = ['Todos', 'Esportes', 'Eventos', 'Parcerias', 'Social'];
let noticiasFiltroAtual = 'Todos';

function renderNewsFilters() {
  const mount = document.getElementById('news-filters');
  if (!mount) return;
  mount.innerHTML = CATEGORIAS_FILTRO.map(cat => `
    <button type="button" class="filter-btn ${cat === noticiasFiltroAtual ? 'active' : ''}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`).join('');

  mount.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      noticiasFiltroAtual = btn.dataset.cat;
      mount.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
      renderNewsGrid();
    });
  });
}

function renderNewsGrid() {
  const mount = document.getElementById('news-grid');
  if (!mount) return;

  const lista = SITE_DATA.noticias
    .filter(n => noticiasFiltroAtual === 'Todos' || n.categoria === noticiasFiltroAtual)
    .sort((a, b) => new Date(b.data) - new Date(a.data));

  if (!lista.length) {
    mount.innerHTML = `<p class="news-empty">Nenhuma notícia encontrada nessa categoria.</p>`;
    return;
  }

  mount.innerHTML = lista.map(n => `
    <button type="button" class="news-card" data-reveal data-id="${n.id}">
      <div class="thumb">
        ${n.imagem
          ? `<img src="${escapeHtml(n.imagem)}" alt="${escapeHtml(n.titulo)}" data-fallback-text="${escapeHtml(n.categoria)}">`
          : `<div class="fallback">${escapeHtml(n.categoria)}</div>`}
      </div>
      <div class="body">
        <span class="news-cat">${escapeHtml(n.categoria)}</span>
        <h3>${escapeHtml(n.titulo)}</h3>
        <div class="news-date">${formatLongDate(n.data)}</div>
      </div>
    </button>`).join('');

  mount.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => openArticleModal(Number(card.dataset.id)));
  });

  initReveal();
  initImageFallback(mount);
}

function openArticleModal(id) {
  const noticia = SITE_DATA.noticias.find(n => n.id === id);
  if (!noticia) return;
  const overlay = document.getElementById('modal-article');

  overlay.querySelector('.news-cat').textContent = noticia.categoria;
  overlay.querySelector('h2').textContent = noticia.titulo;
  overlay.querySelector('.news-date').textContent = formatLongDate(noticia.data);

  const thumb = overlay.querySelector('.thumb');
  thumb.innerHTML = noticia.imagem
    ? `<img src="${escapeHtml(noticia.imagem)}" alt="${escapeHtml(noticia.titulo)}" data-fallback-text="${escapeHtml(noticia.categoria)}">`
    : `<div class="fallback" style="height:100%">${escapeHtml(noticia.categoria)}</div>`;
  initImageFallback(thumb);

  overlay.querySelector('.body-text').innerHTML =
    noticia.corpo.map(p => `<p>${linkifyHtml(p)}</p>`).join('') +
    (noticia.autor ? `<p class="news-author">Escrito por: <span class="news-author-name">${escapeHtml(noticia.autor)}</span></p>` : '');

  openModal(overlay);
  history.replaceState(null, '', `noticias.html?id=${id}`);
}

document.addEventListener('DOMContentLoaded', () => {
  // Renderiza já com os dados locais — a página nunca fica em branco esperando a planilha
  renderNewsFilters();
  renderNewsGrid();

  const idParam = new URLSearchParams(location.search).get('id');
  if (idParam) openArticleModal(Number(idParam));

  const overlay = document.getElementById('modal-article');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('.modal-close')) {
      history.replaceState(null, '', 'noticias.html');
    }
  });

  // Se a planilha responder, re-renderiza a lista com as notícias reais
  if (typeof loadSiteDataFromSheets === 'function') {
    loadSiteDataFromSheets()
      .then(() => { renderNewsFilters(); renderNewsGrid(); })
      .catch(err => console.warn('[AAAGV] Erro ao carregar dados da planilha:', err));
  }
});
