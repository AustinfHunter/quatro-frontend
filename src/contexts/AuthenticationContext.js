import { createContext } from "react";

export const AuthenticationContext = createContext(null);

export const AuthenticationDispatchContext = createContext(null);

export const AuthenticationReducer = (authenticated, action) => {
  switch (action.type) {
    case "successful-login":
      localStorage.setItem("quatro-token", action.token);
      authenticated = true;
      return authenticated;
    case "logout":
      localStorage.removeItem("quatro-token");
      authenticated = false;
      return authenticated;
    case "check-auth":
      return localStorage.getItem("quatro-token") !== null;
    default:
      throw Error("Uknown action in authentication context: " + action.type);
  }
};
