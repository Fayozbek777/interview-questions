// ====================== HTML SAVOLLARI ======================
export const htmlQuestions = [
  {
    id: 1,
    level: "Beginner",
    question: "HTML nima?",
    answer:
      "HTML (HyperText Markup Language) — veb-sahifalarning strukturasini yaratish uchun ishlatiladigan standart tildir. U sahifadagi elementlarni (matn, rasm, link) joylashtirish tartibini belgilaydi.",
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>Sahifa sarlavhasi</title>
  </head>
  <body>
    <h1>Salom Dunyo!</h1>
  </body>
</html>`,
  },
  {
    id: 2,
    level: "Intermediate",
    question: "DOM (Document Object Model) nima?",
    answer:
      "DOM — bu HTML hujjatining dasturlash interfeysidir. Brauzer HTML sahifani yuklaganda, uni 'daraxt' (tree) ko'rinishidagi obyektga aylantiradi.\n\nDOM yordamida JavaScript orqali:\n1. Elementlarni tanlash\n2. Elementlarni o'zgartirish (style, content)\n3. Yangi elementlar yaratish\n4. Hodisalarni kuzatish mumkin.",
    code: `// DOM orqali elementni tanlash va matnini o'zgartirish
const sarlavha = document.querySelector('h1');
sarlavha.textContent = "Yangi sarlavha";
sarlavha.style.color = "blue";

// Yangi element qo'shish
const yangiP = document.createElement('p');
yangiP.innerText = "DOM orqali qo'shildim!";
document.body.appendChild(yangiP);`,
  },
  {
    id: 3,
    level: "Intermediate",
    question: "Semantic HTML nima va uning foydasi?",
    answer:
      "Semantic HTML — teg nomidan uning vazifasi tushuniladigan elementlar (<header>, <nav>, <main>, <section> va h.k.).\n\nAfzalliklari:\n1. SEO yaxshilanadi\n2. Accessibility (ekran o'quvchilar) uchun yaxshi\n3. Kodni o'qish osonlashadi.",
    code: `<header>
  <nav>Menyular</nav>
</header>
<main>
  <section>Asosiy kontent</section>
  <aside>Yon panel</aside>
</main>
<footer>Bog'lanish</footer>`,
  },
  {
    id: 4,
    level: "Advanced",
    question: "Script async va defer farqi?",
    answer:
      "Ikkala atribut ham script yuklanayotganda HTML parsingni to'xtatmaslik uchun ishlatiladi.\n\n- async: Yuklanishi bilan darhol ishga tushadi (tartib kafolatlanmaydi).\n- defer: HTML to'liq yuklangandan keyin ishga tushadi (tartib saqlanadi, tavsiya etiladi).",
    code: `<script async src="ads.js"></script>
<script defer src="main.js"></script>`,
  },
  {
    id: 5,
    level: "Intermediate",
    question: "HTML elementlari va atributlari nima?",
    answer:
      "Element — ochiluvchi teg + kontent + yopiluvchi teg. Atribut esa element haqida qo'shimcha ma'lumot beradi va ochiluvchi teg ichida yoziladi (class, id, href, src va h.k.).",
    code: `<a href="https://google.com" class="link" target="_blank">Google</a>`,
  },
  {
    id: 6,
    level: "Beginner",
    question: "Linkni yangi oynada ochish qanday amalga oshiriladi?",
    answer:
      "<a> tegining target='_blank' atributi yordamida. Xavfsizlik uchun rel='noopener noreferrer' qo'shish tavsiya etiladi.",
    code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Yangi oyna</a>`,
  },
  {
    id: 7,
    level: "Intermediate",
    question: "HTML List (ro'yxat) turlari qanday?",
    answer:
      "1. <ul> — tartibsiz ro'yxat (nuqtalar bilan)\n2. <ol> — tartibli ro'yxat (raqamlar bilan)\n3. <dl> — ta'riflar ro'yxati",
    code: `<ul>
  <li>Olma</li>
  <li>Banan</li>
</ul>`,
  },
  {
    id: 8,
    level: "Intermediate",
    question: "Form ichidagi 'label' tegi nima uchun kerak?",
    answer:
      "Label inputni tavsiflaydi va uni bosganda input faollashadi. 'for' atributi inputning 'id'si bilan bog'lanadi (yaxshi UX uchun muhim).",
    code: `<label for="ism">Ismingiz:</label>
<input type="text" id="ism">`,
  },
  {
    id: 9,
    level: "Advanced",
    question: "Iframe nima va uning kamchiliklari bormi?",
    answer:
      "Iframe — sahifa ichida boshqa sahifani yuklash imkonini beradi. Kamchiliklari: SEO yomonlashadi, xavfsizlik xatarlari bor, yuklanish sekinlashadi.",
    code: `<iframe src="https://maps.google.com" width="400" height="300"></iframe>`,
  },
  {
    id: 10,
    level: "Intermediate",
    question: "Button va Input type='submit' farqi?",
    answer:
      "<button> ichiga rasm, icon yoki boshqa element qo'yish mumkin. <input type='submit'> faqat matn (value) qabul qiladi.",
    code: `<button type="submit">
  <img src="icon.png" alt="yuborish" /> Yuborish
</button>`,
  },
  {
    id: 11,
    level: "Beginner",
    question: "HTMLda izoh (comment) qanday yoziladi?",
    answer:
      "Izohlar brauzerda ko'rinmaydi va kodni tushuntirish uchun ishlatiladi.",
    code: `<!-- Bu izoh brauzerda ko'rinmaydi -->`,
  },
  {
    id: 12,
    level: "Advanced",
    question: "SVG nima va uning afzalligi nimada?",
    answer:
      "SVG (Scalable Vector Graphics) — vektorli grafika. Afzalligi: sifati yo'qolmasdan istalgancha kattalashtirsa bo'ladi, hajmi kichik.",
    code: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="red" />
</svg>`,
  },
  {
    id: 13,
    level: "Intermediate",
    question: "Input elementining qanday turlari bor?",
    answer:
      "text, password, email, number, checkbox, radio, range, date, color, file va boshqalar (HTML5 da yangi turlar qo'shilgan).",
    code: `<input type="email">
<input type="number">
<input type="color">
<input type="range">`,
  },
  {
    id: 14,
    level: "Advanced",
    question: "Local Storage va Session Storage farqi?",
    answer:
      "Local Storage — brauzer yopilganda ham saqlanadi.\nSession Storage — faqat ochiq tab yopilguncha saqlanadi.",
    code: `localStorage.setItem("user", "Ali");
sessionStorage.setItem("temp", "value");`,
  },
  {
    id: 15,
    level: "Intermediate",
    question: "Table (jadval) strukturasi qanday?",
    answer:
      "Jadval <table>, qator <tr>, sarlavha katakchasi <th>, oddiy katakcha <td> teglaridan iborat.",
    code: `<table>
  <tr>
    <th>Ism</th>
    <th>Yosh</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>25</td>
  </tr>
</table>`,
  },
  {
    id: 16,
    level: "Intermediate",
    question: "Audio va Video teglarining 'controls' atributi nima qiladi?",
    answer:
      "'controls' atributi brauzerning standart media boshqaruv tugmalarini (play, pause, volume) ko'rsatadi.",
    code: `<video src="movie.mp4" controls width="320"></video>`,
  },
  {
    id: 17,
    level: "Intermediate",
    question: "Datalist tegi nima?",
    answer:
      "<input> uchun oldindan tayyorlangan takliflar ro'yxatini (autocomplete) yaratish uchun ishlatiladi.",
    code: `<input list="browsers">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>`,
  },
  {
    id: 18,
    level: "Beginner",
    question: "Strong va B teglarining farqi?",
    answer:
      "<strong> — semantik (muhim ma'lumot), SEO va accessibility uchun yaxshi.\n<b> — faqat vizual jihatdan qalin qiladi.",
    code: `<strong>Muhim xabar!</strong>`,
  },
  {
    id: 19,
    level: "Advanced",
    question: "Progress va Meter teglarining farqi?",
    answer:
      "<progress> — jarayon borishini ko'rsatish uchun.\n<meter> — ma'lum bir diapazonda qiymatni ko'rsatish uchun.",
    code: `<progress value="70" max="100"></progress>
<meter value="0.6" min="0" max="1">60%</meter>`,
  },
  {
    id: 20,
    level: "Intermediate",
    question: "HTMLda qaysi elementlar o'z-o'zidan yopiladi (Self-closing)?",
    answer:
      "Void elements: <img>, <br>, <hr>, <input>, <link>, <meta>, <area>, <base> va boshqalar.",
    code: `<br />
<img src="photo.jpg" alt="rasm" />
<input type="text" />`,
  },
  {
    id: 21,
    level: "Advanced",
    question: "Canvas va SVG farqi?",
    answer:
      "Canvas — pikselli, JavaScript orqali dinamik chiziladi (o'yinlar uchun yaxshi).\nSVG — vektorli, HTML teglaridan iborat, SEO uchun yaxshi.",
    code: `<canvas id="myCanvas"></canvas>`,
  },
  {
    id: 22,
    level: "Intermediate",
    question: "Entities (maxsus belgilar) nima?",
    answer:
      "HTMLda maxsus belgilarni (<, >, &, \" va h.k.) to'g'ri ko'rsatish uchun ishlatiladigan kodlar.",
    code: `&lt;   // < belgisi
&gt;   // > belgisi
&amp;  // & belgisi`,
  },
  {
    id: 23,
    level: "Intermediate",
    question: "Meta teglar va 'charset' atributi nima?",
    answer:
      "Meta teglar sahifa haqidagi metama'lumotlarni beradi. charset='UTF-8' — matnlar to'g'ri ko'rinishi uchun (o'zbekcha harflar, emoji).",
    code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
  },
  {
    id: 24,
    level: "Advanced",
    question: "Web Accessibility (A11y) nima?",
    answer:
      "Veb-saytni barcha odamlar, jumladan imkoniyati cheklanganlar uchun ham qulay qilish. Semantik teglar va aria atributlari ishlatiladi.",
    code: `<button aria-label="Yopish">✕</button>`,
  },
];
// ====================== CSS SAVOLLARI ======================
export const cssQuestions = [
  {
    id: 1,
    level: "Beginner",
    question: "CSS nima?",
    answer:
      "CSS (Cascading Style Sheets) — veb-sahifalarning tashqi ko'rinishini (ranglar, shriftlar, o'lchamlar, joylashuv) shakllantirish uchun ishlatiladigan tildir. U HTML strukturasini vizual jihatdan bezatadi va turli qurilmalarga moslashtiradi.",
    code: `/* CSS Sintaksisi */
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}`,
  },
  {
    id: 2,
    level: "Intermediate",
    question: "Box Model nima?",
    answer:
      "Box Model — CSS dagi har bir elementni to'rtburchak quti deb hisoblash tushunchasidir. Tarkibi:\n1. Content (asosiy kontent)\n2. Padding (ichki bo'shliq)\n3. Border (chegara)\n4. Margin (tashqi bo'shliq).",
    code: `.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  box-sizing: border-box;
}`,
  },
  {
    id: 3,
    level: "Beginner",
    question: "Selectorlar qanday turlarga bo'linadi?",
    answer:
      "Asosiy selector turlari:\n- Element selector (p, div, h1)\n- Class selector (.className)\n- ID selector (#idName)\n- Attribute selector ([type='text'])\n- Kombinatorlar (div > p, div p)",
    code: `p { color: black; }                    /* element */
.main-title { color: red; }           /* class */
#header { color: blue; }              /* id */
input[type="email"] { border: 1px solid blue; }`,
  },
  {
    id: 4,
    level: "Advanced",
    question: "Specificity (Vazn/Ustunlik) nima?",
    answer:
      "Bir xil elementga bir nechta CSS qoidasi qo'llanilganda qaysi biri ustun bo'lishini aniqlaydigan tizim.\nTartib: !important > Inline style > ID > Class/Attribute > Element",
    code: `#header { color: blue; }   /* eng yuqori */
.title { color: red; }      /* o'rtacha */
h1 { color: green; }        /* eng past */`,
  },
  {
    id: 5,
    level: "Intermediate",
    question: "Flexbox nima?",
    answer:
      "Flexbox — bir o'lchamli (gorizontal yoki vertikal) layout tizimi. Elementlarni konteyner ichida joylashtirish, tekislash va oraliqni boshqarish uchun ishlatiladi.",
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}`,
  },
  {
    id: 6,
    level: "Intermediate",
    question: "justify-content va align-items farqi?",
    answer:
      "justify-content — asosiy o'q (odatda gorizontal) bo'ylab tekislaydi.\nalign-items — ko'ndalang o'q (odatda vertikal) bo'ylab tekislaydi.",
    code: `.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
  },
  {
    id: 7,
    level: "Intermediate",
    question: "Position: absolute va relative farqi?",
    answer:
      "relative — element o'zining oddiy joyidan siljiydi, lekin joy egallaydi.\nabsolute — eng yaqin positioned ota-onaga nisbatan joylashadi va oqimdan chiqadi.",
    code: `.parent { position: relative; }
.child {
  position: absolute;
  top: 20px;
  right: 20px;
}`,
  },
  {
    id: 8,
    level: "Beginner",
    question: "z-index nima?",
    answer:
      "Elementlarning ustma-ustlik tartibini belgilaydi. Faqat position qiymati static bo'lmagan elementlarda ishlaydi.",
    code: `.modal {
  position: fixed;
  z-index: 9999;
}`,
  },
  {
    id: 9,
    level: "Intermediate",
    question: "display: none va visibility: hidden farqi?",
    answer:
      "display: none — element butunlay o'chiriladi va joy egallamaydi.\nvisibility: hidden — element ko'rinmaydi, lekin joy egallaydi.",
    code: `.hide { display: none; }
.invisible { visibility: hidden; }`,
  },
  {
    id: 10,
    level: "Intermediate",
    question: "Media query nima?",
    answer:
      "Turli ekran o'lchamlari uchun alohida CSS qoidalari yozish imkonini beradi (responsive dizayn uchun asos).",
    code: `@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`,
  },
  {
    id: 11,
    level: "Intermediate",
    question: "rem va em farqi nimada?",
    answer:
      "rem — <html> elementining font-size'iga bog'liq.\nem — o'zi turgan yoki ota elementning font-size'iga bog'liq.",
    code: `html { font-size: 16px; }
.rem-box { font-size: 2rem; } /* 32px */
.em-box { font-size: 2em; }   /* ota elementga bog'liq */`,
  },
  {
    id: 12,
    level: "Advanced",
    question: "CSS Grid nima?",
    answer:
      "Ikki o'lchamli (qator va ustun) kuchli layout tizimi. Murakkab dizaynlar uchun Flexboxdan afzalroq.",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
  },
  {
    id: 13,
    level: "Intermediate",
    question: "Transition va Animation farqi?",
    answer:
      "Transition — oddiy holatdan ikkinchi holatga silliq o'tish (hover va boshqalar).\nAnimation — keyframes yordamida murakkab, ko'p bosqichli harakatlar.",
    code: `.btn {
  transition: all 0.3s ease;
}
.btn:hover { transform: scale(1.05); }`,
  },
  {
    id: 14,
    level: "Intermediate",
    question: "BEM metodologiyasi nima?",
    answer:
      "BEM (Block — Element — Modifier) — CSS klasslarini nomlashning standart va tushunarli usuli.",
    code: `<div class="card card--featured">
  <h2 class="card__title">Sarlavha</h2>
</div>`,
  },
];
// ====================== JAVASCRIPT SAVOLLARI ======================
// ====================== JAVASCRIPT SAVOLLARI ======================
export const jsQuestions = [
  {
    id: 1,
    level: "Beginner",
    question: "JavaScript nima?",
    answer:
      "JavaScript — yuqori darajali, dinamik, interpretatsiya qilinadigan va ko'p paradigma (multi-paradigm) dasturlash tili. U veb-sahifalarni interaktiv qilish uchun ishlatiladi, hozirda Node.js orqali backend, mobil va desktop ilovalarda ham keng qo'llaniladi.",
    code: `// JS dinamik til hisoblanadi
let x = 10; 
x = "Salom"; // Xatolik bermaydi`,
  },
  {
    id: 2,
    level: "Beginner",
    question: "JavaScript data type-lari qanday?",
    answer:
      "JS da 8 ta ma'lumot turi mavjud:\n1. Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt.\n2. Non-primitive: Object (Array va Function ham obyektning maxsus turlari).",
    code: `let str = "Matn"; // String
let obj = { name: "Ali", age: 25 }; // Object`,
  },
  {
    id: 3,
    level: "Beginner",
    question: "== va === farqi nima?",
    answer:
      "== (loose equality) — faqat qiymatni solishtiradi va turini avtomatik o'zgartiradi.\n=== (strict equality) — ham qiymat, ham turini solishtiradi.",
    code: `5 == "5"   // true
5 === "5"  // false`,
  },
  {
    id: 4,
    level: "Intermediate",
    question: "Hoisting nima?",
    answer:
      "Hoisting — o'zgaruvchi va funksiya deklaratsiyalarining skop boshiga 'ko'tarilishi'. 'var' undefined bo'lib ko'tariladi, 'let' va 'const' TDZ (Temporal Dead Zone) sababli xatolik beradi.",
    code: `console.log(a); // undefined
var a = 5;

hello(); 
function hello() { console.log("Salom!"); }`,
  },
  {
    id: 5,
    level: "Beginner",
    question: "Scope nima?",
    answer:
      "Scope — o'zgaruvchilar va funksiyalarning ko'rinish zonasi. JS da 3 tur mavjud: Global, Function va Block scope (let/const).",
    code: `{
  let blockVar = "Faqat shu yerda mavjud";
}
// console.log(blockVar); // Error`,
  },
  {
    id: 6,
    level: "Advanced",
    question: "Closure nima?",
    answer:
      "Closure — ichki funksiyaning tashqi funksiya o'zgaruvchilarini eslab qolishi, hatto tashqi funksiya tugagan bo'lsa ham.",
    code: `function counter() {
  let count = 0;
  return () => ++count;
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2`,
  },
  {
    id: 7,
    level: "Intermediate",
    question: "this kalit so'zi nima?",
    answer:
      "'this' — funksiya chaqirilgan kontekstga ishora qiladi. Obyekt metodi ichida — obyekt, oddiy funksiyada — global, arrow functionda — tashqi this.",
    code: `const obj = {
  name: "Ali",
  showName() { console.log(this.name); }
};
obj.showName(); // Ali`,
  },
  {
    id: 8,
    level: "Intermediate",
    question: "call, apply va bind farqi?",
    answer:
      "Uchala metod ham 'this' ni boshqarish uchun:\n- call: argumentlarni alohida\n- apply: argumentlarni massivda\n- bind: yangi funksiya qaytaradi",
    code: `function greet(city) {
  console.log(this.name + ", " + city);
}
const person = { name: "Vali" };

greet.call(person, "Toshkent");
greet.apply(person, ["Samarqand"]);`,
  },
  {
    id: 9,
    level: "Intermediate",
    question: "Promise nima?",
    answer:
      "Promise — asinxron operatsiyaning natijasini ifodalovchi obyekt. Holatlari: Pending, Fulfilled, Rejected.",
    code: `const myPromise = new Promise((resolve, reject) => {
  if (success) resolve("OK");
  else reject("Xato");
});`,
  },
  {
    id: 10,
    level: "Intermediate",
    question: "async / await nima?",
    answer:
      "Async/await — promislar bilan ishlashning sintaktik shakari. 'async' funksiya promise qaytaradi, 'await' natijani kutadi.",
    code: `async function getData() {
  const result = await fetch('/api');
  return await result.json();
}`,
  },
  {
    id: 11,
    level: "Intermediate",
    question: "Event Loop qanday ishlaydi?",
    answer:
      "JavaScript bir vaqtda bitta ish bajaradi. Asinxron vazifalar Web API ga o'tadi, keyin Task Queue ga, Call Stack bo'sh bo'lganda bajariladi.",
    code: `console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Natija: 1 → 3 → 2`,
  },
  {
    id: 12,
    level: "Beginner",
    question: "var, let va const farqi nimada?",
    answer:
      "- var: function scope, hoisting, qayta deklaratsiya mumkin\n- let: block scope, TDZ bor\n- const: block scope, qiymatni o'zgartirib bo'lmaydi",
    code: `const PI = 3.14;
let count = 0;
var name = "Ali";`,
  },
  {
    id: 13,
    level: "Intermediate",
    question: "splice() va slice() farqi?",
    answer:
      "slice() — nusxa oladi, originalni o'zgartirmaydi.\nsplice() — massivni o'zgartiradi (qo'shish/o'chirish).",
    code: `let arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3);     // [2, 3]
arr.splice(1, 2);                 // arr → [1, 4]`,
  },
  {
    id: 14,
    level: "Beginner",
    question: "Callback nima?",
    answer:
      "Callback — boshqa funksiyaga argument sifatida beriladigan va keyinroq chaqiriladigan funksiya.",
    code: `function process(data, callback) {
  callback(result);
}`,
  },
  {
    id: 15,
    level: "Intermediate",
    question: "Optional chaining (?.) nima uchun kerak?",
    answer:
      "Chuqur obyekt xususiyatlariga xavfsiz murojaat qilish uchun. Null/undefined bo'lsa xatolik bermaydi.",
    code: `const user = { profile: { name: "Ali" } };
console.log(user?.address?.city); // undefined`,
  },
  {
    id: 16,
    level: "Intermediate",
    question: "Destructuring assignment nima?",
    answer:
      "Obyekt yoki massivdan qiymatlarni qisqa va oson usulda ajratib olish.",
    code: `const user = { ism: "Ali", yosh: 25 };
const { ism, yosh } = user;`,
  },
];
// ====================== REACT SAVOLLARI ======================
export const reactQuestions = [
  {
    id: 1,
    level: "Beginner",
    question: "React nima?",
    answer:
      "React — foydalanuvchi interfeyslarini (UI) yaratish uchun ishlatiladigan JavaScript kutubxonasi. Meta (Facebook) tomonidan ishlab chiqilgan bo'lib, deklarativ va komponentlarga asoslangan yondashuvdan foydalanadi.",
    code: `function Welcome() {
  return <h1>Salom, React!</h1>;
}`,
  },
  {
    id: 2,
    level: "Beginner",
    question: "Virtual DOM nima va u qanday ishlaydi?",
    answer:
      "Virtual DOM — haqiqiy DOM ning xotiradagi yengil nusxasi. O'zgarish bo'lganda React avval Virtual DOM ni yangilaydi, keyin diffing qilib, faqat o'zgargan qismlarni haqiqiy DOM ga yuboradi.",
    code: `<div>
  <h1>Sarlavha</h1>
  <span>O'zgargan qiymat: {count}</span>
</div>`,
  },
  {
    id: 3,
    level: "Beginner",
    question: "useState hook nima?",
    answer:
      "useState — funksional komponentlarda holat (state) boshqarish uchun ishlatiladigan hook. U [qiymat, setQiymat] massivini qaytaradi.",
    code: `const [count, setCount] = useState(0);
setCount(count + 1);`,
  },
  {
    id: 4,
    level: "Beginner",
    question: "JSX nima?",
    answer:
      "JSX — JavaScript ichida HTML-ga o'xshash sintaksis yozish imkonini beruvchi kengaytma. Babel uni React.createElement ga aylantiradi.",
    code: `const element = <h1>Salom Dunyo!</h1>;`,
  },
  {
    id: 5,
    level: "Beginner",
    question: "Props nima?",
    answer:
      "Props — ota komponentdan bola komponentga ma'lumot uzatish usuli. Ular faqat o'qish uchun (read-only).",
    code: `<Welcome name="Ali" age={25} />`,
  },
  {
    id: 6,
    level: "Intermediate",
    question: "useEffect hook nima?",
    answer:
      "useEffect — side-effect'larni (API chaqirish, DOM manipulyatsiyasi va h.k.) boshqarish uchun ishlatiladi. Dependency array bilan ishlaydi.",
    code: `useEffect(() => {
  console.log("Komponent yuklandi");
  return () => console.log("Tozalash ishladi"); // cleanup
}, []);`,
  },
  {
    id: 7,
    level: "Intermediate",
    question: "Props va State farqi nimada?",
    answer:
      "Props — tashqaridan keladi va o'zgartirib bo'lmaydi.\nState — komponent ichida saqlanadi va useState orqali o'zgartiriladi.",
    code: `// Props
<User name="Ali" />

// State
const [count, setCount] = useState(0);`,
  },
  {
    id: 8,
    level: "Beginner",
    question: "React-da 'key' prop nima uchun kerak?",
    answer:
      "Ro'yxat render qilganda har bir elementni noyob identifikatsiya qilish uchun kerak. Reactga qaysi element o'zgarganini tez aniqlashga yordam beradi.",
    code: `{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`,
  },
  {
    id: 9,
    level: "Intermediate",
    question: "Controlled va Uncontrolled komponentlar farqi?",
    answer:
      "Controlled — qiymat React state orqali boshqariladi.\nUncontrolled — qiymat DOM da saqlanadi (useRef orqali olinadi).",
    code: `// Controlled
<input value={text} onChange={e => setText(e.target.value)} />`,
  },
  {
    id: 10,
    level: "Intermediate",
    question: "React Fragment nima uchun kerak?",
    answer:
      "Ortiqcha <div> qo'shmasdan bir nechta elementni birlashtirish uchun ishlatiladi.",
    code: `<>
  <h1>Sarlavha</h1>
  <p>Matn</p>
</>`,
  },
  {
    id: 11,
    level: "Intermediate",
    question: "Context API nima?",
    answer:
      "Prop Drilling muammosini hal qilish uchun. Ma'lumotni chuqur joylashgan komponentlarga to'g'ridan-to'g'ri uzatish imkonini beradi.",
    code: `const ThemeContext = createContext();

<ThemeContext.Provider value="dark">
  <Child />
</ThemeContext.Provider>`,
  },
  {
    id: 12,
    level: "Advanced",
    question: "useMemo va useCallback farqi nimada?",
    answer:
      "useMemo — qimmat hisoblanadigan qiymatni keshlaydi.\nuseCallback — funksiyaning o'zini keshlaydi (re-render paytida qayta yaratilmasligi uchun).",
    code: `const memoizedValue = useMemo(() => expensiveCalc(a), [a]);
const memoizedFunc = useCallback(() => handleClick(a), [a]);`,
  },
  {
    id: 13,
    level: "Advanced",
    question: "Higher-Order Component (HOC) nima?",
    answer:
      "HOC — komponentni qabul qilib, unga qo'shimcha logic qo'shgan holda yangi komponent qaytaradigan funksiya.",
    code: `const withAuth = (Component) => {
  return (props) => isAuth ? <Component {...props} /> : <Login />;
};`,
  },
  {
    id: 14,
    level: "Intermediate",
    question: "Custom Hook nima va nega kerak?",
    answer:
      "Custom Hook — o'zimiz yaratadigan hook. Bir xil logicni bir nechta komponentda qayta ishlatish uchun ishlatiladi. Nomi 'use' bilan boshlanishi shart.",
    code: `function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  // logic...
  return width;
}`,
  },
  {
    id: 15,
    level: "Intermediate",
    question: "Nima uchun hooklarni if yoki loop ichida ishlatish mumkin emas?",
    answer:
      "React hooklarning chaqirilish tartibiga tayanadi. Agar hook shartli yoki tsiklda bo'lsa, tartib buziladi va React xatolik beradi.",
    code: `// XATO
if (condition) useState(0);

// TO'G'RI
const [state, setState] = useState(0);`,
  },
  {
    id: 16,
    level: "Advanced",
    question: "React.memo nima?",
    answer:
      "React.memo — komponentni memoizatsiya qiladi. Props o'zgarmagan bo'lsa, qayta render bo'lishini oldini oladi (performance uchun).",
    code: `const MemoizedComponent = React.memo((props) => {
  return <div>{props.name}</div>;
});`,
  },
];
