# 🚀 DevStack - Tech-Stack Selection Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-dev--stack--n.netlify.app-brightgreen?style=for-the-badge&logo=netlify)](https://dev-stack-n.netlify.app)

A dynamic, interactive web application built with React and Tailwind CSS that helps developers discover, select, and customize their ideal technology stack for modern web development.

---

## 🛠️ Technologies Used

- **Frontend Framework:** React 19 (using `use()` hook and `Suspense`)
- **Styling:** Tailwind CSS (v4)
- **UI Notifications:** `react-toastify`
- **Build Tool:** Vite
- **Data Source:** Fetching JSON data asynchronously

---

## ✨ Key Features

1. **Dynamic Stack Selection & Per-Card State:**  
   Users can add individual technologies to their stack with real-time UI updates. Selected cards dynamically highlight with distinct border and background colors, while disabling the selection button to prevent duplicate entries.

2. **Persistent Interactive Sidebar ("Your Stack"):**  
   Features a sticky sidebar that tracks all selected technologies on scroll. It allows users to view their active stack, remove single technologies individually, or clear the entire stack with a single click.

3. **Contextual Toast Notifications & Responsive Design:**  
   Integrated custom animated toast alerts (`react-toastify`) triggered upon adding or removing technologies to enhance user feedback. Fully optimized for cross-device performance (Mobile, Tablet, Desktop).

---

## 💡 React Interview Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX stands for JavaScript XML. It allows us to write HTML directly inside JavaScript code. It makes writing component layouts much easier and lets us seamlessly combine UI logic with dynamic data using curly braces {}.

### 2. What is the difference between props and state?
**Answer:** 
Props: Data passed down from a parent component to a child component. It is read-only and cannot be changed by the child.

State: Internal data managed within a component that can change based on user actions. When state changes, React re-renders the UI automatically.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** useState is a React hook used to store and update dynamic data in a component. In this project, I used it in TechnologiesCard to manage the selectedStack array, keeping track of which items the user has added to their stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** useEffect handles side effects like fetching data after the component renders. It is useful for loading JSON data asynchronously in the background without blocking the UI rendering.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the key prop to identify which items in a list have changed, been added, or removed. It helps React update only the changed elements efficiently instead of re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means showing different UI content based on a specific condition.

Example: In TachnolodgiSideBarCard, if selectedStack.length === 0, it shows "Your stack is empty." Otherwise, it displays the list of selected technologies and the "Remove All" button.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer:

Parent to Child: Data is passed down directly using props.

Child to Parent: The parent passes a callback function to the child as a prop. The child calls this function when an event occurs (like clicking a button) to send data back up to the parent.
