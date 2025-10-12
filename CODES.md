# ملف الأكواد - TobakkHuset

## معلومات المشروع
- المصمم: Abdullah Alawiss
- الصورة الرمزية: myimage1

---

## الأكواد المحفوظة

### 1. أكواد CSS

```css
/* تم إضافة Tailwind CSS في globals.css */
/* الألوان الرئيسية: amber-600, gray-900, gray-50 */

```

### 2. أكواد JavaScript

```javascript
// دالة معالجة خطأ تحميل الصورة
onError={(e) => {
  e.currentTarget.style.display = 'none';
}}

```

### 3. أكواد React/Next.js

```jsx
// Layout.tsx - Header مع الأفاتار واسم المصمم
<header className="bg-gray-900 text-white p-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <img 
        src="/myimage1.png" 
        alt="Avatar" 
        className="w-10 h-10 rounded-full"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div>
        <h1 className="text-xl font-bold">Tobakkhuset</h1>
        <p className="text-sm text-gray-300">Eksklusiv tobakk. Besøk oss på Grünerløkka.</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm text-gray-300">Designed by</p>
      <p className="font-semibold">Abdullah Alawiss</p>
    </div>
  </div>
</header>

// Footer مع اسم المصمم
<footer className="bg-gray-800 text-white p-6 mt-auto">
  <div className="max-w-7xl mx-auto text-center">
    <div className="flex items-center justify-center space-x-2 mb-2">
      <img 
        src="/myimage1.png" 
        alt="Avatar" 
        className="w-6 h-6 rounded-full"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span>Designed by Abdullah Alawiss</span>
    </div>
    <p className="text-sm text-gray-400">© 2024 Tobakkhuset. All rights reserved.</p>
  </div>
</footer>

```

### 4. أكواد HTML

```html
<!-- Hero Section مع الأفاتار -->
<div className="flex justify-center mb-6">
  <img 
    src="/myimage1.png" 
    alt="Tobakkhuset Avatar" 
    className="w-20 h-20 rounded-full shadow-lg border-4 border-white"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
    }}
  />
</div>

```

### 5. أكواد TypeScript

```typescript
// Prisma Schema - Settings Model
model Setting {
  id    Int    @id @default(autoincrement())
  key   String @unique
  value String
  type  String
  label String
  group String
}

// إضافة بيانات المصمم في seed.ts
{ key: "designer_name", value: "Abdullah Alawiss", type: "text", label: "اسم المصمم", group: "general" },
{ key: "avatar_image", value: "myimage1", type: "text", label: "صورة الأفاتار", group: "general" }

```

---

## ملاحظات
- يمكنك إضافة الأكواد في الأقسام المناسبة أعلاه
- سأقوم بنسخ الأكواد من هذا الملف عند الحاجة
- تأكد من تحديث الملف بانتظام

---

**المصمم:** Abdullah Alawiss  
**الصورة الرمزية:** my
اولا ضع هذه الملفات واستبدلها وسأكمل لك الباقي 
الملفات الأساسية (Root Files)
1. package.json

json
{
  "name": "tobakkhuset-cms",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  },
  "dependencies": {
    "@prisma/client": "^5.15.0",
    "next": "^15.0.3",
    "next-auth": "^5.5.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "prisma": "^5.15.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.2"
  }
}

2. tsconfig.json

json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["node"],
    "module": "ESNext",
    "skipLibCheck": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

3. next.config.js

js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

4. .env

text
NEXTAUTH_SECRET=your-secret-key-change-in-production
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL="file:./dev.db"

5. .gitignore

text
# Dependencies
node_modules
.pnp
.pnp.js

# Testing
coverage

# Next.js
.next/
out/
build
dist

# Production
.vercel

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env
.env*.local

# Prisma
prisma/dev.db
prisma/dev.db-journal

# TypeScript
*.tsbuildinfo
next-env.d.ts

6. README.md

text
# Tobakkhuset CMS

Norwegian tobacco shop website with advanced CMS capabilities.

## Getting Started

1. Install dependencies:

npm install

text

2. Setup database:

npx prisma generate
npx prisma migrate dev --name init
npm run seed

text

3. Run development server:

npm run dev

text

## Admin Access
- URL: http://localhost:3000/admin/login
- Email: admin@local
- Password: admin123

📁 مجلد prisma/

أنشئ مجلد prisma في الجذر.
prisma/schema.prisma

