# Smart Issue Board

Smart Issue Board is a web-based issue tracking application built using React and Firebase.
It allows users to create, assign, filter, and manage issues with real-time updates.
The application focuses on clean UI/UX, practical rules, and real-world workflows.

---

## 🌐 Live Demo

👉 https://smart-issue-board-wine.vercel.app/

---

## 🚀 Tech Stack

- **Frontend:** React (Vite)
- **Backend & Database:** Firebase Firestore
- **Authentication:** Firebase Auth (Email & Password)
- **Hosting:** Vercel
- **Version Control:** GitHub

---

## ✨ Features

### 🔐 Authentication
- User signup and login using email and password
- Protected dashboard (only authenticated users can access)

### 🏠 Landing Page
- Dedicated start page with animated project title
- Login and Signup buttons redirect to respective pages

### 📝 Issue Management
- Create issues with:
  - Title
  - Description
  - Priority (Low / Medium / High)
  - Assigned To (Name + Email)
- Real-time issue updates using Firestore
- Issues are displayed in descending order (newest first)

### 🔎 Filtering
- Filter issues by:
  - Status (Open / In Progress / Done)
  - Priority (Low / Medium / High)

### ⚠️ Similar Issue Handling
- When creating an issue, the system checks for similar titles
- If a similar issue exists, an **inline confirmation box** is shown
- User can either cancel or continue creating the issue

### 🔄 Status Rules
- Allowed transitions:
  - Open → In Progress → Done
- Direct transition from Open → Done is not allowed
- Once an issue is marked as **Done**, it becomes read-only and cannot be changed

### 🎨 UI / UX
- Modern card-based layout
- Priority badges with color indicators
- Inline error messages (no browser alerts)
- Inline confirmation messages
- Clean, responsive, and professional design

---

## 🗂 Firestore Data Structure

All issues are stored in a single collection called **`issues`**.

```json
{
  "title": "Keyboard not working",
  "description": "Keys are not registering",
  "priority": "Medium",
  "status": "Open",
  "assignedTo": {
    "name": "Technician1",
    "email": "technician1@gmail.com"
  },
  "createdBy": "user@gmail.com",
  "createdAt": "Timestamp"
}
