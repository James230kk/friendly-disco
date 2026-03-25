const lettersContainer = document.getElementById('letters');
const result = document.getElementById('result');

// إنشاء الحروف A-Z تلقائياً
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const div = document.createElement('div');
  div.className = 'letter';
  div.textContent = letter;

  // ضغطة واحدة: عرض الحرف
  div.addEventListener('click', () => {
    result.textContent = `Letter: ${letter}`;
  });

  // ضغطة مزدوجة: نطق الحرف
  div.addEventListener('dblclick', () => {
    const utter = new SpeechSynthesisUtterance(letter);
    utter.lang = 'en-US';
    speechSynthesis.speak(utter);
  });

  lettersContainer.appendChild(div);
}
