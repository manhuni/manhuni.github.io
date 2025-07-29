document.addEventListener("DOMContentLoaded", function () {
  const lessons = [
    { path: "ielts-nouns.html", label: "Nouns" },
    { path: "ielts-education.html", label: "Education" },
    { path: "ielts-environment.html", label: "Environment" },
    { path: "ielts-technology.html", label: "Technology" },
    { path: "ielts-health.html", label: "Health" },
    { path: "ielts-work-career.html", label: "Work & Career" },
    { path: "ielts-global-issues.html", label: "Global Issues" },
    { path: "ielts-culture-society.html", label: "Culture & Society" },
    { path: "ielts-crime-law.html", label: "Crime & Law" },
    { path: "ielts-media-advertising.html", label: "Media & Advertising" },
    { path: "ielts-urbanisation.html", label: "Urbanisation" },
    { path: "ielts-transport.html", label: "Transport" },
  ];

  const current = window.location.pathname.split("/").pop();
  const idx = lessons.findIndex(l => l.path === current);
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";

  
  // Link trước
  if (idx > 0) {
    const prev = lessons[idx - 1];
    nav.innerHTML += `<a href="/main/projects/english-courses/ielts/${prev.path}" class="btn">← ${prev.label}</a>`;
  }

  // Link sau
  if (idx >= 0 && idx < lessons.length - 1) {
    const next = lessons[idx + 1];
    nav.innerHTML += `<a href="/main/projects/english-courses/ielts/${next.path}" class="btn">${next.label} →</a>`;
  }

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(nav);
  }
});
