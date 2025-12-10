
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Artworks.css";

function Artworks() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios
      .get("https://openaccess-api.clevelandart.org/api/artworks/?limit=150")
      .then((res) => setArtworks(res.data.data))
      .catch(() => alert("Error fetching artworks"));
  }, []);

  return (
    <div className="container mt-5 pt-5 mb-5">


      <h2 className="section-title">Featured Artworks</h2>

      <div className="row g-4">
{artworks.slice(0, 28).filter((_, i) => i !== 6).map((item) => (
          // <div className="col-md-4 mb-4" key={item.id}>
          //   <div className="card1">
          //     <img
          //       src={item.images?.web?.url}
          //       alt={item.title}
          //       className="card1-img"
          //     />
          //     <div className="card1-title">{item.title}</div>
          //     <div className="card1-title">Location: {item.current_location}</div>
          //   </div>
          // </div>
          <div className="col col-12 col-sm-6 col-md-4 col-lg-3 " key={item.id}>
            <div className="card card-ex h-100">
              <img src={item.images?.web?.url}
                alt={item.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title"><b>Title:</b> {item.title}</h5>
                <p className="card-text"><b>Location:</b> {item.current_location}</p>



              </div>
            </div>
          </div>
        ))}
      </div>


      <h2 className="section-title mt-5">Collections</h2>

      {/* <div className="carousel-scroll">
        {artworks.slice(27, 37).map((item) => (
          <div className="carousel-card" key={item.id}>
            <div className="carousel-img-container">
              <img
                src={item.images?.web?.url}
                alt={item.title}
                className="carousel-img"
              />
            </div>
            <p className="carousel-title">{item.title}</p>
          </div>
        ))}
      </div> */}
<div className="carousel-scroll">
  {artworks.slice(29, 37).map((item) => (
    <div className="carousel-card" key={item.id}>
      <div className="carousel-img-container">
        <img
          src={item.images?.web?.url || "https://via.placeholder.com/300"}
          alt={item.title}
          className="carousel-img"
        />
      </div>
      <p className="carousel-title"><b>{item.title}</b></p>
    </div>
  ))}
</div>

      {/* <h2 className="section-title mt-5">Special Exhibitions</h2>

      <div className="two-col-grid">
        {artworks.slice(37, 45).map((item) => (
          <div className="two-col-item" key={item.id}>
            <div className="two-col-img-wrapper">
              <img
                src={item.images?.web?.url}
                alt={item.title}
                className="two-col-img"
              />
            </div>
            <h3 className="two-col-title">{item.title}</h3>
            <p className="two-col-desc">
              {item.creators?.[0]?.description || "Unknown Artist"}
            </p>
          </div>
        ))}
      </div> */}
<div className="two-col-grid">
  {artworks.slice(38, 56).map((item) => (
    <div className="two-col-item" key={item.id}>
      <div className="two-col-img-wrapper">
        <img
          src={item.images?.web?.url}
          alt={item.title}
          className="two-col-img"
        />
      </div>
      <h3 className="two-col-title"><b>{item.title}</b></h3>
      <p className="two-col-desc">
        {item.creators?.[0]?.description || "Unknown Artist"}
      </p>
    </div>
  ))}
</div>
{/* <div className="overlap-carousel">
  {artworks.slice(55, 61).map((item) => (
    <div className="overlap-card" key={item.id}>
      <img
        src={item.images?.web?.url}
        alt={item.title}
        className="overlap-img"
      />

      <div className="overlap-text">
        {item.title.slice(0, 12).toUpperCase()}
      </div>
    </div>
  ))}

</div> */}
{/* <div className="overlap-carousel">
  {artworks.slice(57, 62).map((item) => (
    <div className="overlap-card" key={item.id}>
      <img
        src={item.images?.web?.url}
        alt={item.title}
        className="overlap-img"
      />

      <div className="overlap-title">
        {item.title.slice(0, 14)}
      </div>
    </div>
  ))}
</div> */}

<h2 className="section-title mt-5">Ancient Favorites</h2>

<div className="carousel-wrapper">

  {/* Left Arrow */}
  <button
    className="carousel-btn left"
    onClick={() => {
      document.querySelector(".custom-carousel").scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }}
  >
    ❮
  </button>

  
  <div className="custom-carousel">
    {artworks
      .slice(66, 82)           // 62–80
      .filter((_, idx) => idx !== 2)   // REMOVE INDEX 64
      .map((item) => (
        <div className="carousel-card" key={item.id}>
          <div className="carousel-img-wrapper">
            <img
              src={item.images?.web?.url || "https://via.placeholder.com/300"}
              alt={item.title}
            />
          </div>
          <p className="carousel-title"><b>Title:{item.title?.slice(0, 22)}</b></p>
                    <p className="carousel-title">Location:{item.current_location?.slice(0, 22)}</p>

        </div>
      ))}
  </div>

  {/* Right Arrow */}
  <button
    className="carousel-btn right"
    onClick={() => {
      document.querySelector(".custom-carousel").scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }}
  >
    ❯
  </button>

</div>

<div className="round-single-carousel container py-4">
  <div className="row justify-content-center gx-5 gy-4">

    {artworks.slice(84, 95).slice(0, 4).map((item) => (
      <div className="col-6 col-md-3 text-center" key={item.id}>
        
        <div className="circle-wrapper">
          <img
            src={item.images?.web?.url}
            alt={item.title}
            className="circle-img"
          />
        </div>

        <div className="circle-title">
          <b>Title:{item.title.slice(0, 18)}</b>
          <div>
                    <b>Location:{item.current_location.slice(0, 18)}</b>
</div>
        </div>

      </div>
    ))}

  </div>
</div>


</div>




  );
}

export default Artworks;
