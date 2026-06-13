# Redux Toolkit Practice Project

This project demonstrates the complete Redux Toolkit workflow in a React application.

## Features

* Redux Toolkit store configuration
* Creating slices using `createSlice`
* Defining actions and reducers
* Dispatching actions with `useDispatch`
* Accessing state with `useSelector`
* Global state management using React Redux
* Counter functionality (Increment/Decrement)
* Scalable folder structure for future features

## Tech Stack

* React
* Redux Toolkit
* React Redux
* Vite
* JavaScript

## Project Structure

```text
src/
├── redux/
│   ├── store.js
│   └── counter/
│       └── counterSlice.js
├── components/
│   └── pages/
│       └── Home.jsx
└── main.jsx
```

## Learning Outcomes

Through this project, I learned:

* How Redux Toolkit simplifies Redux setup
* Difference between actions, reducers, and slices
* Store configuration and Provider setup
* Using `useDispatch` and `useSelector`
* Managing global state efficiently in React applications

## Getting Started

```bash
npm install
npm run dev
```

The application will start on:

```bash
http://localhost:5173
```

## Future Improvements

* Shopping Cart functionality
* Product management
* Async API integration using `createAsyncThunk`
* Persistent state with localStorage
* Redux DevTools integration

---

Created while learning and practicing Redux Toolkit with React.
