import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


const BaseLayout = ( { children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