text
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Product {
  id          Int      @id @default(autoincrement())
  name        String
  price       Float
  category    String
  image       String
  stock       Int
  active      Boolean  @default(true)
  description String   @default("")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Setting {
  id    Int    @id @default(autoincrement())
  key   String @unique
  value String
  type  String
  label String
  group String
}

prisma/seed.ts

typescript
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Products
  const products = [
    {
      name: "420 Glass Pipe Set In Suite Case",
      price: 480,
      category: "Tilbehør",
      description: "Komplett glass pipe sett i elegant koffert. Høy kvalitet og profesjonell finish.",
      image: "/api/placeholder/300/200",
      stock: 5,
      active: true
    },
    {
      name: "Angel Jet Lighter - 12 Stk",
      price: 384,
      category: "Tilbehør",
      description: "Profesjonelle jet lightere, pakke med 12 stk. Pålitelig og kraftig flamme.",
      image: "/api/placeholder/300/200",
      stock: 12,
      active: true
    },
    {
      name: "Acrylic Bong 20cm",
      price: 112,
      category: "Tilbehør",
      description: "Akryl vannpipe, 20cm høyde. Lett å rengjøre og holdbar.",
      image: "/api/placeholder/300/200",
      stock: 8,
      active: true
    },
    {
      name: "Acrylic Bong 30cm",
      price: 140,
      category: "Tilbehør",
      description: "Akryl vannpipe, 30cm høyde. Større størrelse for bedre opplevelse.",
      image: "/api/placeholder/300/200",
      stock: 6,
      active: true
    },
    {
      name: "ANGEL Mini Filter Pack",
      price: 192,
      category: "Tilbehør",
      description: "Mini filter pakke - 10 x 24 stk. Forbedrer smak.",
      image: "/api/placeholder/300/200",
      stock: 15,
      active: true
    },
    {
      name: "AIR Nature Spray: Rosa Bianca",
      price: 288,
      category: "Tilbehør",
      description: "Luftfrisker spray - 250ml x 12 stk. Naturlig duft.",
      image: "/api/placeholder/300/200",
      stock: 10,
      active: true
    },
    {
      name: "Premium Glass Bong 25cm",
      price: 350,
      category: "Tilbehør",
      description: "Elegant glass vannpipe med design. Borosilikat glass.",
      image: "/api/placeholder/300/200",
      stock: 4,
      active: true
    },
    {
      name: "Wooden Pipe Collection",
      price: 125,
      category: "Tilbehør",
      description: "Håndlaget tre-pipe. Tradisjonelt håndverk.",
      image: "/api/placeholder/300/200",
      stock: 7,
      active: true
    }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: products.indexOf(product) + 1 },
      update: product,
      create: product
    });
  }

  console.log(`✅ Created ${products.length} products`);

  // Settings
  const settings = [
    { key: "site_title", value: "Tobakkhuset", type: "text", label: "Tittel", group: "general" },
    { key: "site_tagline", value: "Eksklusiv tobakk. Besøk oss på Grünerløkka.", type: "text", label: "Tagline", group: "general" },
    { key: "address", value: "Grünerløkka, Oslo", type: "text", label: "Adresse", group: "general" },
    { key: "phone", value: "+47 12 34 56 78", type: "text", label: "Telefon", group: "general" },
    { key: "email", value: "kontakt@tobakkhuset.no", type: "text", label: "E-post", group: "general" },
    { key: "hours_monday", value: "11:00-23:00", type: "text", label: "Mandag", group: "hours" },
    { key: "hours_tuesday", value: "11:00-23:00", type: "text", label: "Tirsdag", group: "hours" },
    { key: "hours_wednesday", value: "11:00-23:00", type: "text", label: "Onsdag", group: "hours" },
    { key: "hours_thursday", value: "11:00-23:00", type: "text", label: "Torsdag", group: "hours" },
    { key: "hours_friday", value: "11:00-02:00", type: "text", label: "Fredag", group: "hours" },
    { key: "hours_saturday", value: "11:00-02:00", type: "text", label: "Lørdag", group: "hours" },
    { key: "hours_sunday", value: "11:00-23:00", type: "text", label: "Søndag", group: "hours" },
    { key: "hero_title", value: "Velkommen til Tobakkhuset", type: "text", label: "Hero tittel", group: "homepage" },
    { key: "hero_subtitle", value: "Din destinasjon for førsteklasses tobakksprodukter", type: "text", label: "Hero undertekst", group: "homepage" },
    { key: "welcome_text", value: "Vi kombinerer tradisjon med moderne nytelse.", type: "textarea", label: "Velkomst", group: "homepage" }
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: setting,
      create: setting
    });
  }

  console.log(`✅ Created ${settings.length} settings`);
  console.log("🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
 هذا الجزء الثاني من الكود  اكتبه وٍسأكمل لك الباقي   
 📁 مجلد src/lib/

أنشئ مجلد src/lib/
src/lib/prisma.ts

typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

src/lib/auth.ts

typescript
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@local" &&
          credentials?.password === "admin123"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@local"
          };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/admin/login"
  }
};

