# Smart Issue Board

Smart Issue Board is a web-based issue tracking application built using React and Firebase.  
It allows users to create, assign, filter, and manage issues with real-time updates.  
The project focuses on clean UI/UX, practical rules, and real-world workflows commonly used in issue management systems.

---

## 🌐 Live Demo

https://smart-issue-board-wine.vercel.app/

---

## 💻 Source Code

https://github.com/Gowtham-nekkala/smart-issue-board

---

## 🚀 Tech Stack

- **Frontend:** React (Vite)
- **Backend & Database:** Firebase Firestore
- **Authentication:** Firebase Auth (Email & Password)
- **Hosting:** Vercel
- **Version Control:** GitHub

---

## ❓ Why did you choose the frontend stack you used?

I chose React with Vite as the frontend stack because it provides a component-based architecture that makes the user interface modular, reusable, and easy to maintain.  
Vite offers fast development builds and hot module replacement, which significantly improves development speed.  
React integrates seamlessly with Firebase for authentication and real-time data handling, making it suitable for building modern web applications.

---

## 🗂 Firestore Data Structure

All issues are stored in a single Firestore collection called **`issues`**.

Each issue document follows this structure:

- **Title:** Keyboard not working  
- **Description:** Keys are not registering  
- **Priority:** Medium  
- **Status:** Open  
- **Assigned To:**
  - **Name:** Technician1  
  - **Email:** technician1@gmail.com  
- **Created By:** user@gmail.com  
- **Created At:** Timestamp  

### Design Explanation

- A single collection keeps the data structure simple and easy to query.
- The `assignedTo` field stores both name and email for better clarity.
- The `createdAt` field helps in sorting issues by newest first.
- The structure is scalable and easy to extend.

---

## 🔍 How similar issues are handled

Before creating a new issue, the application checks existing issues for similar titles.  
If a similar issue exists, an inline confirmation message is shown to the user.  
The user can either cancel the action or continue creating the issue.

This approach reduces duplicate issues while maintaining a smooth user experience.

---

## ⚠️ What was confusing or challenging?

Some of the challenges faced during development include:

- Handling Firebase authentication initialization without causing blank screens
- Managing real-time Firestore updates efficiently
- Enforcing strict issue status transitions (Open → In Progress → Done)
- Replacing browser alert and confirm dialogs with custom inline UI messages
- Configuring environment variables and deployment on Vercel

These challenges improved my understanding of real-world full-stack development.

---

## 🚀 What would you improve next?

If given more time, the following enhancements could be added:

- Role-based access control (Admin / Technician / User)
- Commenting system for issues
- Notification system for assigned users
- Search and pagination for large datasets
- Issue history and audit tracking

---

## ✨ Features Summary

- User authentication (Signup and Login)
- Landing page with navigation
- Issue creation and management
- Filtering by status and priority
- Similar issue detection
- Real-time Firestore updates
- Status transition enforcement
- Clean and responsive user interface

---

## 👨‍💻 Author

**NEKKALA GOWTHAM**  
B.Tech Student  

This project was built as part of an internship assignment to demonstrate real-world problem solving,  
Firebase integration, and modern frontend development.
