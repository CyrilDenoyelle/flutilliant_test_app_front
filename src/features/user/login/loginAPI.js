import axios from "axios";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// login the user and return the user if success
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${REACT_APP_API_BASE_URL}/users/login`, {
      email,
      password,
    });
    if (response.data.success) {
      localStorage.setItem("xsrfToken", JSON.stringify(response.data.xsrfToken));
      axios.defaults.headers.common['x-xsrf-token'] = JSON.stringify(response.data.xsrfToken);
      return response.data.user;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de la connection :", error);
    return false;
  }
};
