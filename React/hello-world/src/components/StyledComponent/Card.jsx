import React from "react";
import { MyCard } from "./MyCard";

const Card = (props) => {
  // console.log(props);
  return (
    <MyCard.Container isDarkModeActive={props.isDarkModeActive}>
      <MyCard.ImageContainer>
        <MyCard.Image src={props.data.image}></MyCard.Image>
      </MyCard.ImageContainer>
      <MyCard.Title isDarkModeActive={props.isDarkModeActive}>
        {props.data.title}
      </MyCard.Title>
      <MyCard.Description isDarkModeActive={props.isDarkModeActive}>
        {props.data.description}
      </MyCard.Description>
    </MyCard.Container>
  );
};

export default Card;