📁 مجلد src/components/

أنشئ مجلد src/components/
src/components/Navbar.tsx

typescript
export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand">
          Tobakkhuset
        </a>
        <nav className="nav-menu">
          <a className="nav-link" href="/">
            Hjem
          </a>
          <a className="nav-link" href="/products">
            Produkter
          </a>
          <a className="nav-link" href="/contact">
            Kontakt
          </a>
          <a className="nav-link" href="/admin/login">
            Admin
          </a>
        </nav>
      </div>
    </header>
  );
}

src/components/ProductCard.tsx

typescript
type Props = {
  id?: number;
  name: string;
  price: number;
  image?: string;
  href?: string;
};

export function ProductCard({
  id,
  name,
  price,
  image = "/api/placeholder/300/200",
  href
}: Props) {
  const to = href ?? (id ? `/products/${id}` : "#");
  
  return (
    <a className="card" href={to}>
      <img src={image} alt={name} loading="lazy" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div className="card-price">{price.toFixed(2)} kr</div>
      </div>
    </a>
  );
}

📁 مجلد src/app/
src/app/globals.css

css
:root {
  --bg: #ffffff;
  --text: #111111;
  --muted-text: #555555;
  --surface: #f7f7f7;
  --border: #e6e6e6;
  --accent: #c8a96b;
  --accent-600: #b6914f;
  --focus: 0 0 0 3px rgba(200,169,107,.35);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--text);
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

/* Navigation */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: saturate(180%) blur(8px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.3px;
}

.nav-menu {
  display: flex;
  gap: 24px;
}

.nav-link {
  padding: 8px 14px;
  border-radius: 8px;
  transition: background 0.2s;
}

.nav-link:hover {
  background: var(--surface);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: var(--surface);
}

.btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: #111;
}

.btn.primary:hover {
  background: var(--accent-600);
  border-color: var(--accent-600);
  color: #fff;
}

.btn:focus-visible {
  outline: none;
  box-shadow: var(--focus);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Cards */
.card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(17, 17, 17, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(17, 17, 17, 0.08);
}

.card-body {
  padding: 14px;
}

.card-title {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 600;
}

.card-price {
  color: var(--muted-text);
  font-weight: 600;
  font-size: 15px;
}

/* Grid */
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

/* Footer */
.footer {
  margin-top: 60px;
  border-top: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted-text);
}

.footer-inner {
  padding: 24px 0;
  text-align: center;
  font-size: 14px;
}

/* Forms */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
textarea,
select {
  width: 100%;
  padding: 10px 12px;
  margin: 8px 0;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  background: var(--bg);
  color: var(--text);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: var(--focus);
}

textarea {
  min-height: 100px;
  resize: vertical;
}

label {
  display: block;
  margin: 12px 0 4px;
  font-weight: 500;
  font-size: 14px;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th,
td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid var(--border);
}

th {
  font-weight: 600;
  background: var(--surface);
}

tr:hover {
  background: var(--surface);
}

/* Admin specific */
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.admin-header h1 {
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: var(--surface);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.stat-card h3 {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--muted-text);
  font-weight: 500;
}

.stat-card .value {
  font-size: 32px;
  font-weight: 700;
  color: var(--accent);
}

/* Utilities */
.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mb-1 { margin-bottom: 8px; }
.mb-2 { margin-bottom: 16px; }
.mb-3 { margin-bottom: 24px; }

.flex { display: flex; }
.gap-1 { gap: 8px; }
.gap-2 { gap: 16px; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }

src/app/layout.tsx

typescript
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Tobakkhuset - Eksklusiv tobakk",
  description: "Din destinasjon for førsteklasses tobakksprodukter og tilbehør"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body>
        <Navbar />
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <div className="container footer-inner">
            © 2025 Tobakkhuset. Alle rettigheter reservert.
          </div>
        </footer>
      </body>
    </html>
  );
}

src/app/page.tsx

