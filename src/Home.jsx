// import React from 'react';
// import './Home.css';


// function Home() {
// return (

// <div className="hero-container">
// <header className="gallery-header">
//   <h1 className="gallery-title">Cleveland Museum Gallery</h1>
// </header>




// <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
// <div className="carousel-inner">


// <div className="carousel-item active">
// <img src="https://www.adventurestudenttravel.com/wp-content/uploads/2016/08/Museum-of-Art-Courtesy-of-ThisisCleveland.com_.jpg" className="d-block w-100 hero-img" />
// <div className="carousel-caption d-none d-md-block caption-box">
// <h2>Explore Timeless Art</h2>
// <p>Discover masterpieces from around the world.</p>
// </div>
// </div>


// <div className="carousel-item">
// <img src="https://www.clevelandart.org/_next/image?url=https%3A%2F%2Fweb-drupal-cms-prod.clevelandart.org%2Fsites%2Fdefault%2Ffiles%2F2024-01%2FwwbirrthPreparations.jpg&w=3840&q=75" className="d-block w-100 hero-img" />
// <div className="carousel-caption d-none d-md-block caption-box">
// <h2>Step Into History</h2>
// <p>Travel through centuries of culture.</p>
// </div>
// </div>


// <div className="carousel-item">
// <img src="https://web-drupal-cms-prod.clevelandart.org/sites/default/files/Rialto%20Bridge_preview.jpg" className="d-block w-100 hero-img" />
// <div className="carousel-caption d-none d-md-block caption-box">
// <h2>Experience Creativity</h2>
// </div>
// </div>


// </div>


// <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
// <span className="carousel-control-prev-icon"></span>
// </button>


// <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
// <span className="carousel-control-next-icon"></span>
// </button>
// </div>
// </div>
// );
// }
// export default Home;

import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    const title = document.getElementById("animatedTitle");
    const text = title.innerText;

    title.innerHTML = ""; // Clear original text

    // Create span for each letter
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("animated-letter");

      // Delay each letter animation
      span.style.animationDelay = `${index * 0.08}s`;

      title.appendChild(span);
    });
  }, []);

  return (
    <div className="hero-container">
      {/* HEADER TITLE */}
      <header className="gallery-header">
        <h1 className="gallery-title animated-title" id="animatedTitle">
          Cleveland Museum Gallery
        </h1>
      </header>

      {/* HERO CAROUSEL */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="https://www.adventurestudenttravel.com/wp-content/uploads/2016/08/Museum-of-Art-Courtesy-of-ThisisCleveland.com_.jpg"
              className="d-block w-100 hero-img"
              alt="slide1"
            />
            <div className="carousel-caption d-none d-md-block caption-box">
              <h2>Explore Timeless Art</h2>
              <p>Discover masterpieces from around the world.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="https://www.clevelandart.org/_next/image?url=https%3A%2F%2Fweb-drupal-cms-prod.clevelandart.org%2Fsites%2Fdefault%2Ffiles%2F2024-01%2FwwbirrthPreparations.jpg&w=3840&q=75"
              className="d-block w-100 hero-img"
              alt="slide2"
            />
            <div className="carousel-caption d-none d-md-block caption-box">
              <h2>Step Into History</h2>
              <p>Travel through centuries of culture.</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://web-drupal-cms-prod.clevelandart.org/sites/default/files/Rialto%20Bridge_preview.jpg"
              className="d-block w-100 hero-img"
              alt="slide3"
            />
            <div className="carousel-caption d-none d-md-block caption-box">
              <h2>Experience Creativity</h2>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
}

export default Home;
