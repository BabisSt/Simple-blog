# Simple-blog
A lightweight blog platform where users can create, edit, and manage their blog posts. This project focuses on integrating a React frontend with a Spring Boot backend while implementing basic CRUD operations and user authentication.

# Vite-installation 
Download Vite : npm install -D vite
Create project : npm create vite@latest
Finally : npm install
Run : npm run dev

# Tailwind installation 
Install : npm install -D tailwindcss postcss autoprefixer
Init : npx tailwindcss init
Edit tailwind.config.js : add 
**
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

**

Create or Add in src/index.css :
**
@tailwind base;
@tailwind components;
@tailwind utilities;
**

Edit vite.config :
**
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
**