typescript
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const settings = await prisma.setting.findMany();
  const S = (k: string, d: string = "") => 
    settings.find(s => s.key === k)?.value ?? d;

  return (
    <div>
      <section style={{ padding: "40px 0" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
          {S("site_title", "Tobakkhuset")}
        </h1>
        <p style={{ fontSize: "18px", color: "var(--muted-text)" }}>
          {S("site_tagline", "Eksklusiv tobakk. Besøk oss på Grünerløkka.")}
        </p>
      </section>

      <section style={{ padding: "20px 0" }}>
        <h2>🕐 Åpningstider</h2>
        <div style={{ display: "grid", gap: "8px", marginTop: "16px" }}>
          <div className="flex justify-between" style={{ padding: "8px", background: "var(--surface)", borderRadius: "8px" }}>
            <strong>Mandag - Torsdag:</strong>
            <span>{S("hours_monday", "11:00-23:00")}</span>
          </div>
          <div className="flex justify-between" style={{ padding: "8px", background: "var(--surface)", borderRadius: "8px" }}>
            <strong>Fredag - Lørdag:</strong>
            <span>{S("hours_friday", "11:00-02:00")}</span>
          </div>
          <div className="flex justify-between" style={{ padding: "8px", background: "var(--surface)", borderRadius: "8px" }}>
            <strong>Søndag:</strong>
            <span>{S("hours_sunday", "11:00-23:00")}</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 0" }}>
        <h2>📍 Besøk oss</h2>
        <p>{S("address", "Grünerløkka, Oslo")}</p>
        <p>📞 {S("phone", "+47 12 34 56 78")}</p>
        <p>✉️ {S("email", "kontakt@tobakkhuset.no")}</p>
      </section>

      <section style={{ padding: "20px 0" }}>
        <h2>Velkommen</h2>
        <p>{S("welcome_text", "Vi kombinerer tradisjon med moderne nytelse.")}</p>
      </section>
    </div>
  );
}

📁 مجلد src/app/(public)/

أنشئ مجلد src/app/(public)/
src/app/(public)/products/page.tsx

typescript
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/ProductCard";

export default async function ProductsPage() {
  const items = await prisma.product.findMany({
    where: { active: true },
    take: 8,
    orderBy: { id: "asc" }
  });

  return (
    <section>
      <h1 style={{ marginBottom: "24px" }}>Produkter</h1>
      <div className="grid">
        {items.map(p => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}

src/app/(public)/products/[id]/page.tsx

typescript
import { prisma } from "@/lib/prisma";

export default async function ProductDetails({
  params
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: +params.id }
  });

  if (!product) {
    return <div>Produktet finnes ikke.</div>;
  }

  return (
    <article>
      <div className="card" style={{ maxWidth: "600px", margin: "20px auto" }}>
        <img src={product.image} alt={product.name} />
        <div className="card-body" style={{ padding: "24px" }}>
          <h1 style={{ marginBottom: "12px" }}>{product.name}</h1>
          <p className="card-price" style={{ fontSize: "24px", marginBottom: "16px" }}>
            {product.price.toFixed(2)} kr
          </p>
          <p style={{ marginBottom: "12px" }}>{product.description}</p>
          <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
            <div>
              <strong>Kategori:</strong> {product.category}
            </div>
            <div>
              <strong>Lager:</strong> {product.stock} stk
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

الجزء الثالث والاخير من الكود 
📁 صفحة الاتصال
src/app/contact/page.tsx

typescript
import { prisma } from "@/lib/prisma";

export default async function ContactPage() {
  const settings = await prisma.setting.findMany();
  const S = (k: string, d: string = "") => 
    settings.find(s => s.key === k)?.value ?? d;

  return (
    <section style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1>Kontakt oss</h1>
      
      <div style={{ marginTop: "24px" }}>
        <h3>📍 Adresse</h3>
        <p>{S("address", "Grünerløkka, Oslo")}</p>
      </div>

      <div style={{ marginTop: "24px" }}>
        <h3>📞 Telefon</h3>
        <p>{S("phone", "+47 12 34 56 78")}</p>
      </div>

      <div style={{ marginTop: "24px" }}>
        <h3>✉️ E-post</h3>
        <p>{S("email", "kontakt@tobakkhuset.no")}</p>
      </div>

      <div style={{ marginTop: "24px" }}>
        <h3>🕐 Åpningstider</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Mandag - Torsdag: {S("hours_monday", "11:00-23:00")}</li>
          <li>Fredag - Lørdag: {S("hours_friday", "11:00-02:00")}</li>
          <li>Søndag: {S("hours_sunday", "11:00-23:00")}</li>
        </ul>
      </div>
    </section>
  );
}

📁 مجلد src/app/(admin)/

أنشئ مجلد src/app/(admin)/
src/app/(admin)/login/page.tsx

typescript
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@local");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    if (result?.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("Feil brukernavn eller passord");
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto" }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          E-post
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@local"
            required
          />
        </label>

        <label>
          Passord
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin123"
            required
          />
        </label>

        <button 
          className="btn primary" 
          type="submit"
          disabled={loading}
          style={{ width: "100%", marginTop: "16px" }}
        >
          {loading ? "Logger inn..." : "Logg inn"}
        </button>
      </form>

      <div style={{ marginTop: "24px", padding: "16px", background: "var(--surface)", borderRadius: "8px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "var(--muted-text)" }}>
          <strong>Demo credentials:</strong><br />
          Email: admin@local<br />
          Password: admin123
        </p>
      </div>
    </div>
  );
}

src/app/(admin)/dashboard/page.tsx

typescript
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const totalProducts = await prisma.product.count();
  const activeProducts = await prisma.product.count({ where: { active: true } });
  const lowStock = await prisma.product.count({ where: { stock: { lt: 5 } } });
  
  const recentProducts = await prisma.product.findMany({
    take: 5,
    orderBy: { createdAt: "desc" }
  });

  return (
    <div>
      <div className="admin-header">
        <h1>Dashboard</h1>
        <a href="/admin/products" className="btn primary">
          Administrer produkter
        </a>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Totale produkter</h3>
          <div className="value">{totalProducts}</div>
        </div>
        <div className="stat-card">
          <h3>Aktive produkter</h3>
          <div className="value">{activeProducts}</div>
        </div>
        <div className="stat-card">
          <h3>Lavt lager</h3>
          <div className="value">{lowStock}</div>
        </div>
      </div>

      <section className="card" style={{ padding: "24px", marginTop: "24px" }}>
        <h2 style={{ marginTop: 0 }}>Siste produkter</h2>
        <table>
          <thead>
            <tr>
              <th>Navn</th>
              <th>Pris</th>
              <th>Lager</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentProducts.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price.toFixed(2)} kr</td>
                <td>{p.stock}</td>
                <td>{p.active ? "✅ Aktiv" : "❌ Inaktiv"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: "24px" }}>
        <h2>Hurtiglenker</h2>
        <div className="flex gap-2" style={{ marginTop: "16px" }}>
          <a href="/admin/products" className="btn">Produkter</a>
          <a href="/admin/settings" className="btn">Innstillinger</a>
          <a href="/" className="btn">Se nettsted</a>
        </div>
      </section>
    </div>
  );
}

src/app/(admin)/products/page.tsx

typescript
import { prisma } from "@/lib/prisma";

export default async function AdminProductsPage() {
  const items = await prisma.product.findMany({
    orderBy: { id: "asc" }
  });

  return (
    <div>
      <div className="admin-header">
        <h1>Administrer produkter</h1>
        <a href="/admin/products/new" className="btn primary">
          + Nytt produkt
        </a>
      </div>

      <div className="card" style={{ padding: "24px" }}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Navn</th>
              <th>Pris</th>
              <th>Lager</th>
              <th>Aktiv</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {items.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price.toFixed(2)} kr</td>
                <td>{p.stock}</td>
                <td>{p.active ? "✅" : "❌"}</td>
                <td>
                  <a 
                    href={`/admin/products/${p.id}/edit`}
                    className="btn"
                    style={{ padding: "6px 12px", height: "auto" }}
                  >
                    Rediger
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

src/app/(admin)/products/new/page.tsx

typescript
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    price: 0,
    category: "Tilbehør",
    description: "",
    image: "/api/placeholder/300/200",
    stock: 0,
    active: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      router.push("/admin/products");
    }
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <h1>Nytt produkt</h1>
      
      <form onSubmit={handleSubmit} className="card" style={{ padding: "24px", marginTop: "24px" }}>
        <label>
          Produktnavn
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </label>

        <label>
          Pris (NOK)
          <input
            type="number"
            step="0.01"
            value={form.price}
            onChange={e => setForm({ ...form, price: +e.target.value })}
            required
          />
        </label>

        <label>
          Kategori
          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          >
            <option>Tilbehør</option>
            <option>Sigaretter & Snus</option>
            <option>E-Sigaretter & Vape</option>
            <option>Sigarer</option>
          </select>
        </label>

        <label>
          Beskrivelse
          <textarea
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </label>

        <label>
          Bilde URL
          <input
            type="text"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
          />
        </label>

        <label>
          Lager
          <input
            type="number"
            value={form.stock}
            onChange={e => setForm({ ...form, stock: +e.target.value })}
            required
          />
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            checked={form.active}
            onChange={e => setForm({ ...form, active: e.target.checked })}
            style={{ width: "auto" }}
          />
          Aktiv
        </label>

        <div className="flex gap-2" style={{ marginTop: "24px" }}>
          <button type="submit" className="btn primary">
            Lagre produkt
          </button>
          <a href="/admin/products" className="btn">
            Avbryt
          </a>
        </div>
      </form>
    </div>
  );
}

