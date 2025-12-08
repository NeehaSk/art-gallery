// import { useEffect, useState } from "react";
// import axios from "axios";

// function Artworks() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://openaccess-api.clevelandart.org/api/artworks/?limit=80")
//       .then((res) => {
//         console.log("API Response:", res.data);

//         if (res.data && res.data.data) {
//           setData(res.data.data); // store all artworks
//         } else {
//           setErrorMessage("Unexpected API format");
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         setErrorMessage("Failed to fetch API");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading…</p>;
//   if (errorMessage) return <p>Error: {errorMessage}</p>;

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//         gap: "20px",
//       }}
//     >
//       {data.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             border: "1px solid #ddd",
//             padding: "15px",
//             borderRadius: "10px",
//             textAlign: "center",
//             background: "#fafafa",
//           }}
//         >
//           <h3>{item.title}</h3>

      
//           <img
//             src={
//               item.images?.web?.url ||
//               "https://via.placeholder.com/250?text=No+Image"
//             }
//             alt={item.title}
//             width="200"
//             style={{ borderRadius: "10px", marginTop: "10px" }}
//           />

//           <p style={{ marginTop: "10px" }}>
//             <b>Creator:</b> {item.creators?.[0]?.description || "Unknown"}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Artworks;
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Artworks() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://openaccess-api.clevelandart.org/api/artworks/?limit=50")
//       .then((res) => {
//         setData(res.data.data);
//       })
//       .catch(() => {
//         console.error("API failed");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h3 className="text-center mt-5">Loading...</h3>;

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Artworks Gallery</h2>

//       <div className="row">
//         {data.map((item) => (
//           <div className="col-md-4 mb-4" key={item.id}>
//             <div className="card h-100 shadow-sm">

//               <img
//                 src={
//                   item.images?.web?.url ||
//                   "https://via.placeholder.com/300?text=No+Image"
//                 }
//                 className="card-img-top"
//                 style={{ height: "250px", objectFit: "cover" }}
//               />

//               <div className="card-body">
//                 <h5 className="card-title">{item.title}</h5>
//                 <p className="card-text">
//                   <b>Creator:</b> {item.creators?.[0]?.description || "Unknown"}
//                 </p>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Artworks;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// function Artworks() {
// const [artworks, setArtworks] = useState([]);


// useEffect(() => {
// axios
// .get('https://openaccess-api.clevelandart.org/api/artworks/?limit=25')
// .then((res) => setArtworks(res.data.data))
// .catch(() => alert('Something went wrong fetching artworks'));
// }, []);


// return (
// <div className="container mt-5 pt-5">
// <h2 className="text-center fw-bold mb-4">Artworks</h2>
// <div className="row">
// {artworks.map((item) => (
// <div className="col-md-4 mb-4" key={item.id}>
// <div className="card shadow-sm">
// <img
// src={item.images?.web?.url || 'https://via.placeholder.com/300'}
// className="card-img-top"
// />
// <div className="card-body">
// <h5 className="card-title">{item.title}</h5>
// <p className="card-text">
// {item.creators?.[0]?.description || 'Unknown Artist'}
// </p>
// </div>
// </div>
// </div>
// ))}
// </div>
// </div>
// );
// }
// export default Artworks;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Artworks.css";

function Artworks() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios
      .get("https://openaccess-api.clevelandart.org/api/artworks/?limit=80")
      .then((res) => setArtworks(res.data.data))
      .catch(() => alert("Error fetching artworks"));
  }, []);

  return (
    <div className="container mt-5 pt-5 mb-5">

    
      <h2 className="section-title">Featured Artworks</h2>

      <div className="row">
        {artworks.slice(0, 27).map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card1">
              <img
                src={item.images?.web?.url}
                alt={item.title}
                className="card1-img"
              />
              <div className="card1-title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      
      <h2 className="section-title mt-5">Collections</h2>

      <div className="carousel-scroll">
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
      </div>

      <h2 className="section-title mt-5">Special Exhibitions</h2>

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
      </div>

    </div>
  );
}

export default Artworks;
