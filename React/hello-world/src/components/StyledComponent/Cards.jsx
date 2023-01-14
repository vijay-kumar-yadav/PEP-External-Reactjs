import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const cards = [
    {
      title: "Feeney LLC",
      description: "Balanced next generation array",
      image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    },
    {
      title: "Hoeger LLC",
      description: "Seamless empowering toolset",
      image: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
    },

    {
      title: "Huel, Deckow and Funk",
      description: "Profound 24/7 emulation",
      image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
    },
    {
      title: "Kuhic - Thompson",
      description: "Synergized bifurcated paradigm",
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
    {
      title: "Molly",
      description: "Multi-channelled non-volatile framework",
      image: "https://react.semantic-ui.com/images/avatar/large/molly.png",
    },
  ];
  return (
    <div
      className={
        props.isDarkModeActive ? "cards-dark-container" : "cards-container"
      }
    >
      {cards.map((dat, index) => (
        <Card
          data={dat}
          key={index}
          isDarkModeActive={props.isDarkModeActive}
        />
      ))}
    </div>
  );
};

export default Cards;
