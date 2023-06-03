
import axios from "axios";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// update report
export const updateReport = async (report, update) => {
  try {
    const response = await axios.put(`${REACT_APP_API_BASE_URL}/reports`, {
      reportId: report._id,
      update
    });

    if (response.data.success) {
      return response.data.user;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de la connection :", error);
    return false;
  }
};
