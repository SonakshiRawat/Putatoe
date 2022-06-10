import { useState } from "react";
import "./Nav.css";
function Nav(props) {
  const [ham, setHam] = useState(true);

  function openSide() {
    props.func(ham);
    setHam(!ham);
  }
  return (
    <div className="nav">
      <div className="logo">PUTATOE</div>
      <div className="out_search">
        <input
          type="text"
          placeholder="Search for products and brands"
          className="search"
        />
        <i className="fa-solid fa-magnifying-glass  serc"></i>
      </div>
      <div className="right">
        <span className="ham">
          <i className="fa-solid fa-bell "></i>
          <i className="fa-solid fa-cart-shopping "></i>
        </span>
        <span>
          <i className="fa-solid fa-bars  " onClick={openSide}></i>
        </span>
      </div>
    </div>
  );
}

export default Nav;
