import axios from "axios";

const API_URL = process.env.REACT_APP_API_ENDPOINT;

export const handleLogin = (email, password) =>
  axios.post(`${API_URL}/users/login/`, {
    username: email,
    password: password,
  });

export const handleSignup = (email, password, confPassword, fname, lname) =>
  axios.post(`${API_URL}/users/signup/`, {
    email: email,
    first_name: fname,
    last_name: lname,
    password: password,
    confirm_password: confPassword,
  });
