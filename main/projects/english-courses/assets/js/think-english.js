// ======= think-english.js =======

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("check-answer");
  const result = document.getElementById("quiz-result");

  btn.addEventListener("click", () => {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (!answer) {
      result.textContent = "⚠️ Vui lòng chọn 1 đáp án!";
      return;
    }
    if (answer.value === "refuse") {
      result.textContent = "✅ Chính xác! Đây là cách từ chối nhẹ nhàng.";
    } else {
      result.textContent = "❌ Sai rồi, hãy thử lại!";
    }
  });
});
async function loadThinkEnglish() {
  const index = await fetch('/assets/data/think-english/phrases-index.json').then(r => r.json());
  const allPhrases = [];

  for (const group of index) {
    const groupData = await fetch(`/assets/data/think-english/${group.file}`).then(r => r.json());
    allPhrases.push({
      category: group.category,
      description: group.description,
      phrases: groupData
    });
  }

  renderThinkEnglish(allPhrases);
}

function renderThinkEnglish(data) {
  const container = document.getElementById('phrases-container');
  container.innerHTML = '';

  data.forEach(group => {
    const groupTitle = document.createElement('h3');
    groupTitle.textContent = `📂 ${group.category} – ${group.description}`;
    container.appendChild(groupTitle);

    const table = document.createElement('table');
    table.className = 'vocab-table';

    table.innerHTML = `
      <thead>
        <tr>
          <th>Tiếng Anh</th>
          <th>IPA</th>
          <th>Ý nghĩa</th>
          <th>Tình huống</th>
        </tr>
      </thead>
      <tbody>
        ${group.phrases.map(p => `
          <tr>
            <td>${p.phrase}</td>
            <td>${p.ipa}</td>
            <td>${p.meaning}</td>
            <td>${p.context}</td>
          </tr>
        `).join('')}
      </tbody>
    `;

    container.appendChild(table);
  });
}

loadThinkEnglish();
