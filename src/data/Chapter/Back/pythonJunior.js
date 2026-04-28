export const pythonJuniorQuestions = [
  {
    id: 1,
    level: "Beginner",
    question: "Python’da data types qanday?",
    answer:
      "Python’da asosiy data types: int, float, str, bool, list, tuple, set, dict.",
    explanation:
      "Har bir data type turli ma’lumot saqlaydi: int son, str matn, list ro‘yxat, dict key-value.",
    code: `x = 10
y = 3.14
name = "Ali"
is_active = True`,
  },
  {
    id: 2,
    level: "Beginner",
    question: "List nima?",
    answer: "List — tartibli va o‘zgaruvchan (mutable) ma’lumotlar to‘plami.",
    explanation:
      "List ichiga istalgan data type qo‘yish mumkin va o‘zgartirish mumkin.",
    code: `numbers = [1, 2, 3]
numbers.append(4)
print(numbers)`,
  },
  {
    id: 3,
    level: "Beginner",
    question: "Tuple nima?",
    answer:
      "Tuple — tartibli lekin o‘zgarmas (immutable) ma’lumotlar to‘plami.",
    explanation: "Tuple yaratilgandan keyin uni o‘zgartirib bo‘lmaydi.",
    code: `t = (1, 2, 3)
# t[0] = 10 ❌ error`,
  },
  {
    id: 4,
    level: "Beginner",
    question: "List va Tuple farqi nima?",
    answer: "List o‘zgaradi, Tuple o‘zgarmaydi.",
    explanation: "List CRUD operations qiladi, Tuple esa faqat o‘qiladi.",
    code: `my_list = [1, 2]
my_tuple = (1, 2)

my_list[0] = 10   # OK
# my_tuple[0] = 10 ❌`,
  },
  {
    id: 5,
    level: "Beginner",
    question: "Dictionary nima?",
    answer: "Dictionary — key:value ko‘rinishida ma’lumot saqlovchi struktura.",
    explanation: "Har bir qiymat kalit orqali chaqiriladi.",
    code: `user = {
  "name": "Ali",
  "age": 20
}

print(user["name"])`,
  },
  {
    id: 6,
    level: "Beginner",
    question: "Dictionary qanday ishlaydi?",
    answer: "Key orqali value olinadi yoki yangilanadi.",
    explanation: "Dictionary tez ishlaydi (hash table asosida).",
    code: `user = {}
user["name"] = "Ali"
user["age"] = 20`,
  },
  {
    id: 7,
    level: "Beginner",
    question: "Set nima?",
    answer: "Set — tartibsiz va takrorlanmaydigan elementlar to‘plami.",
    explanation: "Duplicate elementlar avtomatik o‘chadi.",
    code: `nums = {1, 2, 2, 3}
print(nums)`,
  },
  {
    id: 8,
    level: "Beginner",
    question: "String nima?",
    answer: "String — matn saqlash uchun ishlatiladi.",
    explanation: "String immutable bo‘ladi va methodlar orqali ishlanadi.",
    code: `text = "Hello"
print(text.upper())`,
  },
  {
    id: 9,
    level: "Beginner",
    question: "Type() nima?",
    answer: "Variable turini tekshiradi.",
    explanation: "Debug va validation uchun ishlatiladi.",
    code: `x = 10
print(type(x))`,
  },
  {
    id: 10,
    level: "Beginner",
    question: "If/else nima?",
    answer: "Shartli operator.",
    explanation: "Shart true yoki false bo‘yicha kod ishlaydi.",
    code: `age = 18

if age >= 18:
    print("Adult")
else:
    print("Teen")`,
  },
  {
    id: 11,
    level: "Beginner",
    question: "For loop nima?",
    answer: "Takrorlash operatori.",
    explanation: "Ma’lum marta yoki collection bo‘yicha yuradi.",
    code: `for i in range(5):
    print(i)`,
  },
  {
    id: 12,
    level: "Beginner",
    question: "While loop nima?",
    answer: "Shart bajarilguncha ishlaydigan loop.",
    explanation: "Infinite loop bo‘lib qolmasligi kerak.",
    code: `i = 0
while i < 3:
    print(i)
    i += 1`,
  },
  {
    id: 13,
    level: "Beginner",
    question: "Function nima?",
    answer: "Qayta ishlatiladigan kod bloki.",
    explanation: "Code qayta yozilmasligi uchun ishlatiladi.",
    code: `def greet(name):
    return "Hello " + name`,
  },
  {
    id: 14,
    level: "Beginner",
    question: "Lambda nima?",
    answer: "Qisqa function yozish usuli.",
    explanation: "Oddiy functionning qisqa versiyasi.",
    code: `add = lambda a, b: a + b`,
  },
  {
    id: 15,
    level: "Beginner",
    question: "List comprehension nima?",
    answer: "List yaratishning qisqa usuli.",
    explanation: "Loopni bir qatorda yozish.",
    code: `[x for x in range(5)]`,
  },
  {
    id: 16,
    level: "Beginner",
    question: "Exception nima?",
    answer: "Programma xatolarini boshqarish.",
    explanation: "Try/except orqali xato ushlanadi.",
    code: `try:
    10 / 0
except:
    print("Error")`,
  },
  {
    id: 17,
    level: "Beginner",
    question: "File handling nima?",
    answer: "Fayl o‘qish va yozish.",
    explanation: "with open orqali xavfsiz ishlanadi.",
    code: `with open("test.txt", "w") as f:
    f.write("Hello")`,
  },
  {
    id: 18,
    level: "Beginner",
    question: "Import nima?",
    answer: "Boshqa moduldan kod olish.",
    explanation: "Code reuse uchun kerak.",
    code: `import math
print(math.sqrt(16))`,
  },
  {
    id: 19,
    level: "Beginner",
    question: "Input nima?",
    answer: "Foydalanuvchidan ma’lumot olish.",
    explanation: "CLI applicationlarda ishlatiladi.",
    code: `name = input("Ism: ")`,
  },
  {
    id: 20,
    level: "Beginner",
    question: "Len nima?",
    answer: "Elementlar sonini qaytaradi.",
    explanation: "String, list, dict bilan ishlaydi.",
    code: `len("hello")`,
  },
  {
    id: 21,
    level: "Beginner",
    question: "Append nima?",
    answer: "Listga element qo‘shish.",
    explanation: "Oxiriga qo‘shadi.",
    code: `arr.append(3)`,
  },
  {
    id: 22,
    level: "Beginner",
    question: "Pop nima?",
    answer: "Elementni o‘chirish.",
    explanation: "Oxirgi elementni olib tashlaydi.",
    code: `arr.pop()`,
  },
  {
    id: 23,
    level: "Beginner",
    question: "KeyError nima?",
    answer: "Mavjud bo‘lmagan key chaqirilganda chiqadi.",
    explanation: "get() bilan oldini olish mumkin.",
    code: `user.get("name")`,
  },
  {
    id: 24,
    level: "Beginner",
    question: "Get() nima?",
    answer: "Xavfsiz qiymat olish.",
    explanation: "Key bo‘lmasa error bermaydi.",
    code: `user.get("name", "default")`,
  },
  {
    id: 25,
    level: "Beginner",
    question: "Boolean nima?",
    answer: "True yoki False qiymat.",
    explanation: "Shartlarda ishlatiladi.",
    code: `is_ok = True`,
  },
];
