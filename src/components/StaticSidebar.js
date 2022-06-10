import "./StaticSidebar.css";
import uuid from "react-uuid";
import { useState } from "react";

function Sidebar(props) {
  // console.log(props.n);
  const [openbar, setOpenbar] = useState(false);
  const dp = [
    {
      id: 1,
      name: "Plumber",
      img: "images/1.jpg",
    },
    {
      id: 2,
      name: "Carpenter",
      img: "images/2.jpg",
    },
    {
      id: 3,
      name: "Labours",
      img: "images/3.jpg",
    },
    {
      id: 4,
      name: "CCTV installation",
      img: "images/9.jpg",
    },
    {
      id: 5,
      name: "Grocery",
      img: "images/5.jpg",
    },
    {
      id: 6,
      name: "Footwear",
      img: "images/6.jpg",
    },
    {
      id: 7,
      name: "Tution",
      img: "images/7.jpg",
    },
    {
      id: 8,
      name: "Chemist",
      img: "images/8.jpg",
    },
  ];
  // console.log(openbar);
  return (
    <div
      className={openbar || props.n ? "side dis side-hover" : "side"}
      onMouseEnter={() => setOpenbar(true)}
      onMouseLeave={() => setOpenbar(false)}
    >
      {dp.map((n) => (
        <div className="sec" key={uuid()}>
          <img src={n.img} alt="" className="round" />
          <p className={openbar || props.n ? "" : "hidden"}>{n.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;
