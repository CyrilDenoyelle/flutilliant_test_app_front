import axios from "axios";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// signup the user and return true if success
export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${REACT_APP_API_BASE_URL}/users/signup`, {
      email,
      password,
    });
    if (response.data.success) {
      localStorage.setItem("xsrfToken", JSON.stringify(response.data.xsrfToken));
      axios.defaults.headers.common['x-xsrf-token'] = JSON.stringify(response.data.xsrfToken);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    return false;
  }
};
