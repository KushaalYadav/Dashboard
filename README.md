# 🎬 Movie Ticket Booking Admin Dashboard

An advanced, responsive Admin Dashboard built with **React.js** and **Tailwind CSS**, featuring tools like **Calendar**, **Kanban Board**, **Dynamic Tables**, and **Analytics Charts**, specifically designed to manage and monitor a movie ticket booking platform.

---

## 🚀 Features

- 🎟️ **Dashboard Overview** with cards showing key insights (e.g., tickets sold, users, revenue).
- 📅 **Interactive Calendar** using `react-big-calendar` for managing events.
- 🗂️ **Kanban Board** with task management and shift-to-column functionality.
- 📊 **Charts & Analytics** to visualize movie performance data.
- 📋 **Dynamic Tables** with CRUD, filters, pagination, and search.
- 🌙 **Dark/Light Theme** toggle (persistent with local storage).
- 🧭 Sidebar + Topbar navigation with icon support and active route highlighting.
- ✨ Smooth transitions, responsive layout, and modular component structure.

---

## 🧰 Tech Stack

- **React.js**
- **Tailwind CSS**
- **React Router DOM**
- **Lucide React Icons**
- **React Big Calendar**
- **Moment & Date-fns**
- **React Beautiful DnD**
- **React Icons**

---

## 📦 Project Setup

### ⚙️ Prerequisites

Make sure the following libraries are installed:

`bash

# Tailwind CSS setup (configure tailwind.config.js accordingly)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Lucide Icons
npm install lucide-react

# Calendar Libraries
npm install react-big-calendar date-fns
npm install moment

# Kanban Drag & Drop (or Shift functionality)
npm install react-beautiful-dnd

# Icons
npm install react-icons
