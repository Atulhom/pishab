import React from "react";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-4 rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1 className="mb-0">PISHAB</h1>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                id="nueva-publicacion"
                className="nav-link mx-2"
                href="#"
                style={{
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #000",
                  borderRadius: "4px",
                  padding: "8px 16px",
                }}
              >
                Nueva publicación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold mx-1" id="help" href="help">
                Ayuda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold mx-1" id="login" href="#">
                Ingreso
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
