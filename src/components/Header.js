import React from "react";
import Navigation from "./Navigation";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <container id="container">
    <header>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
    </container>
  );
};

export default Header;
