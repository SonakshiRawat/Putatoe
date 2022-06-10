import "./Facilities.css";
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
function Facilities() {
  const arr = [
    {
      id: 1,
      img: `images/BLOG-2-blue-png.png`,
      name: "Blogs",
    },
    {
      id: 2,
      img: "images/HOME-LOAN-blue-png .png",
      name: "Loan",
    },
    {
      id: 3,
      img: `images/MOBILE-Recharge-blue-png.png`,
      name: "Recharge",
    },
    {
      id: 4,
      img: `images/CONFESSION-blue-png.png`,
      name: "Confession",
    },
    {
      id: 5,
      img: `images/NEWS-blue-png.png`,
      name: "News",
    },
  ];
  return (
    <div className="sub-row">
      {arr.map((n) => (
        <div className="sub" key={uuid()}>
          <img src={n.img} className="facility" alt="unavailable" />

          <p className="p">{n.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Facilities;
