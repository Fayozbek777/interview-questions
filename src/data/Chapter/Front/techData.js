// src/data/techData.js

export const techTasks = [
  {
    id: "js-1",
    category: "JavaScript",
    difficulty: "Oson",
    title: "Ikkita sonni qo‘shish",
    description:
      "Ikkita sonni qabul qilib, ularning yig‘indisini qaytaruvchi funksiya yozing.",
    hint: "Maslahat: return operatori va oddiy + operatoridan foydalaning.",
    solution: `function yigindi(a, b) {
  return a + b;
}

// Misol:
console.log(yigindi(5, 3)); // 8`,
  },

  {
    id: "js-2",
    category: "JavaScript",
    difficulty: "Oson",
    title: "Massivdagi eng katta sonni topish",
    description: "Berilgan massiv ichidagi eng katta sonni toping.",
    hint: "Maslahat: Math.max() va spread operator (...) dan foydalaning.",
    solution: `function engKatta(arr) {
  return Math.max(...arr);
}

// Misol:
console.log(engKatta([3, 7, 2, 9, 1])); // 9`,
  },

  {
    id: "js-3",
    category: "JavaScript",
    difficulty: "Oson",
    title: "Massivni teskari qilish",
    description: "Berilgan massivni teskari tartibda qaytaring.",
    hint: "Maslahat: spread operator va reverse() metodidan foydalaning.",
    solution: `function teskari(arr) {
  return [...arr].reverse();
}

// Misol:
console.log(teskari([1, 2, 3, 4])); // [4, 3, 2, 1]`,
  },

  {
    id: "js-4",
    category: "JavaScript",
    difficulty: "Oson",
    title: "Ismni katta harf bilan boshlash",
    description: "Berilgan ismning birinchi harfini katta qilib qaytaring.",
    hint: "Maslahat: charAt(0) va toUpperCase() metodlarini ishlating.",
    solution: `function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Misol:
console.log(capitalize("ali")); // "Ali"`,
  },

  {
    id: "js-6",
    category: "JavaScript",
    difficulty: "Oson",
    title: "So'zlarni sanash",
    description: "Berilgan gapda nechta so'z borligini aniqlang.",
    hint: "Maslahat: split(' ') metodidan foydalaning.",
    solution: `function wordCount(str) {
  return str.trim().split(/\\s+/).length;
}

// Misol:
console.log(wordCount("Salom dunyo")) // 2`,
  },

  {
    id: "js-7",
    category: "JavaScript",
    difficulty: "Oson",
    title: "Faktorialni hisoblash",
    description: "Berilgan sonning faktorialini (n!) hisoblang.",
    hint: "Maslahat: loop (for) yoki rekursiyadan foydalaning.",
    solution: `function faktorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

// Misol:
console.log(faktorial(5)); // 120`,
  },

  {
    id: "js-8",
    category: "JavaScript",
    difficulty: "Oson",
    title: "Dublikatlarni o'chirish",
    description: "Massiv ichidagi takrorlangan elementlarni olib tashlang.",
    hint: "Maslahat: new Set() dan foydalanish eng qisqa yo'l.",
    solution: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Misol:
console.log(removeDuplicates([1, 1, 2, 2, 3])); // [1, 2, 3]`,
  },

  {
    id: "js-9",
    category: "JavaScript",
    difficulty: "Oson",
    title: "Unli harflarni sanash",
    description:
      "Matn ichida nechta unli harf (a, e, i, o, u) borligini toping.",
    hint: "Maslahat: match(/[aeiou]/gi) metodini ishlating.",
    solution: `function countVowels(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

// Misol:
console.log(countVowels("salom")) // 2`,
  },
  {
    id: "react-1",
    category: "React",
    difficulty: "Oson",
    title: "Oddiy Counter",
    description:
      "Ekranada raqam ko‘rsatilsin. + va - tugmalari bilan raqamni oshirib/kamaytiring.",
    hint: "Maslahat: useState hookidan foydalaning.",
    solution: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>+</button>
<span>{count}</span>
<button onClick={() => setCount(count - 1)}>-</button>`,
  },

  {
    id: "react-2",
    category: "React",
    difficulty: "Oson",
    title: "Oddiy Todo List",
    description:
      "Input maydoni va Qo‘shish tugmasi orqali vazifalar ro‘yxatini yarating.",
    hint: "Maslahat: useState bilan array boshqaring va map() dan foydalaning.",
    solution: `const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");

const qoshish = () => {
  if (input.trim()) {
    setTodos([...todos, input]);
    setInput("");
  }
};`,
  },

  {
    id: "js-5",
    category: "JavaScript",
    difficulty: "Oson",
    title: "Juft sonlarni filtrlash",
    description: "Massivdan faqat juft sonlarni qaytaruvchi funksiya yozing.",
    hint: "Maslahat: filter() metodi va % operatoridan foydalaning.",
    solution: `function juftSonlar(arr) {
  return arr.filter(num => num % 2 === 0);
}`,
  },

  {
    id: "react-3",
    category: "React",
    difficulty: "Oson",
    title: "Real-time Input ko‘rsatish",
    description: "Inputga yozilgan matn pastda darhol ko‘rsatilsin.",
    hint: "Maslahat: useState va onChange eventidan foydalaning.",
    solution: `const [text, setText] = useState("");

<input onChange={(e) => setText(e.target.value)} />
<p>{text}</p>`,
  },

  {
    id: "react-5",
    category: "React",
    difficulty: "Oson",
    title: "Show/Hide (Toggle)",
    description: "Tugma bosilganda matn ko'rinsin yoki yo'qolsin.",
    hint: "Maslahat: Boolean state va && operatoridan foydalaning.",
    solution: `const [show, setShow] = useState(true);

<button onClick={() => setShow(!show)}>
  {show ? "Yashirish" : "Ko'rsatish"}
</button>

{show && <p>Yashirin matn</p>}`,
  },

  {
    id: "react-6",
    category: "React",
    difficulty: "Oson",
    title: "API dan ma'lumot olish",
    description:
      "Komponent yuklanganda API dan ma'lumot olib ro'yxat qilib chiqaring.",
    hint: "Maslahat: useEffect + fetch ishlating.",
    solution: `useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);

console.log(data)
`,
  },

  {
    id: "react-7",
    category: "React",
    difficulty: "Oson",
    title: "Form yuborish (Handling)",
    description: "Inputga ism yozib Submit bosilganda alert chiqsin.",
    hint: "Maslahat: e.preventDefault() unutmang.",
    solution: `const handleSubmit = (e) => {
  e.preventDefault();
  alert(name);
};`,
  },

  {
    id: "react-8",
    category: "React",
    difficulty: "Oson",
    title: "Timer (Sekundomer)",
    description: "Har sekundda raqam oshib boradi.",
    hint: "Maslahat: setInterval + useEffect.",
    solution: `useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(s => s + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);`,
  },

  {
    id: "react-4",
    category: "React",
    difficulty: "Oson",
    title: "Rang o‘zgartiruvchi button",
    description: "Button bosilganda sahifa rangi o‘zgarsin.",
    hint: "Maslahat: useState bilan color saqlang.",
    solution: `const [color, setColor] = useState("#ffffff");`,
  },
];

export default techTasks;
