# Shortly — URL Shortener 🔗

> Shorten links. Track clicks. Analyze performance.

A production-ready full-stack URL shortener built with Spring Boot and React. Register an account, shorten any URL, share it, and watch the analytics roll in — all from a clean, responsive dashboard.

## 🌐 Live Demo

| | Link |
|---|---|
| 🖥️ Frontend | [chopurl-shortly.netlify.app](https://chopurl-shortly.netlify.app) |
| ⚙️ Backend API | [shortly-sb.onrender.com](https://shortly-sb.onrender.com) |
| 🎬 Demo Video | [Watch on Google Drive](https://drive.google.com/file/d/1G4UgXQU_h0o2sak5VLvKONJLEqywLW4P/view?usp=sharing) |

> ⚠️ The backend runs on Render's free tier — it may take 30–60 seconds to wake up on the first request. Thank you for your patience!

---

## ✨ Features

- 🔐 Secure user registration & login with JWT authentication
- 🔗 Instantly shorten any long URL
- 📊 Per-URL click tracking and analytics
- 📅 Filter analytics by custom date range
- 🔁 Fast redirect from short URL to original destination
- 📱 Fully responsive UI built with Tailwind CSS
- 🐳 Dockerized backend for consistent deployments

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### DevOps & Hosting
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-000000?style=for-the-badge&logo=neon&logoColor=white)

---

## 🏗️ Architecture
```
User
 │
 ▼
Netlify (React Frontend)
 │
 ▼
Render (Spring Boot REST API — Dockerized)
 │
 ▼
Neon (PostgreSQL Cloud Database)
```

---

## 🚀 Running Locally

### Prerequisites
- Java 23
- Node.js 18+
- PostgreSQL or Neon account

### Backend
```bash
cd shortly-sb
# Create a .env file with your database and JWT credentials
./mvnw spring-boot:run
```

### Frontend
```bash
cd url-shortener-react
npm install
npm run dev
```

---

## 👨‍💻 Author

**G Mahidhar Reddy**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mahidhar-git)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/g-mahidhar-reddy/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ by <a href="https://github.com/Mahidhar-git">G Mahidhar Reddy</a></p>
