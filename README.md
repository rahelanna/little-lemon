# 🍋 Little Lemon Restaurant Website

This project is a **fully responsive restaurant website** built as part of the **Meta Front-End Developer Capstone Project** on Coursera.  
It showcases the **Little Lemon Restaurant**, featuring a modern design, interactive pages, and a functional reservation system.

---

## 🧩 Project Overview

The Little Lemon website provides a realistic single-page application (SPA) experience using **React**, **Vite**, and **React Router**.  
The app includes:

- 🏠 **Home Page** – restaurant introduction and highlights
- 🧾 **Online Menu** – interactive list of available dishes
- 🛵 **Home Order / Delivery Info** – information about ordering and delivery
- 📅 **Reservation System** – form for booking a table with validation
- 🔐 **Authentication Demo** – Sign up / Login simulation using **localStorage**
- ⚙️ **Reusable Components** – modular structure with hooks, context, and shared UI parts
- 🧪 **Unit Tests** – written with **Vitest** and **Testing Library**

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── about/           # About section
│   ├── auth/            # Login / Signup UI
│   ├── common/          # Reusable components
│   ├── footer/          # Footer components
│   ├── header/          # Header / navigation
│   ├── hero/            # Landing hero section
│   ├── home-order/      # Delivery & order info
│   ├── loading/         # Loading animations
│   ├── online-menu/     # Menu section
│   ├── reservation/     # Reservation form & logic
│   ├── special-card/    # Special offers cards
│   └── specials/        # Specials section
│
├── context/
│   └── AuthContext.jsx  # Authentication context (localStorage demo)
│
├── data/
│   ├── links.js         # Navigation links
│   ├── online-menu.js   # Menu data
│   ├── order-steps.js   # Home order steps
│   ├── specials.js      # Special dishes
│   └── time-slots.js    # Reservation slots
│
├── hooks/
│   └── useDisableScroll.js
│
├── pages/
│   ├── Home.jsx
│   ├── HomeOrder.jsx
│   ├── Login.jsx
│   ├── OnlineMenu.jsx
│   ├── Reservation.jsx
│   └── Signup.jsx
│
├── App.jsx
├── index.css
├── main.jsx
└── main.test.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/little-lemon.git
cd little-lemon
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm build
```

### 5. Preview the build

```bash
npm preview
```

---

## 🧪 Running Tests

This project uses **Vitest** for unit testing.

### Run all tests:

```bash
npm test
```

### Test file structure example:

```
src/
├── components/
│   └── about/
│       ├── About.jsx
│       └── About.test.jsx
└── context/
    ├── AuthContext.jsx
    └── AuthContext.test.jsx
```

Each component and page has a corresponding `.test.jsx` file.

---

## 💡 Features Summary

| Feature | Description |
|----------|--------------|
| **Home Page** | Overview of the restaurant, call-to-action to reserve a table |
| **Online Menu** | Dynamic list of menu items |
| **Reservation** | Validated form with available time slots |
| **Login / Signup** | Local demo authentication using localStorage |
| **Responsive Design** | Works across mobile, tablet, and desktop |
| **Animations** | Built with Framer Motion |
| **Reusable Hooks & Context** | Clean and maintainable code structure |

---

## 🧰 Tech Stack

- **React 19**
- **Vite 7**
- **React Router DOM 7**
- **Framer Motion** (animations)
- **React Hook Form** (form handling)
- **React Datepicker** (reservation date input)
- **React Phone Input 2** (contact field)
- **Vitest + Testing Library** (unit testing)
- **ESLint** (linting & code quality)

---

## 🔒 Authentication Demo

The app includes a **mock authentication system** powered by `localStorage`.  
Users can register and log in, and the state is persisted locally (not server-based).

---

## 📦 Scripts Overview

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build project for production |
| `npm run preview` | Preview the built app |
| `npm test` | Run all tests |

---

## 👨‍💻 Author

**Rahel Anna Temesvari**  
Meta Front-End Developer Capstone Project  
📚 Coursera – Little Lemon Restaurant Website

---

## 🖼️ Screenshots

You can find screenshots of the file structure and layout in the `assets/` folder.

---

## 🪄 License

This project is provided for educational purposes under the **MIT License**.

---

© 2025 Little Lemon Restaurant – Meta Front-End Developer Capstone Project.
