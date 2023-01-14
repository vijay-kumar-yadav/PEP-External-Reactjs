import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  width: 250px;
  background-color: ${(props) => (props.isDarkModeActive ? "#282c34" : "#fff")};
  border-radius: 5%;
`;

const ImageContainer = styled.div`
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
`;
const Title = styled.h1`
  padding: 2.5%;
  color: ${(props) => (!props.isDarkModeActive ? "#282c34" : "#fff")};
`;
const Description = styled.p`
  padding: 2.5%;
  color: ${(props) => (!props.isDarkModeActive ? "#282c34" : "#fff")};
`;

export const MyCard = { Container, Image, ImageContainer, Title, Description };
