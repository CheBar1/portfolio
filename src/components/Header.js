// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// // Use rafce as shortcut to create React arrow export function

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
