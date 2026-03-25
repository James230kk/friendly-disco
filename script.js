const lettersContainer = document.getElementById('letters');
const result = document.getElementById('result');

// إنشاء الحروف A-Z
for (let i = 65; i <= 90; i++) {
  const big = String.fromCharCode(i);      // A
  const small = big.toLowerCase();         // a

  const box = document.createElement('div');
  box.className = 'letter-box';

  const bigDiv = document.createElement('div');
  bigDiv.className = 'big';
  bigDiv.textContent = big;

  const smallDiv = document.createElement('div');
  smallDiv.className = 'small';
  smallDiv.textContent = small;

  // الكبير: يظهر الاسم
  bigDiv.addEventListener('click', () => {
    result.textContent = `Letter name: ${big}`;
  });

  // الصغير: ينطق الحرف
  smallDiv.addEventListener('click', () => {
    const utter = new SpeechSynthesisUtterance(small);
    utter.lang = 'en-US';
    speechSynthesis.speak(utter);
  });

  box.appendChild(bigDiv);
  box.appendChild(smallDiv);
  lettersContainer.appendChild(box);
}
