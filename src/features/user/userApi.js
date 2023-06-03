import axios from "axios";
axios.defaults.withCredentials = true;

// automatically give axios the xsrf token
const xsrfToken = localStorage.getItem("xsrfToken");
axios.defaults.headers.common['x-xsrf-token'] = xsrfToken;

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// get the current user if logged in
export const checkTokenValidity = async () => {
  try {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}/users/checkTokenValidity`);
    if (response.data.user) {
      return response.data.user;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error l'utilisateur n'est plus connecté :", error);
    return false;
  }
};
