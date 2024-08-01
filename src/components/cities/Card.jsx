import React from "react";

const Card = ({ title, image, link }) => {
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
              <img
                src={image}
                className="card-img"
                alt={title}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              
                <a href={link} className="btn btn-secondary">
                  Acceder
                </a>
                <h5 className="card-title">{title}</h5>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
