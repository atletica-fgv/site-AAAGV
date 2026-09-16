/* =====================================================================
   AAAGV — funções compartilhadas por todas as páginas
   (navegação, cabeçalho, modais, geração de links de calendário)
   ===================================================================== */

const MESES_ABREV = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
const MESES_LONGO = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const DIAS_SEMANA = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];

/* ---------- Ícones (SVG inline, sem emojis) ---------- */
const ICON_PATHS = {
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
  pin: '<path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  download: '<path d="M12 3v12"/><polyline points="7 10 12 15 17 10"/><line x1="5" y1="21" x2="19" y2="21"/>',
  eye: '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
  megaphone: '<path d="M3 11v2a2 2 0 002 2h1l4 4V5L6 9H5a2 2 0 00-2 2z"/><path d="M15 8a4 4 0 010 8"/><path d="M18 5a8 8 0 010 14"/>',
  share: '<circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><line x1="8.1" y1="10.8" x2="15.9" y2="7.2"/><line x1="8.1" y1="13.2" x2="15.9" y2="16.8"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 01-8 0V4z"/><path d="M8 5H5a3 3 0 003 3"/><path d="M16 5h3a3 3 0 01-3 3"/><path d="M12 13v3"/><path d="M9 20h6"/><path d="M10 16h4l1 4H9l1-4z"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9.5" r="2.3"/><path d="M15.5 14.2c2.4.3 4.5 2.4 4.5 5.8"/>',
  graduation: '<path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 9v6"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1"/>'
};
function icon(name, size = 18) {
  const paths = ICON_PATHS[name];
  if (!paths) return '';
  return `<span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg></span>`;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function linkifyHtml(str) {
  return escapeHtml(str).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
}

/* ---------- Cabeçalho / navegação ---------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Destaca o link ativo do menu
  const current = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href').split('#')[0] || 'index.html';
    if (href === current) link.classList.add('active');
  });

  // Fallback do logo (caso images/logo.png ainda não exista)
  document.querySelectorAll('.logo-link').forEach(link => {
    const img = link.querySelector('.logo-img');
    if (!img) return;
    img.addEventListener('error', () => link.classList.add('no-logo-img'), { once: true });
  });
}

/* ---------- Ano no rodapé ---------- */
function initFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Animação de entrada ao rolar a página ---------- */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => obs.observe(el));
}

/* ---------- Fallback de imagens quebradas (fotos/logos ainda não enviadas) ---------- */
function initImageFallback(scope = document) {
  scope.querySelectorAll('img[data-fallback-text]').forEach(img => {
    img.addEventListener('error', () => {
      const holder = document.createElement('div');
      holder.className = 'thumb-fallback fallback';
      holder.textContent = img.getAttribute('data-fallback-text');
      holder.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--gray-100);color:var(--gray-600);font-family:var(--font-heading);text-align:center;padding:10px;';
      img.replaceWith(holder);
    }, { once: true });
  });
}

/* ---------- Modais genéricos ---------- */
function openModal(overlay) {
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(overlay) {
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
function initModalDismiss() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('.modal-close')) closeModal(overlay);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
    }
  });
}

/* ---------- Data/hora ---------- */
function formatMatchMeta(dateObj) {
  const dia = String(dateObj.getDate()).padStart(2, '0');
  const mes = MESES_ABREV[dateObj.getMonth()];
  const hora = String(dateObj.getHours()).padStart(2, '0');
  const min = String(dateObj.getMinutes()).padStart(2, '0');
  return `${dia} ${mes} | ${hora}h${min !== '00' ? min : ''}`;
}
function formatLongDate(dateStr) {
  const d = new Date(dateStr + (dateStr.length <= 10 ? 'T12:00:00' : ''));
  return `${d.getDate()} de ${MESES_LONGO[d.getMonth()]} de ${d.getFullYear()}`;
}

/* ---------- Geração de links / arquivo de calendário ----------
   event = { title, description, location, start: Date, end: Date }
------------------------------------------------------------------ */
function toUTCString(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function buildGoogleCalendarUrl(event) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${toUTCString(event.start)}/${toUTCString(event.end)}`,
    details: event.description || '',
    location: event.location || ''
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

function buildOutlookUrl(event) {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: event.title,
    startdt: event.start.toISOString(),
    enddt: event.end.toISOString(),
    body: event.description || '',
    location: event.location || ''
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

function buildICS(event) {
  const uid = `aaagv-${event.start.getTime()}@aaagv.com.br`;
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AAAGV//Calendario//PT-BR',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${toUTCString(new Date())}`,
    `DTSTART:${toUTCString(event.start)}`,
    `DTEND:${toUTCString(event.end)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${(event.description || '').replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location || ''}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

function downloadICS(event) {
  const ics = buildICS(event);
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${event.title.replace(/[^\w-]+/g, '-')}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

/* Monta o HTML do botão + menu "Adicionar ao calendário" para um jogo */
function renderCalAdd(jogo, idSuffix) {
  const id = `caladd-${jogo.id}-${idSuffix}`;
  return `
    <div class="cal-add" id="${id}" data-game-id="${jogo.id}">
      <button type="button" class="btn btn-primary cal-add-btn cal-add-toggle">Adicionar ao calendário</button>
      <div class="cal-add-menu" role="menu">
        <button type="button" data-action="google">Google Calendar</button>
        <button type="button" data-action="apple">Apple Calendar</button>
        <a href="#" data-action="outlook" target="_blank" rel="noopener">Outlook</a>
        <button type="button" data-action="ics">${icon('download', 16)} Baixar arquivo .ics</button>
      </div>
    </div>`;
}

/* Ativa todos os componentes .cal-add presentes na página */
function initCalAddButtons(getGameById) {
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('.cal-add-toggle');
    if (toggleBtn) {
      const wrap = toggleBtn.closest('.cal-add');
      const isOpen = wrap.classList.contains('open');
      document.querySelectorAll('.cal-add.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) wrap.classList.add('open');
      return;
    }

    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
      const wrap = actionEl.closest('.cal-add');
      const jogo = getGameById(Number(wrap.dataset.gameId));
      if (!jogo) return;
      const start = new Date(jogo.data);
      const end = new Date(start.getTime() + 90 * 60000);
      const event = {
        title: `AAAGV x ${jogo.adversario} — ${jogo.modalidade} ${jogo.genero}`,
        description: `Jogo de ${jogo.modalidade} (${jogo.genero}) da AAAGV.`,
        location: jogo.local,
        start, end
      };
      const action = actionEl.dataset.action;
      if (action === 'google') { window.open(buildGoogleCalendarUrl(event), '_blank', 'noopener'); }
      else if (action === 'outlook') { actionEl.href = buildOutlookUrl(event); }
      else if (action === 'apple' || action === 'ics') { downloadICS(event); }
      wrap.classList.remove('open');
      return;
    }

    if (!e.target.closest('.cal-add')) {
      document.querySelectorAll('.cal-add.open').forEach(el => el.classList.remove('open'));
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFooterYear();
  initReveal();
  initModalDismiss();
  initImageFallback();
});
