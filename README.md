# 🚀 Lucas Oriental dos Santos - Professional Website (Migration to Next.js + Firebase)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)&nbsp;![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)&nbsp;![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)&nbsp;![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)&nbsp;![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&nbsp;![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)&nbsp;![Turbopack](https://img.shields.io/badge/Turbopack-000000?style=for-the-badge&logo=turborepo&logoColor=white)

---

## 📌 About this project

This repository contains the foundation of my professional website, currently migrating from React + Vite to a modern stack using **Next.js (App Router)** and **Firebase Firestore** for dynamic content management.

The main goal is to improve performance, scalability, and maintainability by leveraging **Server Side Rendering (SSR)** and Firebase’s flexibility to update data without redeploying.

---

## 🏗️ Software Architecture

The project follows a **Modular Architecture with Next.js App Router**, enabling:

- Clear separation and reuse of components
- Dedicated layouts per section (Clients / Companies)
- Static and dynamic routing
- Centralized data management via Firebase Firestore

---

## 🛠️ Main Technologies

| Technology       | Purpose                                                            |
| ---------------- | ------------------------------------------------------------------ |
| **JavaScript**   | Core programming language for client and server-side logic         |
| **Next.js**      | React framework with SSR, static generation, and advanced routing  |
| **Firebase**     | Serverless backend: Firestore for dynamic data                     |
| **Vercel**       | Hosting platform with continuous deployment                        |
| **React**        | UI building library                                                |
| **Tailwind CSS** | Fast and responsive styling                                        |
| **ESLint**       | Code quality and consistency tool through static analysis          |
| **Turbopack**    | Ultra-fast incremental bundler and build tool for Next.js projects |

---

## 🗂️ Project Structure (src/app) (Changeable and uncertain)

```bash
src/
├── app/
│   ├── layout.jsx           # Base layout (root)
│   ├── page.jsx             # Home page
│   ├── freelance/           # Clients area (freelance)
│   │   ├── layout.jsx       # Exclusive freelance layout
│   │   └── page.jsx         # Main freelance page
│   └── hiring/              # Companies area
│       ├── layout.jsx       # Exclusive hiring layout
│       └── page.jsx         # Main hiring page
├── components/              # Reusable components
├── hooks/                   # For usable Hooks
├── i18n/                    # For translation
├── lib/                     # Some connections and utilities
├── store/                   # For global state (Zustand)
└── styles/                  # Global styles and Tailwind utilities
```

---

## 🎯 Project Goals

- Migrate the current site [lucasoriental.com](https://lucasoriental.com), built with React + Vite, to Next.js with a scalable and modern architecture.
- Implement dynamic content on the site using Firestore, eliminating the need to redeploy for content updates.
- Host the project on Vercel with automatic deployment connected to GitHub.
- Maintain clean, modular code ready for future growth and integrations.

---

## 📞 Contact

For inquiries or proposals, please contact me:

🌐 [https://lucasoriental.com](https://lucasoriental.com)
📧 [lucasoriental@gmail.com](mailto:lucasoriental@gmail.com)
📞 [+351 938626826](tel:+351938626826)

---

© 2025 Lucas Oriental. All rights reserved.
