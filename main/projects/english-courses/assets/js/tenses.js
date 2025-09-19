(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();
document.getElementById('check-answer').addEventListener('click', function() {
  const radios = document.getElementsByName('q1');
  let answer = '';
  for (const radio of radios) {
    if (radio.checked) {
      answer = radio.value;
    }
  }
  const result = document.getElementById('quiz-result');
  if (answer === 'goes') {
    result.innerHTML = '✅ Chính xác!';
    result.style.color = 'green';
  } else {
    result.innerHTML = '❌ Sai rồi, đáp án đúng là "goes".';
    result.style.color = 'red';
  }
});
