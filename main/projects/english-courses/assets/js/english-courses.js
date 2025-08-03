(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

// Đây là nơi bạn có thể thêm script JS riêng cho Common
// Ví dụ: Load API, fetch repo, xử lý dynamic link sau này
// english-courses.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.study-item .btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', event => {
      const courseName = btn.closest('.study-item').querySelector('h3').textContent;
      console.log(`Bạn vừa chọn: ${courseName}`);
      // Sau này có thể redirect hoặc mở chi tiết
    });
  });
});
