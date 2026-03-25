const lettersContainer = document.getElementById('letters');
const result = document.getElementById('result');

// اسم الحرف بالعربي
const letterNames = {
  A: "اَي", B: "بي", C: "سي", D: "دي", E: "إي",
  F: "إف", G: "جي", H: "إتش", I: "آي", J: "جَي",
  K: "كَي", L: "إل", M: "إم", N: "إن", O: "أو",
  P: "بي", Q: "كيو", R: "آر", S: "إس", T: "تي",
  U: "يُو", V: "في", W: "دَبُل يُو", X: "إكس",
  Y: "واي", Z: "زِد"
};

// نطق الحرف بالعربي
const letterSounds = {
  A: "أَ", B: "بَ", C: "سَ", D: "دَ", E: "إِ",
  F: "فَ", G: "جَ", H: "هَ", I: "إِ",
  J: "جَ", K: "كَ", L: "لَ", M: "مَ", N: "نَ",
  O: "أُ", P: "پَ", Q: "كْيُو", R: "رَ", S: "سَ",
  T: "تَ", U: "أُ", V: "ڤِ", W: "وُ", X: "كْس",
  Y: "يَ", Z: "زَ"
};

// إنشاء الحروف
for (let i = 65; i <= 90; i++) {
  const big = String.fromCharCode(i);
  const small = big.toLowerCase();

  const box = document.createElement('div');
  box.className = 'letter-box';

  const bigDiv = document.createElement('div');
  bigDiv.className = 'big';
  bigDiv.textContent = big;

  const smallDiv = document.createElement('div');
  smallDiv.className = 'small';
  smallDiv.textContent = small;

  // الكبير: اسم الحرف بالعربي
  bigDiv.addEventListener('click', () => {
    const name = letterNames[big];
    result.textContent = `اسم الحرف: ${name}`;

    const utter = new SpeechSynthesisUtterance(name);
    utter.lang = 'ar-SA';
    speechSynthesis.speak(utter);
  });

  // الصغير: نطق الحرف بالعربي
  smallDiv.addEventListener('click', () => {
    const sound = letterSounds[big];
    const utter = new SpeechSynthesisUtterance(sound);
    utter.lang = 'ar-SA';
    speechSynthesis.speak(utter);
  });

  box.appendChild(bigDiv);
  box.appendChild(smallDiv);
  lettersContainer.appendChild(box);
}
