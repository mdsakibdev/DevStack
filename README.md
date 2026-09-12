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
**Answer:** JSX (JavaScript XML) is a syntax extension for React that lets us write HTML-like markup directly inside JavaScript code. It is used because it makes writing UI structures intuitive, readable, and allows embedding dynamic JavaScript expressions seamlessly using curly braces `{}`.

### 2. What is the difference between props and state?
**Answer:** 
- **Props (Properties):** Read-only data passed down from a parent component to a child component. The receiving component cannot modify props directly.
- **State:** Internal data managed within a component that can change over time (usually via user interaction). When state updates, React automatically re-renders the component to reflect the change.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to store and manage dynamic state data. In this project, `useState` was used in `TechnologiesCard` to maintain the `selectedStack` array, keeping track of all currently selected technology cards across the dashboard and sidebar.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` allows components to perform side effects, such as fetching data from an external API or file after the component renders. In data fetching scenarios, it ensures that data loading occurs asynchronously without blocking the initial render of the component. *(Note: In this project, data was asynchronously fetched via React's modern `use()` hook paired with `<Suspense>`).*

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items in a list have changed, been added, or removed. It helps React’s virtual DOM efficiently re-render only the modified elements rather than re-creating the whole list from scratch.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means displaying different UI components or elements based on specific conditions or state values.  
**Example in this project:** In `TachnolodgiSideBarCard`, we rendered an empty state message when `selectedStack.length === 0`, and rendered the selected list along with a "Remove All" button when `selectedStack.length > 0`:

```jsx
{selectedStack.length === 0 ? (
  <div className="border border-dashed p-4 text-center">
    <p>Your stack is empty.</p>
  </div>
) : (
  <div>{/* Render Selected Items List */}</div>
)}
