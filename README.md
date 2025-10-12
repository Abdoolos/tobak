# 🏪 Tobakkhuset CMS

A modern Content Management System for Tobakkhuset tobacco shop with a comprehensive admin panel.

## 🚀 Features

### 🔐 Admin Panel
- **Norwegian Login Interface** - Clean and professional admin login
- **Dashboard** - Complete overview with statistics and quick actions
- **Product Management** - Full CRUD operations for products
- **Inventory Tracking** - Real-time stock monitoring with low stock alerts
- **Multi-language Support** - Norwegian/Arabic interface

### 🛒 Customer Features
- **Product Catalog** - Browse products by categories
- **Responsive Design** - Works on all devices
- **Contact Page** - Easy customer communication

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Database:** SQLite with Prisma ORM
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **UI Components:** Custom React components

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdoolos/tobak.git
cd tobak
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

5. Start the development server:
```bash
npm run dev
```

## 🔑 Admin Access

- **URL:** `http://localhost:3000/admin/login`
- **Username:** `admin@local`
- **Password:** `admin123`

## 📱 Admin Panel Features

### Dashboard
- Total products count
- Active products monitoring
- Low stock alerts
- Quick action buttons

### Product Management
- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ Toggle product status (active/inactive)
- ✅ Category management
- ✅ Stock level tracking
- ✅ Image management

### Categories
- **Tilbehør** - Accessories
- **Sigaretter & Snus** - Cigarettes & Snus
- **E-Sigaretter & Vape** - E-cigarettes & Vape
- **Sigarer** - Cigars

## 🌐 API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Authentication
- `POST /api/auth/signin` - Admin login
- `POST /api/auth/signout` - Admin logout

## 📁 Project Structure

```
tobakkhuset1/
├── src/
│   ├── app/
│   │   ├── admin/           # Admin panel pages
│   │   │   ├── login/       # Admin login
│   │   │   ├── dashboard/   # Admin dashboard
│   │   │   └── products/    # Product management
│   │   ├── api/             # API routes
│   │   ├── contact/         # Contact page
│   │   └── products/        # Public product catalog
│   ├── components/          # Reusable components
│   └── lib/                 # Utilities and configurations
├── prisma/                  # Database schema and migrations
└── public/                  # Static assets
```

## 🔒 Security Features

- **Authentication Required** - Admin panel protected by NextAuth
- **Session Management** - Secure session handling
- **Input Validation** - Form validation on all inputs
- **SQL Injection Protection** - Prisma ORM prevents SQL injection

## 🎨 Design Features

- **Responsive Design** - Mobile-first approach
- **Norwegian/Arabic Support** - RTL and LTR text support
- **Modern UI** - Clean and professional interface
- **Accessibility** - WCAG compliant design

## 📊 Admin Statistics

The dashboard provides:
- Total number of products
- Count of active products
- Low stock warnings (< 5 items)
- Recent product activity

## 🚦 Getting Started

1. Visit the admin panel at `/admin/login`
2. Use the demo credentials to log in
3. Navigate to "Products" to manage inventory
4. Add, edit, or delete products as needed
5. Monitor stock levels from the dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Abdullah Alawiss**
- GitHub: [@Abdoolos](https://github.com/Abdoolos)

---

Made with ❤️ for Tobakkhuset
