import axios from "axios";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const sendReport = async (body) => {
  try {
    const response = await axios.post(`${REACT_APP_API_BASE_URL}/reports/create`, body);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la connection :", error);
    return false;
  }
}
