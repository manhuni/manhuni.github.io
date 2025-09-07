(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();
const BASE_PATH = '/'; // gốc domain

async function loadComponent(id, url) {
  const el = document.getElementById(id);
  const res = await fetch(BASE_PATH + url);
  const text = await res.text();
  el.innerHTML = text;

  // Tìm tất cả <link rel="stylesheet"> bên trong component
  el.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    const href = link.getAttribute('href');
    // Tạo thẻ link mới
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = href;
    document.head.appendChild(newLink);
    // Xoá thẻ link cũ khỏi innerHTML để tránh trùng lặp
    link.remove();
  });
  // ✅ Load <script src="..."> thủ công
  el.querySelectorAll('script[src]').forEach(script => {
    const src = script.getAttribute('src');
    const newScript = document.createElement('script');
    newScript.src = src;
    newScript.defer = true;
    document.body.appendChild(newScript);
    script.remove();
  });
}

loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');
// --- Dictionary lookup feature --- //
let lookupMenu;

document.addEventListener("mouseup", (e) => {
  // Nếu click vào trong menu thì bỏ qua
  if (lookupMenu && lookupMenu.contains(e.target)) return;

  const selectedText = window.getSelection().toString().trim();

  if (!selectedText) {
    if (lookupMenu) lookupMenu.remove();
    return;
  }

  const selection = window.getSelection();
  if (selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();

  const urls = [
    {
      name: "Merriam-Webster",
      url:
        "https://www.merriam-webster.com/dictionary/" +
        encodeURIComponent(selectedText),
    },
    {
      name: "Cambridge",
      url:
        "https://dictionary.cambridge.org/spellcheck/english/?q=" +
        encodeURIComponent(selectedText),
    },
  ];

  showLookupMenu(rect, urls, selectedText);
});


// Ẩn menu khi click/tap ra ngoài
document.addEventListener("mousedown", (e) => {
  if (lookupMenu && !lookupMenu.contains(e.target)) {
    setTimeout(() => {
      if (lookupMenu) lookupMenu.remove();
    }, 50);
  }
});
document.addEventListener("touchstart", (e) => {
  if (lookupMenu && !lookupMenu.contains(e.target)) {
    setTimeout(() => {
      if (lookupMenu) lookupMenu.remove();
    }, 50);
  }
});

function showLookupMenu(rect, urls, word) {
  if (lookupMenu) lookupMenu.remove();

  lookupMenu = document.createElement("div");
  lookupMenu.id = "lookup-menu";

  // --- iOS-style container ---
  Object.assign(lookupMenu.style, {
    position: "fixed",
    background: "#ffffff",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: "2147483647", // 🔥 luôn top nhất
    pointerEvents: "auto", // 🔥 nhận được click
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    overflow: "hidden",
    opacity: "0",
    transform: "scale(0.95)",
    transition: "opacity 0.15s ease, transform 0.15s ease",
  });

  urls.forEach((item, idx) => {
    const option = document.createElement("div");
    option.textContent = `${item.name} — "${word}"`;

    Object.assign(option.style, {
      padding: "10px 16px",
      fontSize: "15px",
      color: "#000",
      cursor: "pointer",
      whiteSpace: "nowrap",
      borderTop: idx > 0 ? "1px solid #e5e5ea" : "none",
      background: "#fff",
      transition: "background 0.2s ease",
      userSelect: "none",
      pointerEvents: "auto",
    });

    option.addEventListener("mouseenter", () => {
      option.style.background = "#f2f2f7";
    });
    option.addEventListener("mouseleave", () => {
      option.style.background = "#ffffff";
    });

    // Desktop click
    option.addEventListener("click", (ev) => {
      ev.stopPropagation();
      console.log("CLICK:", item.url); // debug
      window.open(item.url, "_blank");
      if (lookupMenu) lookupMenu.remove();
    });

    // Mobile tap
    option.addEventListener("touchend", (ev) => {
      ev.stopPropagation();
      console.log("TOUCH:", item.url); // debug
      window.open(item.url, "_blank");
      if (lookupMenu) lookupMenu.remove();
    });

    lookupMenu.appendChild(option);
  });

  document.body.appendChild(lookupMenu);

  // --- Tính toán vị trí thông minh ---
  const menuRect = lookupMenu.getBoundingClientRect();
  let top, left;

  if (rect.top - menuRect.height - 8 < 0) {
    top = rect.bottom + 8; // dưới selection
  } else {
    top = rect.top - menuRect.height - 8; // trên selection
  }

  left = rect.left + rect.width / 2 - menuRect.width / 2;

  if (left < 8) left = 8;
  if (left + menuRect.width > window.innerWidth - 8) {
    left = window.innerWidth - menuRect.width - 8;
  }

  if (top < 8) top = 8;
  if (top + menuRect.height > window.innerHeight - 8) {
    top = window.innerHeight - menuRect.height - 8;
  }

  lookupMenu.style.top = `${top}px`;
  lookupMenu.style.left = `${left}px`;

  // Trigger animation
  requestAnimationFrame(() => {
    lookupMenu.style.opacity = "1";
    lookupMenu.style.transform = "scale(1)";
  });
}
