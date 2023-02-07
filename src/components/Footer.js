// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

import React from 'react'
// Use rafce as shortcut to create React arrow export function

const Footer = () => {
  return (
    <footer className="footer bg-dark fixed-bottom">
    <a href="https://github.com/CheBar1"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
    <a href="https://www.linkedin.com/in/cheryl-barclay-531985252/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
    <a href="https://www.instagram.com/cheryl.k.barclay/"><img src="https://img.icons8.com/ios-glyphs/48/ffffff/trilby.png" alt="Instagram" className="icon"/></a>
</footer>
  )
}

export default Footer
