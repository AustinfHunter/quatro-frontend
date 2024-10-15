import { createContext } from "react";

export const AuthenticationContext = createContext(null);

export const AuthenticationDispatchContext = createContext(null);

export const AuthenticationReducer = (authenticated, action) => {
  switch (action.type) {
    case "successful-login":
      localStorage.setItem("quatro-token", action.token);
      authenticated = true;
      break;
    case "logout":
      localStorage.removeItem("quatro-token", action.token);
      authenticated = false;
      break;
    case "check-auth":
      if (localStorage.getItem("quatro-token") !== null) {
        authenticated = true;
      }
      break;
    default:
      throw Error("Uknown action in authentication context: " + action.type);
  }
};
