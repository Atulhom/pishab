import React from "react";

const RoomsContainer = ({title}) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 text-start">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default RoomsContainer;