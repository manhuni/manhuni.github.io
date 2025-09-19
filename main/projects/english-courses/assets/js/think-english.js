(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  initThinkEnglish();
});

async function initThinkEnglish() {
  const index = await fetch('/main/projects/english-courses/assets/data/think-english/json/phrases-index.json').then(r => r.json());
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

          const groupData = await fetch(
            `/main/projects/english-courses/assets/data/think-english/json/${group.file}`
          ).then(r => r.json());

          if (!Array.isArray(groupData) || groupData.length === 0) {
            content.innerHTML = `<p>⚠️ Không có dữ liệu</p>`;
            return;
          }

          // Lấy danh sách keys từ object đầu tiên
          const keys = Object.keys(groupData[0]);

          // Render header (thêm cột STT)
          const thead = `
        <thead>
          <tr>
            <th>STT</th>
            ${keys.map(k => `<th>${k}</th>`).join('')}
          </tr>
        </thead>
      `;

          // Render body (thêm số thứ tự i+1)
          const tbody = `
        <tbody>
          ${groupData.map((p, i) => `
            <tr>
              <td>${i + 1}</td>
              ${keys.map(k => `<td>${p[k] || ''}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      `;

          // Kết hợp thành bảng
          content.innerHTML = `
        <table class="vocab-table">
          ${thead}
          ${tbody}
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
