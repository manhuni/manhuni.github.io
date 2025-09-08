// main.js

(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

const BASE_PATH = '/'; // gốc domain

// ==================== COMPONENT LOADER ====================
async function loadComponent(id, url) {
  const el = document.getElementById(id);
  const res = await fetch(BASE_PATH + url);
  const text = await res.text();
  el.innerHTML = text;

  // ✅ Chuyển <link rel="stylesheet"> trong component sang <head>
  el.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    const href = link.getAttribute('href');
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = href;
    document.head.appendChild(newLink);
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

// ==================== LOOKUP FEATURE ====================
let lookupMenu, lookupButton;

// ✅ Desktop: mouseup
document.addEventListener("mouseup", handleSelection);

// ✅ Mobile: touchend
document.addEventListener("touchend", handleSelection);

function handleSelection(e) {
  // Nếu click vào menu hoặc button → bỏ qua
  if ((lookupMenu && lookupMenu.contains(e.target)) ||
      (lookupButton && lookupButton.contains(e.target))) return;

  const selectedText = window.getSelection().toString().trim();
  if (!selectedText) {
    cleanup();
    return;
  }

  const selection = window.getSelection();
  if (selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();

  // ✅ Check iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    // 👉 iOS: hiện nút nhỏ để tránh conflict menu gốc
    showLookupButton(rect, selectedText);
  } else {
    // 👉 Desktop & Android: hiện menu luôn
    showLookupMenu(rect, selectedText);
  }
}

function showLookupButton(rect, word) {
  cleanup();

  lookupButton = document.createElement("button");
  lookupButton.textContent = "🔍";
  Object.assign(lookupButton.style, {
    position: "fixed",
    top: `${rect.bottom + 6}px`,
    left: `${rect.left}px`,
    fontSize: "16px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    textAlign: "center",
    cursor: "pointer",
    zIndex: 2147483647,
  });

  lookupButton.addEventListener("click", (e) => {
    e.stopPropagation();
    showLookupMenu(rect, word);
    lookupButton.remove();
  });

  document.body.appendChild(lookupButton);
}

function showLookupMenu(rect, word) {
  cleanup();

  const urls = [
    {
      name: "Merriam-Webster",
      url: "https://www.merriam-webster.com/dictionary/" + encodeURIComponent(word),
    },
    {
      name: "Cambridge",
      url: "https://dictionary.cambridge.org/spellcheck/english/?q=" + encodeURIComponent(word),
    },
  ];

  lookupMenu = document.createElement("div");
  lookupMenu.id = "lookup-menu";

  Object.assign(lookupMenu.style, {
    position: "fixed",
    background: "#ffffff",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: "2147483647",
    pointerEvents: "auto",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    overflow: "hidden",
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
      userSelect: "none",
    });
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(item.url, "_blank");
      cleanup();
    });
    lookupMenu.appendChild(option);
  });

  document.body.appendChild(lookupMenu);

  // ✅ Tính toán vị trí
  const menuRect = lookupMenu.getBoundingClientRect();
  let top = rect.top - menuRect.height - 8;
  if (top < 0) top = rect.bottom + 8;
  let left = rect.left + rect.width / 2 - menuRect.width / 2;
  if (left < 8) left = 8;
  if (left + menuRect.width > window.innerWidth - 8) {
    left = window.innerWidth - menuRect.width - 8;
  }

  lookupMenu.style.top = `${top}px`;
  lookupMenu.style.left = `${left}px`;
}

function cleanup() {
  if (lookupMenu) lookupMenu.remove();
  if (lookupButton) lookupButton.remove();
  lookupMenu = null;
  lookupButton = null;
}

// ==================== EXTRA FIXES ====================

// Cho phép chọn text trong markdown-body
const style = document.createElement("style");
style.textContent = `
  .markdown-body {
    user-select: text !important;
    -webkit-user-select: text !important;
  }
`;
document.head.appendChild(style);

// Ngăn recursion khi click menu / button
document.addEventListener("click", (e) => {
  if (lookupMenu && lookupMenu.contains(e.target)) {
    e.stopPropagation();
  }
  if (lookupButton && lookupButton.contains(e.target)) {
    e.stopPropagation();
  }
});
