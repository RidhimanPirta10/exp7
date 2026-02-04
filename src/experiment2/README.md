# Experiment 2 — Modern UI Page (MUI)

🧪 **Deadline:** 4 February 2026

## Overview ✅
Design and build a modern, responsive web page using a component UI library (Material UI used here). This sample is a complete, small project you can drop into your React app to demonstrate structure, components, responsiveness, and deployment readiness.

## What this folder contains 🔧
- `components/` — reusable UI components (Navbar, Hero, Cards, Footer)
- `pages/Home.jsx` — the page assembling components
- `App.jsx` — example App to mount the page with an MUI theme
- `index.css` — page-specific CSS

## How to run locally 💡
1. Install dependencies (in your project root):

   npm install @mui/material @emotion/react @emotion/styled

   (Optional) If you use MUI icons (used in the navbar):

   npm install @mui/icons-material

2. Import and use `Experiment2` App or `Home.jsx` inside your app. Example (in `src/App.js`):

```js
import Experiment2App from './experiment2/App';
export default Experiment2App;
```

OR quickly render Experiment 2 directly from `src/index.js` by replacing the default `App` render with:

```js
// import App from './App';
import Experiment2App from './experiment2/App';

root.render(
  <React.StrictMode>
    <Experiment2App />
  </React.StrictMode>
);
```

3. Start your app: `npm start`.

## Deployment link format 📎
Use the required format when submitting: `{uid}-{experiment-part}-{name}.vercel.app` (example: `21-exp2-ridhi.vercel.app`).

## Assessment checklist ✔️
- Clean & modern UI
- Proper spacing/typography
- Responsive layout (desktop & mobile)
- Uses MUI components
- Project folder structure aligned with guide

---

If you'd prefer Bootstrap instead, swap in `react-bootstrap` and `bootstrap` and import Bootstrap CSS in your main entry file.

Good luck — prepare for the viva by being ready to explain design choices and folder structure! ✨