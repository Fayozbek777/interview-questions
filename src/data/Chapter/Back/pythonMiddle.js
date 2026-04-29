export const pythonMiddleQuestions = [
  {
    id: 1,
    level: "Middle",
    question: "API endpoint nima?",
    answer:
      "API endpoint — serverdagi aniq URL bo‘lib, client shu orqali ma’lumot oladi yoki yuboradi.",
    realLife: "Frontend /api/users ga request yuboradi va user list oladi.",
    diagram: `
Frontend ---> /api/users ---> Backend ---> Database
                         <--- JSON response ---
`,
  },
  {
    id: 2,
    level: "Middle",
    question: "SQL va NoSQL farqi nima?",
    answer: "SQL — jadval asosida, NoSQL — moslashuvchan (JSON/document).",
    realLife: "Bank system SQL ishlatadi, chat app esa NoSQL ishlatadi.",
    diagram: `
SQL:    Table (rows, columns)
NoSQL:  JSON / Document
`,
  },
  {
    id: 3,
    level: "Middle",
    question: "RESTful API nima?",
    answer: "HTTP metodlar orqali resource bilan ishlaydigan API.",
    realLife: "User yaratish → POST, olish → GET.",
    diagram: `
GET    /users
POST   /users
PUT    /users/1
DELETE /users/1
`,
  },
  {
    id: 4,
    level: "Middle",
    question: "HTTP request/response qanday ishlaydi?",
    answer:
      "Client request yuboradi, server uni qayta ishlab response qaytaradi.",
    realLife: "Browser sayt ochganda request yuboradi.",
    diagram: `
Client ---> Request ---> Server ---> Response ---> Client
`,
  },
  {
    id: 5,
    level: "Middle",
    question: "File upload qanday ishlaydi?",
    answer: "Client fayl yuboradi, backend uni saqlaydi.",
    realLife: "User profil rasm yuklaydi.",
    diagram: `
Frontend ---> file ---> Backend ---> Storage
`,
  },
  {
    id: 6,
    level: "Middle",
    question: "API testing qanday qilinadi?",
    answer: "Unit va integration testlar orqali tekshiriladi.",
    realLife: "Login API test qilinadi.",
    diagram: `
Test ---> API ---> Expected result (200)
`,
  },
  {
    id: 7,
    level: "Middle",
    question: "Session management nima?",
    answer: "User holatini saqlash (cookie/session).",
    realLife: "Login bo‘lganda user session yaratiladi.",
    diagram: `
Login ---> Server ---> Session ID ---> Browser
`,
  },
  {
    id: 8,
    level: "Middle",
    question: "API versioning nima?",
    answer: "API versiyalarini boshqarish.",
    realLife: "Eski app ishlashi uchun v1 saqlanadi.",
    diagram: `
/api/v1/users
/api/v2/users
`,
  },
  {
    id: 9,
    level: "Middle",
    question: "SQL Injection nima?",
    answer: "Zararli SQL orqali DBga hujum.",
    realLife: "User input orqali query buziladi.",
    diagram: `
User input ---> SQL query ---> ❌ attack
Safe ---> ORM
`,
  },
  {
    id: 10,
    level: "Middle",
    question: "Stateless HTTP nima?",
    answer: "Har request alohida, server oldingisini eslamaydi.",
    realLife: "Har API call mustaqil.",
    diagram: `
Request 1 ❌ memory
Request 2 ❌ memory
`,
  },
  {
    id: 11,
    level: "Middle",
    question: "Containerization nima?",
    answer: "Appni container ichida ishlatish (Docker).",
    realLife: "App har joyda bir xil ishlaydi.",
    diagram: `
App ---> Docker ---> Run anywhere
`,
  },
  {
    id: 12,
    level: "Middle",
    question: "API xavfsizligi qanday?",
    answer: "JWT, HTTPS, validation orqali.",
    realLife: "Login token bilan himoyalanadi.",
    diagram: `
Client ---> Token ---> Backend ---> Verify
`,
  },
  {
    id: 13,
    level: "Middle",
    question: "Scaling qanday ishlaydi?",
    answer: "Ko‘p server qo‘shiladi.",
    realLife: "Ko‘p user kelganda load balancer ishlaydi.",
    diagram: `
User ---> LB ---> Server1
              ---> Server2
`,
  },
  {
    id: 14,
    level: "Middle",
    question: "Debugging qanday qilinadi?",
    answer: "Log va debugger orqali xato topiladi.",
    realLife: "Error log orqali aniqlanadi.",
    diagram: `
Error ---> Logs ---> Fix
`,
  },
  {
    id: 15,
    level: "Middle",
    question: "Maintainable code nima?",
    answer: "Oson o‘qiladigan va boshqariladigan kod.",
    realLife: "Team ishlaganda muhim.",
    diagram: `
Clean code ---> Easy support
`,
  },

  // INTERMEDIATE

  {
    id: 16,
    level: "Middle",
    question: "Full-text search nima?",
    answer: "Matndan tez qidirish tizimi.",
    realLife: "Google search.",
    diagram: `
Text ---> Index ---> Fast search
`,
  },
  {
    id: 17,
    level: "Middle",
    question: "Batch processing nima?",
    answer: "Data’ni bo‘lib ishlash.",
    realLife: "1000 email yuborish.",
    diagram: `
Data ---> Split ---> Process
`,
  },
  {
    id: 18,
    level: "Middle",
    question: "Message queue nima?",
    answer: "Async task uchun queue.",
    realLife: "Order → email yuborish.",
    diagram: `
App ---> Queue ---> Worker ---> Done
`,
  },
  {
    id: 19,
    level: "Middle",
    question: "DB connection pooling nima?",
    answer: "Connectionlarni qayta ishlatish.",
    realLife: "Ko‘p user DBga ulanadi.",
    diagram: `
App ---> Pool ---> DB
`,
  },
  {
    id: 20,
    level: "Middle",
    question: "CI/CD nima?",
    answer: "Code avtomatik test va deploy qilinadi.",
    realLife: "Git push → deploy.",
    diagram: `
Push ---> Test ---> Deploy
`,
  },
  {
    id: 21,
    level: "Middle",
    question: "Caching nima?",
    answer: "Tez javob uchun data saqlash.",
    realLife: "Homepage tez ochiladi.",
    diagram: `
Request ---> Cache ---> Fast
`,
  },
  {
    id: 22,
    level: "Middle",
    question: "Background tasks nima?",
    answer: "Async ishlovchi tasklar.",
    realLife: "Email yuborish.",
    diagram: `
User ---> Queue ---> Worker
`,
  },
  {
    id: 23,
    level: "Middle",
    question: "Encryption nima?",
    answer: "Ma’lumotni shifrlash.",
    realLife: "Password hash.",
    diagram: `
Data ---> Encrypt ---> Safe
`,
  },
  {
    id: 24,
    level: "Middle",
    question: "Webhooks nima?",
    answer: "Event bo‘lsa request yuboriladi.",
    realLife: "Payment success → backendga signal.",
    diagram: `
Event ---> HTTP call ---> App
`,
  },
  {
    id: 25,
    level: "Middle",
    question: "GDPR nima?",
    answer: "User data himoya qonuni.",
    realLife: "User data delete qilish talabi.",
    diagram: `
User ---> Data ---> Control
`,
  },
  {
    id: 26,
    level: "Middle",
    question: "Long-running process nima?",
    answer: "Uzoq ishlaydigan task.",
    realLife: "Report generate.",
    diagram: `
Request ---> Queue ---> Process
`,
  },
  {
    id: 27,
    level: "Middle",
    question: "Rate limiting nima?",
    answer: "Request sonini cheklash.",
    realLife: "Spam oldini olish.",
    diagram: `
User ---> Limit ---> Allow/Block
`,
  },
  {
    id: 28,
    level: "Middle",
    question: "Monitoring nima?",
    answer: "Systemni kuzatish.",
    realLife: "Server health tekshirish.",
    diagram: `
App ---> Metrics ---> Dashboard
`,
  },
  {
    id: 29,
    level: "Middle",
    question: "Microservices nima?",
    answer: "Appni kichik servislarga bo‘lish.",
    realLife: "User, payment alohida service.",
    diagram: `
App ---> Service1
     ---> Service2
`,
  },
  {
    id: 30,
    level: "Middle",
    question: "Eventual consistency nima?",
    answer: "Data vaqt o‘tib sync bo‘ladi.",
    realLife: "Distributed DB.",
    diagram: `
DB1 ---> Sync ---> DB2
`,
  },
];
