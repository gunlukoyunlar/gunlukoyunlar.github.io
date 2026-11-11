const LANGUAGE_LABELS = {
  tr: 'Türkçe',
  en: 'İngilizce'
};

const CATEGORY_LABELS = {
  "word": "Kelime",
  "geography": "Coğrafya",
  "history": "Tarih",
  "film": "Film",
  "music": "Müzik",
  "gaming": "Video Oyunları",
  "anime": "Anime",
  "brands": "Markalar & Logolar",
  "food": "Yemek",
  "general": "Genel Kültür",
  "ethnicity": "Racism",
  "country": "Ülke",
  "guess": "Tahmin"
};

const selectedLanguages = new Set();
const selectedCategories = new Set();

const grid = document.getElementById('gameGrid');
const languageFilters = document.getElementById('languageFilters');
const categoryFilters = document.getElementById('categoryFilters');

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function renderFilterGroup(container, labels, selected) {
  container.innerHTML = Object.entries(labels).map(([key, label]) => `
    <label class="option">
      <input type="checkbox" value="${escapeHTML(key)}" ${selected.has(key) ? 'checked' : ''}>
      <span>${escapeHTML(label)}</span>
    </label>
  `).join('');

  container.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', () => {
      if (input.checked) selected.add(input.value);
      else selected.delete(input.value);
      renderGames();
    });
  });
}

function renderFilters() {
  renderFilterGroup(languageFilters, LANGUAGE_LABELS, selectedLanguages);
  renderFilterGroup(categoryFilters, CATEGORY_LABELS, selectedCategories);
}

function matchesFilters(game) {
  const matchesLanguage = selectedLanguages.size === 0 ||
    (game.languages || []).some(language => selectedLanguages.has(language));

  const matchesCategory = selectedCategories.size === 0 ||
    (game.categories || []).some(category => selectedCategories.has(category));

  return matchesLanguage && matchesCategory;
}

function renderGames() {
  const matches = GAMES.filter(matchesFilters);

  grid.innerHTML = matches.map(game => {
    const name = escapeHTML(game.name);
    const image = game.image
      ? `<img src="${escapeHTML(game.image)}" alt="${name}" loading="lazy" onerror="this.style.display='none'">`
      : '';

    const labels = [
      ...(game.categories || []).map(category => CATEGORY_LABELS[category] || category),
      ...(game.languages || []).map(language => LANGUAGE_LABELS[language] || language)
    ];

    const hasLink = /^https?:\/\//i.test(game.url || '');
    return `
      <${hasLink ? 'a' : 'div'} class="game-card ${hasLink ? '' : 'no-link'}" ${hasLink ? `href="${escapeHTML(game.url)}" target="_blank" rel="noopener noreferrer"` : ''} aria-label="${name}${hasLink ? ' — Yeni sekmede aç' : ' — Bağlantı henüz eklenmedi'}">
        <div class="cover" style="--cover-color:${escapeHTML(game.color || '#444')}">
          ${image}
          <span class="cover-symbol">${escapeHTML(game.symbol || game.name.charAt(0))}</span>
        </div>
        <div class="card-info">
          <div class="card-title-row"><h3>${name}</h3></div>
          <div class="tags">${labels.map(label => `<span>${escapeHTML(label)}</span>`).join('')}</div>
        </div>
      </${hasLink ? 'a' : 'div'}>
    `;
  }).join('');

  document.getElementById('resultCount').textContent = `${matches.length} oyun listeleniyor`;
  document.getElementById('emptyState').hidden = matches.length !== 0;
}

document.getElementById('clearFilters').addEventListener('click', () => {
  selectedLanguages.clear();
  selectedCategories.clear();
  renderFilters();
  renderGames();
});

document.getElementById('menuToggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  const isOpen = sidebar.classList.toggle('is-open');
  document.getElementById('menuToggle').setAttribute('aria-expanded', String(isOpen));
});

document.getElementById('year').textContent = new Date().getFullYear();
renderFilters();
renderGames();
