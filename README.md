# TaskTrack-API

تطبيق خلفي (Backend API) مصمم بلغة Node.js و Express لإدارة وتتبع المهام اليومية، وتم تجهيزه ليعمل داخل حاوية دوكر (Docker) بشكل كامل وآمن.

## التقنيات المستخدمة (Tech Stack)
* **بيئة التشغيل:** Node.js (v20 Alpine)
* **الإطار البرمجي:** Express.js
* **التغليف:** Docker

## هيكل المشروع (Project Structure)
```text
TaskTrack-API/
├─ src/               # ملفات الكود البرمجي
├─ docs/
│  ├─ screenshots/    # لقطات شاشة لإثبات التشغيل
│  └─ notes.md        # الملاحظات التقنية والدروس المستفادَة
├─ Dockerfile         # تعليمات بناء صورة دوكر
├─ .dockerignore      # الملفات المستبعدة عند البناء
├─ .gitignore         # الملفات المستبعدة من نظام Git
└─ README.md          # توثيق المشروع 
طريقة التشغيل باستخدام Docker
نسخ المستودع (Clone):

Bash
git clone <رابط_مستودع_الجيت_هب>
cd TaskTrack-API


بناء صورة دوكر (Build):


Bash
docker build -t tasktrack-api .

تشغيل الحاوية (Run):

Bash
docker run -d -p 3000:3000 --name tasktrack-container tasktrack-api


كيفية اختبار الـ API

بعد تشغيل الحاوية، يمكنك فتح المتصفح أو أي أداة اختبار (مثل Postman) على الروابط التالية:

الصفحة الرئيسية: http://localhost:3000/ (تعرض رسالة ترحيبية والمسارات المتاحة)

مسار المهام: http://localhost:3000/tasks

فحص حالة النظام: http://localhost:3000/health



لإيقاف الحاوية وحذفها:

Bash
docker stop tasktrack-container
docker rm tasktrack-container





## Live Deployment (VPS)

The API is deployed and running live on a VPS:

- **Live URL:** `http://148.230.126.66:3000/`
- **Tasks Endpoint:** `http://148.230.126.66:3000/tasks`
- **Health Check:** `http://148.230.126.66:3000/health`
- **Server:** Hostinger VPS (KVM 2), Ubuntu 24.04

### Deployment Steps
1. Connect to the VPS via Hostinger Web Console.
2. Verify `git` and install Docker (`docker.io`).
3. Clone the repository: `git clone https://github.com/alshya832-cmyk/TaskTrack-API.git`
4. Build the image: `docker build -t tasktrack-api .`
5. Run the container: `docker run -d -p 3000:3000 --name tasktrack-container tasktrack-api`