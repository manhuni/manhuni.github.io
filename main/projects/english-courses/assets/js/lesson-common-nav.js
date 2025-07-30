document.addEventListener("DOMContentLoaded", function () {
  const lessons = [
    { path: "nouns-pronouns.html", label: "Danh từ & Đại từ" },
    { path: "verbs-tenses.html", label: "Động từ & Thì" },
    { path: "tenses.html", label: "Các thì trong tiếng Anh" },
    { path: "adjectives-adverbs.html", label: "Tính từ & Trạng từ" },
    { path: "ipa-vowels.html", label: "Nguyên âm IPA" },
    { path: "think-english.html", label: "Tư duy tiếng Anh" },
  ];

  const current = window.location.pathname.split("/").pop();
  const idx = lessons.findIndex(l => l.path === current);
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";
  nav.innerHTML += `<a href="/main/projects/english-courses/index.html" class="btn">Khóa học Tiếng Anh</a>`;

 
  // Link trước
  if (idx > 0) {
    const prev = lessons[idx - 1];
    nav.innerHTML += `<a href="/main/projects/english-courses/common/${prev.path}" class="btn">← ${prev.label}</a>`;
  }

  // Link sau
  if (idx >= 0 && idx < lessons.length - 1) {
    const next = lessons[idx + 1];
    nav.innerHTML += `<a href="/main/projects/english-courses/common/${next.path}" class="btn">${next.label} →</a>`;
  }

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(nav);
  }
});
