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

export const editJournalEntry = (id, fdcId, date, amountConsumed) =>
  axios.put(
    `${API_URL}/journal/entry/${id}`,
    { fdc_id: fdcId, date: date, amount_consumed_grams: amountConsumed },
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("quatro-token")}`,
      },
    },
  );

export const deleteJournalEntry = (id) =>
  axios.delete(`${API_URL}/journal/entry/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("quatro-token")}`,
    },
  });

export const getDashboardByDate = (date) =>
  axios.get(`${API_URL}/journal/dashboard/${date}/`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("quatro-token")}`,
    },
  });

export const searchFoods = (query) =>
  axios.get(`${API_URL}/foods/search/${query}`, {
    headers: { Authorization: `Token ${localStorage.getItem("quatro-token")}` },
  });

export const getUserProfile = () =>
  axios.get(`${API_URL}/users/account/`, {
    headers: { Authorization: `Token ${localStorage.getItem("quatro-token")}` },
  });

export const updateUserProfile = (profile) =>
  axios.put(`${API_URL}/users/fitness-profile/`, profile, {
    headers: { Authorization: `Token ${localStorage.getItem("quatro-token")}` },
  });
