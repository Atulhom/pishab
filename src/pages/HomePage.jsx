import React, { useState } from "react";

import Search from "../components/searchs/Search.jsx";
import Citycardold from "../components/cities/Citycardold.jsx";
import Questions from "../components/help/Questions.jsx";
import BaseLayout from "../components/common/BaseLayout.jsx";
import CitiesContainer from "../components/cities/CitiesContainer.jsx";
import RoomsContainer from "../components/rooms/RoomsContainer.jsx";

const HomePage = () => {


  return (
    <BaseLayout>S
      <>
        <Search />
        <RoomsContainer title = "Ultimas Publicaciones"/>
        <RoomsContainer title = "Top Rooms"/>
        <Questions />
        <Citycardold />
        <CitiesContainer />

      </>
    </BaseLayout>
  );
};

export default HomePage;
