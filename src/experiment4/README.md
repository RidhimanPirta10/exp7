# Experiment 5 — Redux Toolkit + Context + Memo + Extra Page

This folder now contains the Experiment 5 extension built on top of Experiment 4. The app has been refactored to meet the new assignment requirements:

- **Redux Toolkit** for structured global state (favorites slice with `addFavorite`, `removeFavorite`, `clearFavorites`)
- **React Context** used for theme toggling and user profile (context provider wraps the entire app)
- **useMemo** utilised in multiple pages to optimise derived data
- **Extra page** (`Reports`) added alongside Home / Projects / Analytics
- Navbar updated to include a Reports link; favorites count now comes from Redux
- Theme toggle and user greeting demonstrate context usage
- Clean responsive design carried over from previous experiment

UID and Name displayed in the app:

- UID: **23BAI70112**
- Name: **Ridhiman Pirta**

### Run the project

1. From the project root (`myspa1`), install dependencies (new packages added):

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open http://localhost:3000. You should see the Experiment 5 app with routes for Home, Projects, Analytics and Reports. Favorites are managed by Redux; theme and user info come from Context.

### Deployment

Use the same Vercel naming convention as before:

`{uid}-{experiment-part}-{name}.vercel.app`

For example:

`23BAI70112-5-ridhiman-pirta.vercel.app`

### Screenshots

Screenshots demonstrating the new state management features and the Reports page are stored in the `screenshots/` directory. Add at least 2–3 images before submission; the repository currently contains placeholders.