src/app/(admin)/products/[id]/edit/page.tsx

typescript
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [form, setForm] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      setForm(data);
      setLoading(false);
    })();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch(`/api/products/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    router.push("/admin/products");
  };

  const handleDelete = async () => {
    if (!confirm("Er du sikker på at du vil slette dette produktet?")) return;
    
    await fetch(`/api/products/${params.id}`, { method: "DELETE" });
    router.push("/admin/products");
  };

  if (loading) return <div>Laster...</div>;
  if (!form) return <div>Produktet finnes ikke.</div>;

  return (
    <div style={{ maxWidth: "600px" }}>
      <h1>Rediger produkt</h1>
      
      <form onSubmit={handleSubmit} className="card" style={{ padding: "24px", marginTop: "24px" }}>
        <label>
          Produktnavn
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </label>

        <label>
          Pris (NOK)
          <input
            type="number"
            step="0.01"
            value={form.price}
            onChange={e => setForm({ ...form, price: +e.target.value })}
            required
          />
        </label>

        <label>
          Kategori
          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          >
            <option>Tilbehør</option>
            <option>Sigaretter & Snus</option>
            <option>E-Sigaretter & Vape</option>
            <option>Sigarer</option>
          </select>
        </label>

        <label>
          Beskrivelse
          <textarea
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </label>

        <label>
          Bilde URL
          <input
            type="text"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
          />
        </label>

        <label>
          Lager
          <input
            type="number"
            value={form.stock}
            onChange={e => setForm({ ...form, stock: +e.target.value })}
            required
          />
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            checked={form.active}
            onChange={e => setForm({ ...form, active: e.target.checked })}
            style={{ width: "auto" }}
          />
          Aktiv
        </label>

        <div className="flex gap-2" style={{ marginTop: "24px" }}>
          <button type="submit" className="btn primary">
            Lagre endringer
          </button>
          <button type="button" onClick={handleDelete} className="btn" style={{ background: "#c0392b", color: "#fff", borderColor: "#c0392b" }}>
            Slett produkt
          </button>
          <a href="/admin/products" className="btn">
            Avbryt
          </a>
        </div>
      </form>
    </div>
  );
}

src/app/(admin)/settings/page.tsx

typescript
"use client";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/settings");
      const data = await res.json();
      setSettings(data);
      setLoading(false);
    })();
  }, []);

  const handleSave = async () => {
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings)
    });
    alert("Innstillinger lagret!");
  };

  const updateSetting = (key: string, value: string) => {
    setSettings(prev => 
      prev.map(s => s.key === key ? { ...s, value } : s)
    );
  };

  if (loading) return <div>Laster...</div>;

  const general = settings.filter(s => s.group === "general");
  const hours = settings.filter(s => s.group === "hours");
  const homepage = settings.filter(s => s.group === "homepage");

  return (
    <div>
      <div className="admin-header">
        <h1>Innstillinger</h1>
        <button onClick={handleSave} className="btn primary">
          Lagre endringer
        </button>
      </div>

      <div className="card" style={{ padding: "24px", marginBottom: "24px" }}>
        <h2>Generell informasjon</h2>
        {general.map(s => (
          <label key={s.key}>
            {s.label}
            <input
              type="text"
              value={s.value}
              onChange={e => updateSetting(s.key, e.target.value)}
            />
          </label>
        ))}
      </div>

      <div className="card" style={{ padding: "24px", marginBottom: "24px" }}>
        <h2>Åpningstider</h2>
        {hours.map(s => (
          <label key={s.key}>
            {s.label}
            <input
              type="text"
              value={s.value}
              onChange={e => updateSetting(s.key, e.target.value)}
              placeholder="11:00-23:00"
            />
          </label>
        ))}
      </div>

      <div className="card" style={{ padding: "24px" }}>
        <h2>Innhold på hjemmesiden</h2>
        {homepage.map(s => (
          <label key={s.key}>
            {s.label}
            {s.type === "textarea" ? (
              <textarea
                value={s.value}
                onChange={e => updateSetting(s.key, e.target.value)}
              />
            ) : (
              <input
                type="text"
                value={s.value}
                onChange={e => updateSetting(s.key, e.target.value)}
              />
            )}
          </label>
        ))}
      </div>
    </div>
  );
}

📁 مجلد src/app/api/
src/app/api/auth/[...nextauth]/route.ts

typescript
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

src/app/api/products/route.ts

typescript
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "asc" }
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const product = await prisma.product.create({
      data: body
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}

src/app/api/products/[id]/route.ts

typescript
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(params.id) }
    });
    
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const product = await prisma.product.update({
      where: { id: parseInt(params.id) },
      data: body
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({
      where: { id: parseInt(params.id) }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}

src/app/api/settings/route.ts

typescript
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const settings = await prisma.setting.findMany({
      orderBy: { key: "asc" }
    });
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const incoming = await request.json();
    
    if (!Array.isArray(incoming)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const operations = incoming.map((setting: any) =>
      prisma.setting.upsert({
        where: { key: setting.key },
        update: setting,
        create: setting
      })
    );

    await Promise.all(operations);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}

🎉 انتهى! الآن الخطوات النهائية:

بعد نسخ جميع الملفات، افتح Terminal في VS Code واكتب:

bash
# 1. تثبيت الحزم
npm install

# 2. إنشاء قاعدة البيانات
npx prisma generate
npx prisma migrate dev --name init

# 3. ملء البيانات الأولية
npm run seed

# 4. تشغيل المشروع
npm run dev



هذا ملف تيلويند css 
الخطوة 1: تثبيت Tailwind CSS

افتح Terminal في VS Code واكتب:

bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

الخطوة 2: ملفات التهيئة
tailwind.config.ts (استبدل الملف الموجود)

typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6efdf',
          100: '#ead7b5',
          200: '#debf8b',
          300: '#d2a761',
          400: '#c8a96b',
          500: '#b6914f',
          600: '#9a7a42',
          700: '#7e6336',
          800: '#624c29',
          900: '#46351d',
        },
        surface: '#f7f7f7',
        border: '#e6e6e6',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(17, 17, 17, 0.04)',
        'md': '0 4px 8px rgba(17, 17, 17, 0.08)',
        'focus': '0 0 0 3px rgba(200, 169, 107, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;

postcss.config.js (سيُنشأ تلقائياً، تأكد من محتواه)

js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

الخطوة 3: تحديث globals.css

استبدل محتوى src/app/globals.css بهذا:

css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg: #ffffff;
    --text: #111111;
    --muted-text: #555555;
    --surface: #f7f7f7;
    --border: #e6e6e6;
    --accent: #c8a96b;
    --accent-600: #b6914f;
  }

  * {
    @apply box-border;
  }

  html,
  body {
    @apply m-0 p-0 bg-white text-gray-900 antialiased;
  }

  a {
    @apply no-underline text-inherit;
  }

  img {
    @apply max-w-full block;
  }
}

@layer components {
  /* Navigation */
  .nav {
    @apply sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border;
  }

  .nav-inner {
    @apply flex items-center justify-between h-16 max-w-7xl mx-auto px-4;
  }

  .brand {
    @apply font-bold text-xl tracking-wide hover:text-primary-500 transition-colors;
  }

  .nav-menu {
    @apply flex gap-6;
  }

  .nav-link {
    @apply px-3 py-2 rounded-lg hover:bg-surface transition-colors;
  }

  /* Buttons */
  .btn {
    @apply inline-flex items-center justify-center h-10 px-4 rounded-xl 
           border border-border bg-white text-gray-900 font-medium text-sm
           hover:bg-surface transition-all duration-200 cursor-pointer
           disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .btn.primary {
    @apply bg-primary-400 border-primary-400 text-gray-900
           hover:bg-primary-600 hover:text-white hover:border-primary-600;
  }

  .btn:focus-visible {
    @apply outline-none ring-4 ring-primary-400/35;
  }

  .btn-sm {
    @apply h-8 px-3 text-xs;
  }

  .btn-lg {
    @apply h-12 px-6 text-base;
  }

  /* Cards */
  .card {
    @apply bg-white border border-border rounded-2xl overflow-hidden shadow-sm
           hover:shadow-md hover:-translate-y-0.5 transition-all duration-200;
  }

  .card-body {
    @apply p-4;
  }

  .card-title {
    @apply m-0 mb-2 font-semibold text-base;
  }

  .card-price {
    @apply text-muted-text font-semibold text-base;
  }

  /* Grid */
  .grid {
    @apply grid gap-4 grid-cols-[repeat(auto-fill,minmax(220px,1fr))];
  }

  /* Container */
  .container {
    @apply max-w-7xl mx-auto px-4;
  }

  /* Footer */
  .footer {
    @apply mt-16 border-t border-border bg-surface text-muted-text;
  }

  .footer-inner {
    @apply py-6 text-center text-sm;
  }

  /* Forms */
  .form-input {
    @apply w-full px-3 py-2.5 my-2 border border-border rounded-lg text-sm
           bg-white text-gray-900 placeholder:text-gray-400
           focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-400/35
           transition-all;
  }

  .form-textarea {
    @apply form-input min-h-[100px] resize-y;
  }

  .form-select {
    @apply form-input;
  }

  .form-label {
    @apply block my-3 mb-1 font-medium text-sm;
  }

  .form-checkbox {
    @apply w-4 h-4 rounded border-border text-primary-400 
           focus:ring-4 focus:ring-primary-400/35;
  }

  /* Tables */
  .table {
    @apply w-full border-collapse my-5;
  }

  .table th,
  .table td {
    @apply text-left px-3 py-3 border-b border-border;
  }

  .table th {
    @apply font-semibold bg-surface;
  }

  .table tbody tr {
    @apply hover:bg-surface transition-colors;
  }

  /* Admin specific */
  .admin-header {
    @apply flex justify-between items-center mb-6;
  }

  .admin-header h1 {
    @apply m-0 text-3xl font-bold;
  }

  .stats-grid {
    @apply grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mb-6;
  }

  .stat-card {
    @apply bg-surface p-5 rounded-xl border border-border;
  }

  .stat-card h3 {
    @apply m-0 mb-2 text-sm text-muted-text font-medium;
  }

  .stat-card .value {
    @apply text-4xl font-bold text-primary-500;
  }

  /* Alert/Badge styles */
  .badge {
    @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
  }

  .badge-success {
    @apply bg-green-100 text-green-800;
  }

  .badge-warning {
    @apply bg-yellow-100 text-yellow-800;
  }

  .badge-danger {
    @apply bg-red-100 text-red-800;
  }

  /* Loading spinner */
  .spinner {
    @apply inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

الخطوة 4: تحديث الـ Components باستخدام Tailwind
src/components/Navbar.tsx (مع Tailwind)

typescript
export function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="/" className="brand">
          Tobakkhuset
        </a>
        <nav className="nav-menu">
          <a className="nav-link" href="/">
            Hjem
          </a>
          <a className="nav-link" href="/products">
            Produkter
          </a>
          <a className="nav-link" href="/contact">
            Kontakt
          </a>
          <a className="nav-link" href="/admin/login">
            Admin
          </a>
        </nav>
      </div>
    </header>
  );
}

src/components/ProductCard.tsx (مع Tailwind)

typescript
type Props = {
  id?: number;
  name: string;
  price: number;
  image?: string;
  href?: string;
};

export function ProductCard({
  id,
  name,
  price,
  image = "/api/placeholder/300/200",
  href
}: Props) {
  const to = href ?? (id ? `/products/${id}` : "#");
  
  return (
    <a href={to} className="card group">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title group-hover:text-primary-500 transition-colors">
          {name}
        </h3>
        <div className="card-price">{price.toFixed(2)} kr</div>
      </div>
    </a>
  );
}

الخطوة 5: تحديث صفحات مختارة بـ Tailwind
src/app/page.tsx (محدثة)

typescript
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const settings = await prisma.setting.findMany();
  const S = (k: string, d: string = "") => 
    settings.find(s => s.key === k)?.value ?? d;

  return (
    <div className="py-8">
      <section className="py-10 text-center">
        <h1 className="text-5xl font-bold mb-4 text-balance">
          {S("site_title", "Tobakkhuset")}
        </h1>
        <p className="text-xl text-muted-text max-w-2xl mx-auto">
          {S("site_tagline", "Eksklusiv tobakk. Besøk oss på Grünerløkka.")}
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">🕐 Åpningstider</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
            <strong>Mandag - Torsdag:</strong>
            <span>{S("hours_monday", "11:00-23:00")}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
            <strong>Fredag - Lørdag:</strong>
            <span>{S("hours_friday", "11:00-02:00")}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
            <strong>Søndag:</strong>
            <span>{S("hours_sunday", "11:00-23:00")}</span>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">📍 Besøk oss</h2>
        <div className="space-y-2 text-lg">
          <p>{S("address", "Grünerløkka, Oslo")}</p>
          <p>📞 {S("phone", "+47 12 34 56 78")}</p>
          <p>✉️ {S("email", "kontakt@tobakkhuset.no")}</p>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Velkommen</h2>
        <p className="text-lg leading-relaxed">
          {S("welcome_text", "Vi kombinerer tradisjon med moderne nytelse.")}
        </p>
      </section>
    </div>
  );
}

src/app/(public)/products/page.tsx (محدثة)

typescript
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/ProductCard";

export default async function ProductsPage() {
  const items = await prisma.product.findMany({
    where: { active: true },
    take: 8,
    orderBy: { id: "asc" }
  });

  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold mb-8">Produkter</h1>
      <div className="grid">
        {items.map(p => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}

src/app/(admin)/login/page.tsx (محدثة)

typescript
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@local");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    if (result?.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("Feil brukernavn eller passord");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-20">
      <div className="card">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label">E-post</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="admin@local"
                required
              />
            </div>

            <div>
              <label className="form-label">Passord</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="admin123"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="btn primary w-full"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="spinner" />
                  Logger inn...
                </span>
              ) : (
                "Logg inn"
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-surface rounded-lg">
            <p className="text-sm text-muted-text">
              <strong>Demo credentials:</strong><br />
              Email: admin@local<br />
              Password: admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

الخطوة 6: تحديث package.json

تأكد من وجود السكربتات التالية في package.json:

json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}

الخطوة 7: تشغيل المشروع

bash
# تأكد من تثبيت Tailwind
npm install

# شغّل المشروع
npm run dev
