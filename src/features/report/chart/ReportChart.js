import React from 'react';
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { listReports } from '../list/reportListAPI';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const ReportList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const data = await listReports();
      if (data.success) {
        const { reports } = data;

        const visitDates = reports.map(report => new Date(report.visitDate));
        const nextVisitDates = reports.map(report => new Date(report.nextVisitDate));
        const dates = [...visitDates, ...nextVisitDates];

        // Trouver la date la plus ancienne et la plus récente dans les rapports
        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));

        // Générer le tableau de toutes les dates entre la date la plus ancienne et la plus récente
        const allDates = []
        const reportByDate = []
        const currentDate = minDate;
        while (currentDate <= maxDate) {

          allDates.push(new Date(currentDate).toLocaleDateString("fr"));
          reportByDate.push({
            orderedItems: reports
              .reduce((acc, report) =>
                new Date(report.visitDate).toLocaleDateString("fr") === new Date(currentDate).toLocaleDateString("fr")
                  ? acc + report.orderedItems
                  : acc, null
              ),
            revenue: reports
              .reduce((acc, report) =>
                new Date(report.visitDate).toLocaleDateString("fr") === new Date(currentDate).toLocaleDateString("fr")
                  ? acc + report.revenue
                  : acc, null
              ),
            nextVisitItems: reports
              .reduce((acc, report) =>
                new Date(report.nextVisitDate).toLocaleDateString("fr") === new Date(currentDate).toLocaleDateString("fr")
                  ? acc + report.nextVisitItems
                  : acc, null
              ),
            nextVisitRevenue: reports
              .reduce((acc, report) =>
                new Date(report.nextVisitDate).toLocaleDateString("fr") === new Date(currentDate).toLocaleDateString("fr")
                  ? acc + report.nextVisitRevenue
                  : acc, null
              ),


          })
          currentDate.setDate(currentDate.getDate() + 1);
        }

        const labels = allDates;

        setData({
          labels,
          datasets: [
            {
              // visitDate
              // orderedItems
              label: 'nombre réel',
              data: labels.map((_, i) => reportByDate[i].orderedItems),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              // visitDate
              // revenue
              label: 'argent réel',
              data: labels.map((_, i) => reportByDate[i].revenue),
              borderColor: 'rgb(229, 229, 0)',
              backgroundColor: 'rgba(229, 229, 0, 0.5)',
            },
            {
              // nextVisitDate
              // nextVisitItems
              label: 'nombre prévisions',
              data: labels.map((_, i) => reportByDate[i].nextVisitItems),
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, {
              // nextVisitDate
              // nextVisitRevenue
              label: 'argent prévisions',
              data: labels.map((_, i) => reportByDate[i].nextVisitRevenue),
              borderColor: 'rgb(255, 255, 0)',
              backgroundColor: 'rgb(255, 255, 0, 0.5)',
            },
          ],
        });
      }
    };

    fetchReports();

  }, []);

  return (
    <div className="container">
      <h2>Report List</h2>
      {
        data.labels && data.labels.length > 0
          ? <Line options={options} data={data} />
          : <p>Chargement</p>

      }
    </div>
  );
};

export default ReportList;
