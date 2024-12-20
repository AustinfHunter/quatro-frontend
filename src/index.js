import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import LandingPage from "./components/LandingPage";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import ManageFoods from "./pages/ManageFoods";
import Chatbot from "./components/Chatbot";

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
        path: "logout/",
        element: <Logout />,
      },
      {
        path: "profile/",
        element: <Profile />,
      },
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
      {
        path: "managefoods/",
        element: <ManageFoods />,
      },
      {
        path: "quatbot/",
        element: <Chatbot />,
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
