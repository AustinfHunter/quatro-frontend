import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import LandingPage from "./components/LandingPage";
<<<<<<< HEAD
import Logout from "./components/Logout";
=======
import Profile from "./components/Profile";
>>>>>>> main

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login/",
        element: <LoginForm />,
      },
      {
        path: "signup/",
        element: <SignupForm />,
      },
      {
<<<<<<< HEAD
        path: "logout/",
        element: <Logout />,
=======
        path: "landingpage/",
        element: <LandingPage />
      },
      {
        path: "profile/",
        element: <Profile />
>>>>>>> main
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
