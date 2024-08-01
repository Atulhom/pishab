import React from "react";
import Help from "../components/help/Help.jsx";
import BaseLayout from "../components/common/BaseLayout.jsx";
import CitiesContainer from "../components/cities/CitiesContainer.jsx";

const HelpPage = () => {
  return (
    <BaseLayout>
      <>
        <Help />
        <CitiesContainer />
      </>
    </BaseLayout>
  );
};

export default HelpPage;
