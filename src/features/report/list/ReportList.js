import React from 'react';
import { useState, useEffect } from 'react';
import ReportItem from '../Report';

import { listReports } from './reportListAPI';

const ReportList = () => {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const { reports } = await listReports();
      if (reports) {
        setReports(reports);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="container">
      <h2>Report List</h2>
      {reports && reports.map((report, index) => (
        <div key={index}>
          <ReportItem
            report={report}
          />

        </div>
      ))}
    </div>
  );
};

export default ReportList;
