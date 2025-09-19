(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('check-answer');
  const result = document.getElementById('quiz-result');

  btn.addEventListener('click', function () {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (!answer) {
      result.textContent = 'Vui lòng chọn đáp án.';
      result.style.color = 'red';
      return;
    }
    if (answer.value === 'beautifully') {
      result.textContent = 'Chính xác! ✅';
      result.style.color = 'green';
    } else {
      result.textContent = 'Sai rồi. Hãy thử lại! ❌';
      result.style.color = 'red';
    }
  });
});
