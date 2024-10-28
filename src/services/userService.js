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

export const getUserDashboard = () =>
  axios.get(`${API_URL}/journal/dashboard/`, {
    headers: { Authorization: `Token ${localStorage.getItem("quatro-token")}` },
  });

export const getFoods = (fdc_ids) =>
  axios.get(`${API_URL}/foods/${fdc_ids}}`, {
    headers: { Authorization: `Token ${localStorage.getItem("quatro-token")}` },
  });

export const addToJournal = (fdcId, date, amountConsumed) =>
  axios.post(
    `${API_URL}/journal/entries/create/`,
    { fdc_id: fdcId, date: date, amount_consumed_grams: amountConsumed },
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("quatro-token")}`,
      },
    },
  );

export const searchFoods = (query) =>
  axios.get(`${API_URL}/foods/search/${query}`, {
    headers: { Authorization: `Token ${localStorage.getItem("quatro-token")}` },
  });
