document.addEventListener("DOMContentLoaded", function() {
  // Danh sách các bài học theo thứ tự
  const lessons = [
    "nouns-pronouns.html",
    "verbs-tenses.html",
    "adjectives-adverbs.html",
    "vowel-sounds.html",
    "word-stress.html"
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
    nav.innerHTML += `<a href="/main/projects/english-courses/${lessons[idx - 1]}" class="btn">⬅️ Bài trước</a>`;
  }

  // Link Bài tiếp theo
  if (idx >= 0 && idx < lessons.length - 1) {
    nav.innerHTML += `<a href="/main/projects/english-courses/${lessons[idx + 1]}" class="btn">➡️ Bài tiếp theo</a>`;
  }

  // Gắn nav vào cuối <main>
  const main = document.querySelector("main");
  if (main) {
    main.appendChild(nav);
  }
});
