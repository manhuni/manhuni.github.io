document.addEventListener("DOMContentLoaded", function () {
  // Danh sách các bài học theo thứ tự
  const lessons = [
    "ielts-nouns.html",
    "ielts-education.html",
    "ielts-environment.html",
    "ielts-technology.html",
    "ielts-health.html",
    "ielts-work-career.html",
    "ielts-global-issues.html",
    "ielts-culture-society.html",
    "ielts-crime-law.html",
    "ielts-media-advertising.html",
    "ielts-urbanisation.html",
    "ielts-transport.html",
  ];

  // Lấy tên file hiện tại
  const current = window.location.pathname.split("/").pop();

  // Tìm vị trí bài học hiện tại
  const idx = lessons.indexOf(current);

  // Tạo thẻ nav
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";

  // Thêm link Trang chủ
  nav.innerHTML += `<a href="/main/projects/english-courses/index.html" class="btn">🏠 Trang chủ</a>`;

  // Link Bài trước
  if (idx > 0) {
    nav.innerHTML += `<a href="/main/projects/english-courses/ielts/${lessons[idx - 1]}" class="btn">⬅️ Bài trước</a>`;
  }

  // Link Bài tiếp theo
  if (idx >= 0 && idx < lessons.length - 1) {
    nav.innerHTML += `<a href="/main/projects/english-courses/ielts/${lessons[idx + 1]}" class="btn">➡️ Bài tiếp theo</a>`;
  }

  // Gắn nav vào cuối <main>
  const main = document.querySelector("main");
  if (main) {
    main.appendChild(nav);
  }
});
