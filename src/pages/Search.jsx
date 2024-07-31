import React from "react";

const Search = () => {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-12">
          <div
            className="card text-white rounded border-0"
            style={{
              backgroundImage:
                'url("https://km2.es/wp-content/uploads/comprar-un-piso-en-barcelona_auto_x2.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}
          >
            <div
              className="card-body d-flex flex-column align-items-center"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
                width: "100%", 
                maxWidth: "500px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
              }}
            >
              <h5 className="card-title mb-3" style={{ color: "#fff" }}>
                Encuentra lo que necesitas
              </h5>

              <form className="d-flex w-100" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar..."
                  aria-label="Search"
                  style={{
                    borderRadius: "20px 0 0 20px",
                    border: "none",
                    padding: "8px 12px",
                    fontSize: "0.9rem",
                    maxWidth: "300px",
                  }}
                />
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  style={{
                    borderRadius: "0 20px 20px 0",
                    border: "none",
                    padding: "8px 12px",
                    fontSize: "0.9rem",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
