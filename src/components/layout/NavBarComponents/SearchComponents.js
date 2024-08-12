"use client"
// DEFINE ALL EXTERNAL IMPORT 
import React, { useState } from 'react';


// DEFINE QUICK LINK DETA
const quickLinks = [
  {
    id: 1,
    link: "/",
    name: "Home",
  },
  {
    id: 2,
    link: "/company/apply-for-job",
    name: "Careers",
  },
  {
    id: 3,
    link: "/resource/repogetry",
    name: "Repository",
  },
  {
    id: 5,
    link: "/resource/social-media",
    name: "Our blogs",
  },
];

// DEFINE RESOURCE DATA

const resource = [
  {
    id: "1",
    link: "/product",
    name: "Product",
  },
  {
    id: "2",
    link: "/shop",
    name: "Shop Now",
  },
  {
    id: "3",
    link: "/demo",
    name: "Book Demo",
  },
  {
    id: "4",
    link: "/demo",
    name: "Dashboard",
  },
  {
    id: "5",
    link: "/contact-us",
    name: "Contact Us",
  },
];

// DEFINE MENUDROPDOWN DATA
const menuDropdown = [
  { name: "About Us", link: "/company/about-us" },

];


const menuResourceDropdown = [
  { name: "Social Media", link: "/resource/social-media" },

  { name: "Impact Stories", link: "/resource/stories" },
];

// Add dropdown menus to the menu array
export const menuWithDropdown = [
  ...quickLinks,
  ...resource,
  ...menuDropdown,
  ...menuResourceDropdown,
];

// DEFINE MAIN FUNCTION 
const SearchComponents = () => {


  // Search functionality
  // DEFINE ALL STATES HERE
  const [isOpen, setIsOpen] = useState(false);

  // DEFINE OPEN SEARCH FUNCTION
  const openSearch = () => {
    setIsOpen(true);
  };


  // DEFINE CLOSE SEARCH FUNCTION

  const closeSearch = () => {
    setIsOpen(false);
  };


  // DEFINE MAIN FUNCTION RETURN 
  return (
    <div>
      <div className={`overlay ${isOpen ? 'show' : ''}`}>
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
        <div className="overlay-content">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>

      <h2>Fullscreen Search</h2>
      <p>Click on the button to open the search box.</p>
      <button className="openBtn" onClick={openSearch}>Open Search Box</button>
    </div>
  );
};
// DEFINE MAIN FUNCTION EXPORT 
export default SearchComponents