import React from 'react';
import { useState } from 'react';

import { updateReport } from './reportAPI';

const Report = ({ report }) => {

  const [isEditing, setIsEditing] = useState(false);

  const [customerAddress, setCustomerAddress] = useState(report.customerAddress);
  const [customerName, setCustomerName] = useState(report.customerName);
  const [customerContact, setCustomerContact] = useState(report.customerContact);
  const [visitDate, setVisitDate] = useState(report.visitDate);
  const [reportBody, setReportBody] = useState(report.reportBody);
  const [orderedItems, setOrderedItems] = useState(report.orderedItems);
  const [revenue, setRevenue] = useState(report.revenue);
  const [nextVisitDate, setNextVisitDate] = useState(report.nextVisitDate);
  const [nextVisitItems, setNextVisitItems] = useState(report.nextVisitItems);
  const [nextVisitRevenue, setNextVisitRevenue] = useState(report.nextVisitRevenue);

  const handleEdit = (field) => {
    console.log(field);
    setIsEditing(!isEditing)
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await updateReport(report, {
      customerAddress,
      customerName,
      customerContact,
      visitDate,
      reportBody,
      orderedItems,
      revenue,
      nextVisitDate,
      nextVisitItems,
      nextVisitRevenue
    });
  }

  return (
    <form onSubmit={handleSave}>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Rapport</h5>

          <div className="form-group">
            <label>Nom :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={customerName}
                readOnly={!isEditing}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('name')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Adresse :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={customerAddress}
                readOnly={!isEditing}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('address')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Contact :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={customerContact}
                readOnly={!isEditing}
                onChange={(e) => setCustomerContact(e.target.value)}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('contact')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>VisitDate :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={visitDate}
                readOnly={!isEditing}
                onChange={(e) => setVisitDate(e.target.value)}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('visitDate')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>ReportText :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={reportBody}
                readOnly={!isEditing}
                onChange={(e) => setReportBody(e.target.value)}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('reportText')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>NumArticles :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={orderedItems}
                readOnly={!isEditing}
                onChange={(e) => setOrderedItems(parseInt(e.target.value))}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('numArticles')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Revenue :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={revenue}
                readOnly={!isEditing}
                onChange={(e) => setRevenue(parseFloat(e.target.value))}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('revenue')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>NextVisitDate :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={nextVisitDate}
                readOnly={!isEditing}
                onChange={(e) => setNextVisitDate(e.target.value)}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('nextVisitDate')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>ForecastNumArticles :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={nextVisitItems}
                readOnly={!isEditing}
                onChange={(e) => setNextVisitItems(parseInt(e.target.value))}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('forecastNumArticles')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>ForecastRevenue :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={nextVisitRevenue}
                readOnly={!isEditing}
                onChange={(e) => setNextVisitRevenue(parseFloat(e.target.value))}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={() => handleEdit('forecastRevenue')}>
                  Modifier
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-danger">
            Valider tous les champs
          </button>
        </div>
      </div>
    </form>
  );
};

export default Report;