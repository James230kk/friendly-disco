const lettersContainer = document.getElementById('letters');
const result = document.getElementById('result');

// أسماء الحروف (A = Ay, B = Bee ...)
const letterNames = {
  A: "Ay", B: "Bee", C: "See", D: "Dee", E: "Ee",
  F: "Ef", G: "Jee", H: "Aitch", I: "Eye", J: "Jay",
  K: "Kay", L: "El", M: "Em", N: "En", O: "Oh",
  P: "Pee", Q: "Cue", R: "Ar", S: "Es", T: "Tee",
  U: "You", V: "Vee", W: "Double You", X: "Ex",
  Y: "Why", Z: "Zee"
};

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

  // الكبير: يظهر الاسم + ينطق اسم الحرف
  bigDiv.addEventListener('click', () => {
    const name = letterNames[big];
    result.textContent = `Letter name: ${big} = ${name}`;

    const utter = new SpeechSynthesisUtterance(`${big}, pronounced ${name}`);
    utter.lang = 'en-US';
    speechSynthesis.speak(utter);
  });

  // الصغير: ينطق الحرف فقط
  smallDiv.addEventListener('click', () => {
    const utter = new SpeechSynthesisUtterance(small);
    utter.lang = 'en-US';
    speechSynthesis.speak(utter);
  });

  box.appendChild(bigDiv);
  box.appendChild(smallDiv);
  lettersContainer.appendChild(box);
}
