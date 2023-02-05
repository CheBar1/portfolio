import React from "react";
import Navigation from "./Navigation";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header>
      <h1>Cheryl Barclay</h1>
      <h2>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </h2>
    </header>
  );
};

export default Header;
