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

⚠️ If you're using Tailwind for the first time, update tailwind.config.js with paths to your source files:

**content: ["./src/**/*.{js,jsx,ts,tsx}"],**

**---Also, configure index.css or App.css:**

@tailwind base;
@tailwind components;
@tailwind utilities;

----------------------------------------------------------------------------------------------------------------------------------------------------------------

Testing & Validation Guide
Here’s how to validate all key components and features:

**✅ General UI**
Launch the app with npm start.

Check that the Dashboard loads with 3 top summary cards and 4 feature cards.

Test both light and dark modes with persistent toggle.

**✅ Navigation**
Click each card (Calendar, Kanban, Table, Charts) to verify routing.

Topbar and Sidebar should highlight active routes.

**✅ Calendar**
Click on a date → Modal should open.

Create event → Event should appear on the calendar.

Click event → Option to delete should show.

**✅ Kanban Board**
Tasks should be grouped into columns: To Do, In Progress, Done.

On hovering over a task, a Shift icon should appear.

Click Shift → Select a column → Task should move.

Add/Edit/Delete task should work via modal.

**✅ Table**
Should show dynamic data with the following:

Sorting by columns

Searching (one global search bar)

Pagination

Filtering columns

CRUD operations

**✅ Charts**
Line chart, bar chart, and pie chart should render mock booking data (e.g., revenue, hits/flops, genres).


