document.addEventListener("DOMContentLoaded", () => {
  initThinkEnglish();
});

async function initThinkEnglish() {
  const index = await fetch('/main/projects/english-courses/assets/data/think-english/phrases-index.json').then(r => r.json());
  const groupContainer = document.getElementById('phrase-groups');

  index.forEach(group => {
    const wrapper = document.createElement('div');
    wrapper.className = 'phrase-group';

    const btn = document.createElement('button');
    btn.className = 'accordion-toggle';
    btn.textContent = `📂 ${group.category} – ${group.description}`;

    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.style.display = 'none'; // ban đầu ẩn

    btn.addEventListener('click', async () => {
      if (content.style.display === 'none') {
        // Mở: nếu chưa có dữ liệu thì fetch
        if (!content.dataset.loaded) {
          content.innerHTML = `<p>⏳ Đang tải...</p>`;
          const groupData = await fetch(`/main/projects/english-courses/assets/data/think-english/${group.file}`).then(r => r.json());
          content.innerHTML = `
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
          content.dataset.loaded = 'true';
        }
        content.style.display = 'block';
      } else {
        // Đóng
        content.style.display = 'none';
      }
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(content);
    groupContainer.appendChild(wrapper);
  });
}
