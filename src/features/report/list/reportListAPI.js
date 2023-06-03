import axios from "axios";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const listReports = async () => {
  try {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}/reports`);

    return response.data;
  } catch (error) {
    console.error("Erreur lors du listing des reports :", error);
    return false;
  }
}
