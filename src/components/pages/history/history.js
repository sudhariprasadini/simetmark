import React from "react";
import historyData from "../../data/history-data";

const CompanyHistory = () => {
  return (
    <div className="history__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="history-grid">
              {historyData.map((item, id) => (
                <div key={id} className="history-card">
                  <div
                    className="company__history-area-item-inner"
                    style={{ paddingLeft: "0", borderLeft: "none" }}
                  >
                    <div className="company__history-area-item-inner-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="company__history-area-item-inner-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
