import axios from "axios";

const API_URL = process.env.REACT_APP_API_ENDPOINT;

export const queryBot = (query) =>
  axios.post(
    `${API_URL}/ai/chat/`,
    { query: query },
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("quatro-token")}`,
      },
    },
  );
