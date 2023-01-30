import React from "react";
import "./Card.css";
import { Icon } from "semantic-ui-react";

let fruitObjects = [
  {
    name: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
    price: 35,
  },
  {
    name: "Banana",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
    price: 12,
  },
  {
    name: "Grapes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
    weight: 0.1,
    price: 45,
  },
  {
    name: "Pineapple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
    price: 200,
  },
];
const Cards = () => {
  let renderedFruits = () =>
    fruitObjects.map((data, index) => (
      <div key={index} className="card-container">
        <div className="image-container">
          <div className="icon-container">
            <Icon className="heart"></Icon>
          </div>
          <img src={data.image} alt={data.name} />
        </div>
        <div className="detail-container">
          <div>{data.name}</div>
          <div>{data.price}</div>
        </div>
      </div>
    ));
  return <div className="cards-container">{renderedFruits()}</div>;
};

export default Cards;
