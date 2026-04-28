export const pythonAdvancedQuestions = [
  {
    id: 1,
    level: "Intermediate",
    question: "REST API nima?",
    answer:
      "REST API — bu HTTP orqali client va server o‘rtasida ishlaydigan arxitektura. Har bir resource (masalan users) alohida endpoint orqali boshqariladi.",
    explanation:
      "Frontend GET orqali data oladi, POST orqali yuboradi. Endpointlar aniq vazifa bajaradi.",
    code: `@app.route("/users", methods=["GET"])
def get_users():
    return {"users": []}`,
  },
  {
    id: 2,
    level: "Intermediate",
    question: "GET va POST farqi nima?",
    answer:
      "GET ma’lumot olish uchun ishlatiladi, POST esa yangi ma’lumot yaratish uchun.",
    explanation:
      "GET URL’da ko‘rinadi va cache bo‘lishi mumkin. POST esa body orqali yuboriladi.",
  },
  {
    id: 3,
    level: "Intermediate",
    question: "PUT va PATCH farqi nima?",
    answer:
      "PUT butun obyektni yangilaydi, PATCH esa faqat kerakli fieldlarni o‘zgartiradi.",
    explanation: "PATCH kichik update’lar uchun qulay va kamroq data yuboradi.",
    code: `# PATCH
@app.route("/user/<id>", methods=["PATCH"])
def update_user(id):
    data = request.json
    return {"updated": data}`,
  },
  {
    id: 4,
    level: "Intermediate",
    question: "HTTP status code’lar nima?",
    answer:
      "Server javob holatini bildiradi. Masalan: 200 OK, 201 Created, 404 Not Found, 500 Server Error.",
    explanation:
      "Frontend shu code orqali request muvaffaqiyatli yoki xato ekanini biladi.",
  },
  {
    id: 5,
    level: "Intermediate",
    question: "Pagination nima?",
    answer: "Katta hajmdagi ma’lumotlarni qismlarga bo‘lib qaytarish.",
    explanation: "Performance uchun muhim. page va limit orqali ishlaydi.",
    code: `page = request.args.get("page", 1)
limit = request.args.get("limit", 10)`,
  },
  {
    id: 6,
    level: "Intermediate",
    question: "SQL SELECT qanday ishlaydi?",
    answer: "SELECT jadvaldan ma’lumot olish uchun ishlatiladi.",
    explanation: "WHERE bilan filter, ORDER BY bilan tartiblash qilinadi.",
    code: `SELECT * FROM users WHERE age > 18 ORDER BY age DESC;`,
  },
  {
    id: 7,
    level: "Intermediate",
    question: "JOIN nima?",
    answer: "Bir nechta jadvalni bog‘lash uchun ishlatiladi.",
    explanation: "Foreign key orqali relation yaratiladi.",
    code: `SELECT u.name, o.id
FROM users u
JOIN orders o ON u.id = o.user_id;`,
  },
  {
    id: 8,
    level: "Intermediate",
    question: "Primary key nima?",
    answer: "Har bir row’ni unique aniqlovchi ustun.",
    explanation: "Duplicate bo‘lmaydi va odatda id bo‘ladi.",
  },
  {
    id: 9,
    level: "Intermediate",
    question: "Foreign key nima?",
    answer: "Boshqa jadval bilan bog‘lanish uchun ishlatiladi.",
    explanation: "Relation yaratadi (masalan user va order).",
  },
  {
    id: 10,
    level: "Intermediate",
    question: "ORM nima?",
    answer: "Database bilan Python objectlar orqali ishlash usuli.",
    explanation: "SQL yozmasdan query qilish imkonini beradi.",
    code: `User.objects.filter(age__gt=18)`,
  },
  {
    id: 11,
    level: "Intermediate",
    question: "Django Model nima?",
    answer: "Database jadvalining Python’dagi ko‘rinishi.",
    explanation: "Har bir field jadvaldagi ustunga mos keladi.",
    code: `class User(models.Model):
    name = models.CharField(max_length=100)`,
  },
  {
    id: 12,
    level: "Intermediate",
    question: "Serializer nima?",
    answer: "Modelni JSON formatga o‘tkazadi va validatsiya qiladi.",
    explanation: "API’da data yuborish va olish uchun kerak.",
    code: `class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"`,
  },
  {
    id: 13,
    level: "Intermediate",
    question: "JWT nima?",
    answer: "Token asosida authentication qilish usuli.",
    explanation:
      "User login bo‘lganda token beriladi va har requestda yuboriladi.",
    code: `token = jwt.encode({"user_id": 1}, "secret", algorithm="HS256")`,
  },
  {
    id: 14,
    level: "Intermediate",
    question: "Access va Refresh token farqi?",
    answer: "Access token qisqa muddatli, Refresh token uzoq muddatli.",
    explanation: "Access tugasa refresh orqali yangilanadi.",
  },
  {
    id: 15,
    level: "Intermediate",
    question: "Password hashing nima?",
    answer: "Parolni xavfsiz shaklda saqlash usuli.",
    explanation: "Oddiy text saqlash xavfli.",
    code: `from django.contrib.auth.hashers import make_password

password = make_password("123456")`,
  },
  {
    id: 16,
    level: "Intermediate",
    question: "CORS nima?",
    answer:
      "Frontend boshqa domain’dan backendga request qilishiga ruxsat beradi.",
    explanation: "Frontend va backend alohida bo‘lsa kerak.",
  },
  {
    id: 17,
    level: "Intermediate",
    question: "Middleware nima?",
    answer: "Request va response orasida ishlovchi qatlam.",
    explanation: "Auth, logging, validation uchun ishlatiladi.",
  },
  {
    id: 18,
    level: "Intermediate",
    question: "Caching nima?",
    answer: "Tezlikni oshirish uchun ma’lumotni vaqtincha saqlash.",
    explanation: "Ko‘p ishlatiladigan data cache’da bo‘ladi.",
  },
  {
    id: 19,
    level: "Intermediate",
    question: "Redis nima?",
    answer: "Tezkor (in-memory) database.",
    explanation: "Cache va queue uchun ishlatiladi.",
  },
  {
    id: 20,
    level: "Intermediate",
    question: "Celery nima?",
    answer: "Background task bajaruvchi system.",
    explanation: "Email, notification async yuboriladi.",
  },
  {
    id: 21,
    level: "Intermediate",
    question: "Async nima?",
    answer: "Bir vaqtning o‘zida bir nechta vazifani bajarish.",
    explanation: "Non-blocking ishlaydi.",
    code: `import asyncio

async def main():
    print("async ishlayapti")

asyncio.run(main())`,
  },
  {
    id: 22,
    level: "Intermediate",
    question: "Sync va Async farqi?",
    answer: "Sync ketma-ket, Async parallel ishlaydi.",
  },
  {
    id: 23,
    level: "Intermediate",
    question: "Docker nima?",
    answer: "Appni container ichida ishlatish texnologiyasi.",
    explanation: "Deploy va environment bir xil bo‘ladi.",
  },
  {
    id: 24,
    level: "Intermediate",
    question: "Gunicorn nima?",
    answer: "Python backend uchun production server.",
  },
  {
    id: 25,
    level: "Intermediate",
    question: "Nginx nima?",
    answer: "Reverse proxy va load balancer.",
  },
  {
    id: 26,
    level: "Intermediate",
    question: "Environment variables nima?",
    answer: "Maxfiy ma’lumotlarni saqlash usuli.",
    explanation: "SECRET_KEY, DB password shu yerda bo‘ladi.",
  },
  {
    id: 27,
    level: "Intermediate",
    question: "SQL Injection nima?",
    answer: "Zararli SQL query yuborish orqali hujum.",
    explanation: "User input tekshirilmasa yuz beradi.",
  },
  {
    id: 28,
    level: "Intermediate",
    question: "Rate limiting nima?",
    answer: "Bir userdan keladigan request sonini cheklash.",
    explanation: "Serverni overloaddan himoya qiladi.",
  },
  {
    id: 29,
    level: "Intermediate",
    question: "Logging nima?",
    answer: "Serverda bo‘layotgan jarayonlarni yozib borish.",
    explanation: "Debug va monitoring uchun kerak.",
  },
  {
    id: 30,
    level: "Intermediate",
    question: "Deployment nima?",
    answer: "Appni production serverga joylash jarayoni.",
    explanation: "Local → real userlar ishlatadigan holat.",
  },
];
