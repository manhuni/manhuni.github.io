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
      result.textContent = 'Please select an answer.';
      result.style.color = 'red';
      return;
    }
    if (answer.value === 'he') {
      result.textContent = 'Correct! ✅';
      result.style.color = 'green';
    } else {
      result.textContent = 'Incorrect. Try again! ❌';
      result.style.color = 'red';
    }
  });
});
