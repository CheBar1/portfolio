import React from "react";
import Navigation from "./Navigation";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
};

export default Header;
