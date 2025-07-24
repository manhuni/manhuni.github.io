console.log('english courses Page Loaded.');

// Đây là nơi bạn có thể thêm script JS riêng cho Common
// Ví dụ: Load API, fetch repo, xử lý dynamic link sau này
// english-courses.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('English Courses page loaded!');

  // Ví dụ: Bắt sự kiện click (có thể mở modal, tải bài học chi tiết, v.v.)
  const lessonLinks = document.querySelectorAll('.lesson-list a');

  lessonLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const lessonName = link.textContent.trim();
      console.log(`You clicked on: ${lessonName}`);
      // Sau này có thể chuyển sang trang chi tiết hoặc load AJAX
    });
  });
});
