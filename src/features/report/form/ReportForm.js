import React, { useState } from 'react';
import { sendReport } from '../reportAPI';

const ReportForm = () => {

  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    contact: ''
  });
  const [visitDate, setVisitDate] = useState('');
  const [reportBody, setReportBody] = useState('');
  const [orderedItems, setOrderedItems] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [nextVisitDate, setNextVisitDate] = useState('');
  const [nextVisitItems, setNextVisitItems] = useState(0);
  const [nextVisitRevenue, setNextVisitRevenue] = useState(0);

  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await sendReport({
        customer: {
          name: customer.name,
          address: customer.address,
          contact: customer.contact
        },
        visitDate,
        reportBody,
        orderedItems,
        revenue,
        nextVisitDate,
        nextVisitItems,
        nextVisitRevenue
      });

      setAlert({ success: 'envoi du rapport réussit', error: false })
      if (resp) {
        return
      }
      throw new Error('echec d\'envoi du rapport');
    } catch (error) {
      console.error(error);
      setAlert({ error: 'echec d\'envoi du rapport', success: false })
    }
  };

  return (
    <>
      {
        alert.error ?
          <div className="alert alert-danger" role="alert">
            {alert.error}
          </div>
          : null

      }
      {
        alert.success ?
          <div className="alert alert-success" role="alert">
            {alert.success}
          </div>
          : null

      }
      <form onSubmit={handleSubmit} className="container">
        <h2>Report Form</h2>

        <h3>Customer Information</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            className="form-control"
            value={customer.address}
            onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            className="form-control"
            value={customer.contact}
            onChange={(e) => setCustomer({ ...customer, contact: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="visitDate">Visit Date:</label>
          <input
            type="date"
            id="visitDate"
            className="form-control"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reportText">Report Text:</label>
          <textarea
            id="reportText"
            className="form-control"
            value={reportBody}
            onChange={(e) => setReportBody(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="numArticles">Number of Articles:</label>
          <input
            type="number"
            id="numArticles"
            className="form-control"
            value={orderedItems}
            onChange={(e) => setOrderedItems(parseInt(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="revenue">Revenue:</label>
          <input
            type="number"
            id="revenue"
            className="form-control"
            value={revenue}
            onChange={(e) => setRevenue(parseFloat(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nextVisitDate">Next Visit Date:</label>
          <input
            type="date"
            id="nextVisitDate"
            className="form-control"
            value={nextVisitDate}
            onChange={(e) => setNextVisitDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="forecastNumArticles">Forecast Number of Articles:</label>
          <input
            type="number"
            id="forecastNumArticles"
            className="form-control"
            value={nextVisitItems}
            onChange={(e) => setNextVisitItems(parseInt(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="forecastRevenue">Forecast Revenue:</label>
          <input
            type="number"
            id="forecastRevenue"
            className="form-control"
            value={nextVisitRevenue}
            onChange={(e) => setNextVisitRevenue(parseFloat(e.target.value))}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ReportForm;
