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




## Production URL

الرابط الحي للمشروع على السيرفر http://148.230.126.66:3000
رابط فحص المهام http://148.230.126.66:3000/tasks
رابط فحص الحالة http://148.230.126.66:3000/health

## خطوات النشر على الـ VPS

أدخل على تيرمنال السيرفر من المتصفح عبر Hostinger Web Terminal أو عبر SSH
تأكد من وجود Git وثبت Docker على أوبنتو ثم شغّل الخدمة
apt update && apt install -y docker.io
systemctl enable --now docker
اسحب المشروع من GitHub وادخل لمجلده
git clone https://github.com/alshya832-cmyk/TaskTrack-API.git
cd TaskTrack-API
ابني صورة Docker للمشروع
docker build -t tasktrack-api .
شغّل الحاوية على بورت 3000
docker run -d -p 3000:3000 --name tasktrack-container tasktrack-api 