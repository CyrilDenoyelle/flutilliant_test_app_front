import React from 'react';
import { useState, useEffect } from 'react';

import { updateReport, deleteReport } from './reportAPI';

const Report = ({ report, remove }) => {

  const [isEditing, setIsEditing] = useState(false);

  const [customerAddress, setCustomerAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [reportBody, setReportBody] = useState('');
  const [orderedItems, setOrderedItems] = useState('');
  const [revenue, setRevenue] = useState('');
  const [nextVisitDate, setNextVisitDate] = useState('');
  const [nextVisitItems, setNextVisitItems] = useState('');
  const [nextVisitRevenue, setNextVisitRevenue] = useState('');

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true)
  };

  const handleDelete = async () => {
    const deletedReport = await deleteReport(report);
    if (deletedReport) remove(report._id);
  }

  const handleSave = async (e) => {
    e.preventDefault();
    setIsEditing(false)
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

  useEffect(() => {
    setCustomerAddress(report.customerAddress);
    setCustomerName(report.customerName);
    setCustomerContact(report.customerContact);
    setVisitDate(report.visitDate);
    setReportBody(report.reportBody);
    setOrderedItems(report.orderedItems);
    setRevenue(report.revenue);
    setNextVisitDate(report.nextVisitDate);
    setNextVisitItems(report.nextVisitItems);
    setNextVisitRevenue(report.nextVisitRevenue);
  }, [report]);


  return (
    <form onSubmit={handleSave}>
      {report._id}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Rapport</h5>
          <div className="row">
            <div className="col"><div className="form-group">
              <label>Nom :</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={customerName}
                  readOnly={!isEditing}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
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
                </div>
              </div>
            </div>
            <div className="col">

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
                </div>
              </div>

            </div>
          </div>
          {
            isEditing
              ? <button type="submit" className="btn btn-success">
                Valider
              </button>
              : <button type="button" className="btn btn-primary" onClick={(e) => handleEdit(e)}>
                Modifier
              </button>
          }
          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Supprimer
          </button>
        </div>
      </div>
    </form>
  );
};

export default Report;
