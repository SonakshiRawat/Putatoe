import "./Topdeals.css";
import uuid from "react-uuid";
import React from "react";
function Topdeals() {
  const needs = [
    {
      id: 1,
      name: "Nut Crackers",
      tag: "Chips, Namkeen & Snacks",
      img: `images/nut-crackers-front-min.jpg`,
    },
    {
      id: 2,
      name: "Salted Peanuts",
      tag: "Chips, Namkeen & Snacks",
      img: `images/salted-peanut-front-min-400x561.jpg`,
    },
    {
      id: 3,
      name: "Punjabi Tadka",
      tag: "Chips, Namkeen & Snacks",
      img: `images/panjabi-tadka-font-min.jpg`,
    },
    {
      id: 4,
      name: "Litchi Juice",
      tag: "Refreshing drink",
      img: `images/litchi.jpg`,
    },
    {
      id: 5,
      name: "Kelloggs chocos",
      tag: "Food & nutrition",
      img: `images/kellogy.jpg`,
    },
    {
      id: 6,
      name: "Navratan",
      tag: "Chips, Namkeen & Snacks",
      img: `images/Foodex-Navratan-Mixture.jpg`,
    },
    {
      id: 7,
      name: "Bikaneri Bhujia",
      tag: "Chips, Namkeen & Snacks",
      img: `images/bikaner.jpg`,
    },
    {
      id: 9,
      name: "Wheat Flour",
      tag: "Food & nutrition",
      img: `images/flour.jpg`,
    },
    {
      id: 9,
      name: "Clove Leaf",
      tag: "Nutrition",
      img: `images/clove.jpg`,
    },
  ];

  const construct = [
    {
      id: 1,
      name: "Gangotri Building ",
      img: `images/c1.jpg`,
    },
    {
      id: 2,
      name: "Gorakhpur Interprises",
      img: `images/c2.jpg`,
    },
    {
      id: 3,
      name: "Suprabha Interiors",
      img: `images/c3.jpg`,
    },
    {
      id: 4,
      name: "Bridi Furnishing",
      img: `images/c4.jpg`,
    },
    {
      id: 5,
      name: "POP False ceiling",
      img: `images/c5.jpg`,
    },
    {
      id: 6,
      name: "GD constructions",
      img: `images/c6.jpg`,
    },
    {
      id: 7,
      name: "Apna Interior Design",
      img: `images/c3.jpg`,
    },
    {
      id: 8,
      name: "Testing",
      img: `images/c5.jpg`,
    },
  ];

  const service = [
    {
      id: 1,
      name: "House Maintenance & Item Repairing",
      service: "Plumber,Electrician, Electrical Shop",
      img: `images/p1.jpg`,
    },
    {
      id: 2,
      name: "Tour & Travels",
      service: "Cab Service",
      img: `images/p2.jpg`,
    },
    {
      id: 3,
      name: "Daily Needs",
      service: "Grocery,Dairy Products",
      img: `images/p3.jpg`,
    },
    {
      id: 4,
      name: "Dance and Music",
      service: "Dance Class",
      img: `images/p4.png`,
    },
    {
      id: 5,
      name: "Health",
      service: "Ambulance Service Chemist",
      img: `images/p5.png`,
    },
    {
      id: 6,
      name: "House Maintenance & Item Repairing",
      service: "Plumber,Electrician, Electrical Shop",
      img: `images/p6.png`,
    },
    {
      id: 7,
      name: "Educational & Coaching Centre",
      service: "Tution",
      img: `images/p7.jpg`,
    },
  ];

  function previous(event) {
    let element = event.target.parentElement.children[4];
    // console.log(element);
    let item = document.querySelectorAll(".list1 .sub");
    element.prepend(item[item.length - 1]);
    // console.log(item);
  }
  function next(event) {
    let element = event.target.parentElement.children[4];
    let item = document.querySelectorAll(".list1 .sub");
    element.append(item[0]);
  }

  function previous2(event) {
    let element = event.target.parentElement.children[4];
    let item = document.querySelectorAll(".list3 .sub");
    element.prepend(item[item.length - 1]);
  }
  function next2(event) {
    let element = event.target.parentElement.children[4];
    let item = document.querySelectorAll(".list3 .sub");
    element.append(item[0]);
  }

  return (
    <React.Fragment>
      <div className="bg">
        <i className="fa-solid fa-arrow-left arr" onClick={previous}></i>
        <i className="fa-solid fa-arrow-right arr" onClick={next}></i>
        <div className="head">Top Deals for daily needs</div>
        <hr />
        <div className="list1">
          {needs.map((n) => (
            <div className="sub" key={uuid()}>
              <img src={n.img} className="food" alt="unavailable" />

              <p>{n.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg">
        <i className="fa-solid fa-arrow-left arr" onClick={previous2}></i>
        <i className="fa-solid fa-arrow-right arr" onClick={next2}></i>

        <div className="head">BESTSELLERS FOR CONSTRUCTION</div>
        <hr />
        <div className="list3">
          {construct.map((n) => (
            <div className="sub" key={uuid()}>
              <img src={n.img} className="build" alt="unavailable" />

              <p>{n.name}</p>
              <div className="cons">Construction</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg2">
        <div className="head">SERVICES WE PROVIDE</div>
        <hr />
        <div className="list2">
          {service.map((n) => (
            <div className="sub2" key={uuid()}>
              <div className="left">
                <p>{n.name}</p>
                <div className="cons">{n.service}</div>
              </div>
              <img src={n.img} className="build2" alt="unavailable" />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Topdeals;
