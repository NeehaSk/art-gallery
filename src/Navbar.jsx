// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';


// function Navbar() {
// return (
// <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3 shadow fixed-top">
// <div className="container-fluid">



// <Link className="navbar-brand animated-title" to="/"> 
// Cleveland Museum Gallery
// </Link>


// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
// <span className="navbar-toggler-icon"></span>
// </button>


// <div className="collapse navbar-collapse" id="navbarMenu">
// <ul className="navbar-nav ms-auto">
// <li className="nav-item">
// <Link className="nav-link" to="/">Home</Link>
// </li>
// <li className="nav-item">
// <Link className="nav-link" to="/artworks">Artworks</Link>
// </li>
// <li className="nav-item">
// <Link className="nav-link" to="/artists">Artists</Link>
// </li>
// <li className="nav-item">
// <Link className="nav-link" to="/bubble">Bubble</Link>
// </li>
// </ul>
// </div>
// </div>
// </nav>
// );
// }
// export default Navbar;
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light museum-nav shadow-sm">
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand museum-logo" to="/">
          <span className="bold-part">Cleveland</span>
          <span className="light-part"> Museum Gallery</span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#museumNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU ITEMS */}
        <div className="collapse navbar-collapse" id="museumNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/artworks">Artworks</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/artists">Artists</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
