
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
      return response.data.deletedReport;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de l'update :", error);
    return false;
  }
};

// delete report
export const deleteReport = async (report) => {
  try {
    const response = await axios.delete(`${REACT_APP_API_BASE_URL}/reports/${report._id}`);

    if (response.data.success) {
      return response.data.deletedReport;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    return false;
  }
};
