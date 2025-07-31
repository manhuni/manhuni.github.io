document.addEventListener("DOMContentLoaded", function () {
  const lessons = [
    { path: "main/projects/english-courses/index.html", label: "Khóa học Tiếng Anh" },
  ];

  const parts = window.location.pathname.split("/");
  const current = parts.slice(-2).join("/");

  const idx = lessons.findIndex(l => l.path === current);
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";
  nav.innerHTML += `<a href="/main/projects/study.html" class="btn">🎓 Study Resources</a>`;
  if (idx > 0) {
    const prev = lessons[idx - 1];
    nav.innerHTML += `<a href="${prev.path}" class="btn">← ${prev.label}</a>`;
  }

  if (idx >= 0 && idx < lessons.length - 1) {
    const next = lessons[idx + 1];
    nav.innerHTML += `<a href="${next.path}" class="btn">${next.label} →</a>`;
  }

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(nav);
  }
});
