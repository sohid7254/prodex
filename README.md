# Prodex - Premium E-commerce Catalogous

Prodex is a modern, high-performance full-stack e-commerce application designed for showcasing premium products with a sleek, minimalist aesthetic. It features a robust Next.js frontend and a lightweight Express.js backend integrated with MongoDB.


Live Link [https://frontend-qfbckfjcx-sohids-projects.vercel.app/]

## 🚀 Features

- **Premium UI/UX**: Built with Framer Motion and Tailwind CSS for a fluid, high-end feel.
- **Dynamic Product Catalog**: Browse through categories like Electronics, Lifestyle, and Accessories with real-time filtering.
- **Detailed Item View**: Rich product pages with quantity selection, image galleries, and favoriting.
- **Admin Dashboard**: Secure form to add new premium items directly to the database.
- **MongoDB Integration**: Native MongoDB driver implementation for fast and reliable data storage.
- **Mock Authentication**: Simple cookie-based authentication for restricted routes.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15+ (App Router), React, Tailwind CSS, Lucide React, Framer Motion, Axios.
- **Backend**: Node.js, Express.js, Native MongoDB Driver, Dotenv, CORS.
- **Database**: MongoDB (Atlas/Local).

## 📥 Setup & Installation

### Prerequisites

- Node.js (v18+)
- MongoDB (Local instance or Atlas Cluster)

### 1. Clone the repository

```bash
git clone https://github.com/sohid7254/prodex.git
cd prodex
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Start the backend:

```bash
nodemon index.js
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For a successful deployment on Vercel, follows these steps:

### 1. Backend Deployment

- Create a new project on Vercel and point it to the `backend` directory.
- Add the following **Environment Variables** in Vercel settings:
    - `MONGODB_URI`: Your MongoDB Atlas connection string.
- Vercel will automatically use the `vercel.json` and deploy it as a serverless function.

### 2. Frontend Deployment

- Create another project on Vercel and point it to the `frontend` directory.
- Add the following **Environment Variable**:
    - `NEXT_PUBLIC_API_URL`: The URL of your deployed backend (e.g., `https://prodex-api.vercel.app`).
- Next.js will use this URL for all API calls.

## 🔗 Route Summary

### Frontend Routes

- `/` - Landing Page (Hero, Features, Testimonials)
- `/items` - Product Listing & Search
- `/items/[id]` - Detailed Product View
- `/add-item` - Form to list new items (Protected)
- `/login` - Simple Login Page

### Backend API (`http://localhost:5000/api`)

- `GET /items` - Retrieve all items from the database.
- `GET /items/:id` - Retrieve a specific item by its MongoDB ObjectID.
- `POST /items` - Create a new item (Requires JSON body with name, price, description, image).

## 📐 Feature Breakdown

### Native MongoDB Integration

Unlike standard implementations using Mongoose, this project utilizes the **native MongoDB driver** for direct, low-overhead database operations. This ensures maximum performance and more granular control over database queries.

### Robust Route Registration

The backend is architected to register its API routes independently of the database connection status. A specialized `checkDB` middleware handles requests gracefully, returning a 503 status if the database is still initializing, ensuring zero downtime for the server itself.

### Framer Motion Animations

The UI utilizes `AnimatePresence` and `motion` components to provide smooth transitions between filter states and lazy loading of product cards.
