import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Artists.css";

function Artists() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios
      .get("https://openaccess-api.clevelandart.org/api/artworks/?limit=80")
      .then((res) => setArtworks(res.data.data))
      .catch(() => alert("Error fetching artist data"));
  }, []);

  // Extract UNIQUE ARTISTS by name
  const uniqueArtists = [
    ...new Map(
      artworks
        .filter((a) => a.creators && a.creators.length > 0)
        .map((a) => [a.creators[0].description, a])
    ).values()
  ];

  return (
    <div className="container mt-5 pt-4 mb-5">
      <h2 className="artists-section-title">Featured Artists</h2>

      <div className="artists-grid">
        {uniqueArtists.slice(0, 20).map((item, index) => (
          <div className="artist-card" key={index}>
            {/* <div className="artist-img-wrap">
              <img
                src={item.images?.web?.url || "https://via.placeholder.com/400"}
                alt={item.creators?.[0]?.description}
              />
            </div> */}

            <div className="artist-info">
              <h3 className="artist-name">
                {item.creators?.[0]?.description || "Unknown Artist"}
              </h3>

              <p className="artist-art-title">
                {item.title?.slice(0, 50)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artists;
