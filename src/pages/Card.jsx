import React from "react";

const Card = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div
            className="card text-center"
            style={{
              width: "100%",
              maxWidth: "300px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "1.5px solid #000",
              position: "relative",
              margin: "0 auto"
            }}
          >
            <div
              className="card-body d-flex flex-column justify-content-between"
              style={{ zIndex: 2, height: "150px" }}
            >
              <div>
                <h5 className="card-title">TITLE</h5>
              </div>
              <div className="mt-auto">
                <a href="#" className="btn btn-secondary">
                  Acceder
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
