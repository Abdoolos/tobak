# Tobakkhuset CMS

Norwegian tobacco shop website with advanced CMS capabilities.

**المصمم:** Abdullah Alawiss  
**الصورة الرمزية:** myimage1

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Setup database:
```bash
npx prisma generate
npx prisma migrate dev --name init
npm run seed
```

3. Run development server:
```bash
npm run dev
```

## Admin Access
- URL: http://localhost:3000/admin/login
- Email: admin@local
- Password: admin123

## Features
- Modern Next.js 15 application
- Prisma ORM with SQLite database
- NextAuth.js authentication
- TypeScript support
- Responsive design
- Admin panel for content management

## Project Structure
```
tobakkhuset/
├── prisma/          # Database schema and migrations
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js app router
│   └── components/  # React components
├── package.json
└── README.md
```

---
**Designed by Abdullah Alawiss**
