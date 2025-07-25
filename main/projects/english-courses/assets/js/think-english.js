document.addEventListener("DOMContentLoaded", () => {
  initThinkEnglish();
});

async function initThinkEnglish() {
  const index = await fetch('/main/projects/english-courses/assets/data/think-english/phrases-index.json').then(r => r.json());
  const groupContainer = document.getElementById('phrase-groups');

  index.forEach(group => {
    const btn = document.createElement('button');
    btn.textContent = `📂 ${group.category} – ${group.description}`;
    btn.addEventListener('click', () => loadPhraseGroup(group));
    groupContainer.appendChild(btn);
  });
}

async function loadPhraseGroup(group) {
  const container = document.getElementById('phrases-container');
  container.innerHTML = `<p>⏳ Đang tải ${group.category}...</p>`;

  const groupData = await fetch(`/main/projects/english-courses/assets/data/think-english/${group.file}`).then(r => r.json());

  container.innerHTML = `
    <h3>${group.category} – ${group.description}</h3>
    <table class="vocab-table">
      <thead>
        <tr>
          <th>Tiếng Anh</th>
          <th>IPA</th>
          <th>Ý nghĩa</th>
          <th>Tình huống</th>
        </tr>
      </thead>
      <tbody>
        ${groupData.map(p => `
          <tr>
            <td>${p.phrase}</td>
            <td>${p.ipa}</td>
            <td>${p.meaning}</td>
            <td>${p.context}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}
