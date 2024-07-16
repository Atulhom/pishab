import React, { useState } from 'react';

const Citycard = () => {
  const cards = [
    {
      id: 1,
      title: 'Barcelona',
      image: 'https://wp.growproexperience.com/wp-content/uploads/2022/06/vivir-barcelona_cover.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Madrid',
      image: 'https://creamadridnuevonorte.com/app/uploads/2022/10/madrid-img.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Sevilla',
      image: 'https://cdn.getyourguide.com/img/tour/b203ad7fded51715.jpeg/146.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'Galicia',
      image: 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/01/31/playa-de-las-catedrales-en-lugo-galicia.jpeg',
      link: '#'
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-3 mb-4">
            <div
              className="card text-dark"
              style={{
                width: '300px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                border: '1.5px solid #000',
                position: 'relative'
              }}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={card.image}
                className="card-img"
                alt={card.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              {hoveredCard === card.id && (
                <div
                  className="card-img-overlay d-flex flex-column justify-content-center text-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    padding: '20px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}
                >
                  <h5 className="card-title mb-3" style={{ fontSize: '1.5rem', color: '#000000'}}>
                    {card.title}
                  </h5>
                  <a href={card.link} className="btn btn-secondary align-self-center" style={{ fontSize: '0.8rem', color: '#fff', border: '1.5px solid #000'  }}>
                    Acceder
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Citycard;
