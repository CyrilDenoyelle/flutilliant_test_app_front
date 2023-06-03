import axios from "axios";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// signup the user and return true if success
export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${REACT_APP_API_BASE_URL}/users/signup`, {
      email,
      password,
    });
    return response.data.success;
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    return false;
  }
};
