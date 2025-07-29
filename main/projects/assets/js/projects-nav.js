document.addEventListener("DOMContentLoaded", function() {
  // Danh sách các bài học theo thứ tự
  const lessons = [
    "common/index.html",
    "cocos/index.html",
    "unity/index.html",
  ];

  // Lấy tên file hiện tại
const parts = window.location.pathname.split("/");
const current = parts.slice(-2).join("/"); // Lấy thư mục con + index.html

  // Tìm vị trí bài học hiện tại
  const idx = lessons.indexOf(current);

  // Tạo thẻ nav
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";

  // Thêm link Trang chủ
  nav.innerHTML += `<a href="/main/projects/project.html" class="btn">🏠 Trang chủ</a>`;

  // Link Bài trước
  if (idx > 0) {
    nav.innerHTML += `<a href="/main/projects/${lessons[idx - 1]}" class="btn">⬅️ Bài trước</a>`;
  }

  // Link Bài tiếp theo
  if (idx >= 0 && idx < lessons.length - 1) {
    nav.innerHTML += `<a href="/main/projects/${lessons[idx + 1]}" class="btn">➡️ Bài tiếp theo</a>`;
  }

  // Gắn nav vào cuối <main>
  const main = document.querySelector("main");
  if (main) {
    main.appendChild(nav);
  }
});
