# 📌 Preact-Based Recipe Manager App

This project is a **Preact and TypeScript**-based recipe management application that allows users to create, edit, and delete recipes, as well as track the status of individual ingredients (e.g., purchased or not).

---

## 🚀 Installation and Running

### **1. Install Dependencies**
```sh
npm install
```
### **2. Start Development Server**
```sh
npm start
```
### **3. Open on your browser**
```sh
http://localhost:5173/
```
---
## 🛠️ Technologies Used

  - Preact – A lightweight and fast alternative to React
  - TypeScript – Type-safe JavaScript
  - Less – CSS preprocessor
  - IndexedDB – Browser-based database for local storage
  - LocalStorage – Web storage for user preferences and settings 
    
## 🌙 Dark Mode Support

  - Users can manually switch between light and dark modes, with the preference saved using localStorage.

## 💾 Data Storage

  - IndexedDB: Used for storing recipe data, which offers:

    - Offline functionality: Users can access and modify recipes without an internet connection
    - Structured storage: Ideal for complex recipe data with ingredients and instructions
    - Performance: Fast retrieval of large data sets with minimal impact on application performance
    - Persistence: Recipe data persists between browser sessions

  - LocalStorage: Used for storing user preferences and app settings:

    - Simple key-value storage: Perfect for theme preferences, UI settings, and recent searches
    - Immediate synchronous access: Quick retrieval of frequently accessed settings
    - Broad browser compatibility: Works reliably across all modern browsers

This application uses a dual storage approach to balance performance and simplicity:
The combination of these storage solutions ensures both robust data handling and responsive user experience.
