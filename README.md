
# Exam App Backend (PostgreSQL + Node.js)

## Features
- RESTful API for questions, exams, and reports
- Admin login with username/password from config
- PostgreSQL support

## Environment Variables (.env)
```
PORT=3000
DB_URL=postgresql://user:password@localhost:5432/examdb
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

## Running Locally

```bash
npm install
npm run dev
```

## Docker
```bash
docker build -t exam-backend .
docker run -p 3000:3000 --env-file .env exam-backend
```
