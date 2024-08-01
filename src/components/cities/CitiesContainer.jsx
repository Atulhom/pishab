import React, { useState } from "react";
import Card from "./Card.jsx";

const CitiesContainer = () => {
  const [city, setCity] = useState([
    {
      title: "Barcelona",
      image:
        "https://wp.growproexperience.com/wp-content/uploads/2022/06/vivir-barcelona_cover.jpg",
      link: "https://www.growproexperience.com/barcelona",
    },
    {
      title: "Barcelona",
      image:
        "https://wp.growproexperience.com/wp-content/uploads/2022/06/vivir-barcelona_cover.jpg",
      link: "https://www.growproexperience.com/barcelona",
    },
    {
      title: "Barcelona",
      image:
        "https://wp.growproexperience.com/wp-content/uploads/2022/06/vivir-barcelona_cover.jpg",
      link: "https://www.growproexperience.com/barcelona",
    },
    {
      title: "Barcelona",
      image:
        "https://wp.growproexperience.com/wp-content/uploads/2022/06/vivir-barcelona_cover.jpg",
      link: "https://www.growproexperience.com/barcelona",
    },
  ]);

  return (
    <>
      {city.map((card) => (
        <Card title={card.title} image={card.image} link={card.link} />
      ))}
    </>
  );
};

export default CitiesContainer;
