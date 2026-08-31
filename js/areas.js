/* =====================================================================
   AAAGV — lógica específica da página Nossas Áreas (nossas-areas.html)
   ===================================================================== */

function avatarInitials(nome) {
  return nome.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

/* ---------- Seção "Nossas Áreas" ---------- */
function renderAreasDescricao() {
  const mount = document.getElementById('areas-mount');
  if (!mount) return;

  mount.innerHTML = SITE_DATA.areasDescricao.map((a, i) => `
    <div class="area-item" data-reveal>
      <span class="num">${String(i + 1).padStart(2, '0')}</span>
      <h3>${escapeHtml(a.area)}</h3>
      <p>${escapeHtml(a.texto)}</p>
    </div>`).join('');

  initReveal();
}

/* ---------- Seção "Gestão 2026" (organograma) ---------- */
function joinNomes(nomes) {
  if (nomes.length === 1) return nomes[0];
  return `${nomes.slice(0, -1).join(', ')} e ${nomes[nomes.length - 1]}`;
}

function renderOrgAvatarBtn(p, cargo) {
  const initials = avatarInitials(p.nome);
  const avatarHtml = p.foto
    ? `<img src="${escapeHtml(p.foto)}" alt="${escapeHtml(p.nome)}" data-fallback-text="${initials}">`
    : initials;

  return `
    <button type="button" class="org-person-btn"
      data-nome="${escapeHtml(p.nome)}" data-curso="${escapeHtml(p.curso || '')}"
      data-cargo="${escapeHtml(cargo)}" data-foto="${escapeHtml(p.foto || '')}">
      <div class="avatar">${avatarHtml}</div>
    </button>`;
}

function renderOrgNodeContent(item, key, captionAbove) {
  const keyAttr = key ? ` data-key="${key}"` : '';
  const captionClass = captionAbove ? 'org-caption caption-above' : 'org-caption caption-below';
  const nome = item.pessoas.length === 1 ? item.pessoas[0].nome : joinNomes(item.pessoas.map(p => p.nome));
  const captionHtml = `
    <div class="${captionClass}">
      <div class="org-role-tag">${escapeHtml(item.cargo)}</div>
      <div class="org-name">${escapeHtml(nome)}</div>
    </div>`;

  const photosHtml = item.pessoas.length === 1
    ? renderOrgAvatarBtn(item.pessoas[0], item.cargo)
    : `<div class="org-multi">${item.pessoas.map(p => renderOrgAvatarBtn(p, item.cargo)).join('')}</div>`;

  return `
    <div class="org-node"${keyAttr}>
      ${photosHtml}
      ${captionHtml}
    </div>`;
}

function renderOrganograma() {
  const mount = document.getElementById('organograma-mount');
  if (!mount) return;

  const org = SITE_DATA.organograma;
  const topRowHtml = org.nivel1.map(item => renderOrgNodeContent(item, item.filhos || '', !!item.filhos)).join('');
  const vpeGroupHtml = org.vpe.map(item => renderOrgNodeContent(item, '', false)).join('');
  const vpaGroupHtml = org.vpa.map(item => renderOrgNodeContent(item, '', false)).join('');

  mount.innerHTML = `
    <svg class="org-svg"></svg>
    <div class="org-top-row">${topRowHtml}</div>
    <div class="org-children-row">
      <div class="org-group" data-group="vpe">${vpeGroupHtml}</div>
      <div class="org-group" data-group="vpa">${vpaGroupHtml}</div>
    </div>`;

  initImageFallback(mount);
  requestAnimationFrame(() => drawOrgLines(mount));
}

function drawOrgLines(mount) {
  const svg = mount.querySelector('.org-svg');
  if (!svg) return;

  const containerRect = mount.getBoundingClientRect();
  svg.setAttribute('width', containerRect.width);
  svg.setAttribute('height', containerRect.height);
  svg.innerHTML = '';

  function centerOf(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2 - containerRect.left, y: r.top + r.height / 2 - containerRect.top };
  }

  function line(x1, y1, x2, y2) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', x1); el.setAttribute('y1', y1);
    el.setAttribute('x2', x2); el.setAttribute('y2', y2);
    el.setAttribute('stroke', 'rgba(255,217,1,.55)');
    el.setAttribute('stroke-width', '2');
    svg.appendChild(el);
  }

  function elbow(fromEl, toEl) {
    const a = centerOf(fromEl), b = centerOf(toEl);
    const midY = (a.y + b.y) / 2;
    line(a.x, a.y, a.x, midY);
    line(a.x, midY, b.x, midY);
    line(b.x, midY, b.x, b.y);
  }

  const topAvatars = Array.from(mount.querySelectorAll('.org-top-row .org-node .org-person-btn .avatar'));
  for (let i = 0; i < topAvatars.length - 1; i++) {
    const a = centerOf(topAvatars[i]), b = centerOf(topAvatars[i + 1]);
    line(a.x, a.y, b.x, b.y);
  }

  ['vpe', 'vpa'].forEach(key => {
    const parentNode = mount.querySelector(`.org-top-row [data-key="${key}"]`);
    const groupEl = mount.querySelector(`.org-group[data-group="${key}"]`);
    if (!parentNode || !groupEl) return;
    const parentAvatar = parentNode.querySelector('.avatar');
    groupEl.querySelectorAll('.org-person-btn .avatar').forEach(avatarEl => elbow(parentAvatar, avatarEl));
  });
}

let orgResizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(orgResizeTimer);
  orgResizeTimer = setTimeout(() => {
    const mount = document.getElementById('organograma-mount');
    if (mount && mount.querySelector('.org-svg')) drawOrgLines(mount);
  }, 150);
});

/* ---------- Modal de detalhe da pessoa ---------- */
function initPessoaModal() {
  const overlay = document.getElementById('modal-pessoa');
  if (!overlay) return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.org-person-btn');
    if (!btn) return;

    const nome = btn.dataset.nome;
    const curso = btn.dataset.curso;
    const cargo = btn.dataset.cargo;
    const foto = btn.dataset.foto;
    const initials = avatarInitials(nome);

    const avatarMount = overlay.querySelector('#pessoa-avatar');
    avatarMount.innerHTML = foto
      ? `<img src="${escapeHtml(foto)}" alt="${escapeHtml(nome)}" data-fallback-text="${initials}">`
      : initials;

    overlay.querySelector('#pessoa-nome').textContent = nome;
    overlay.querySelector('#pessoa-cargo').textContent = cargo;
    overlay.querySelector('#pessoa-curso').textContent = curso ? `Curso: ${curso}` : '';

    initImageFallback(overlay);
    openModal(overlay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAreasDescricao();
  renderOrganograma();
  initPessoaModal();
});
