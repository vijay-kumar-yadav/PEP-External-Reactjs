import React from "react";
import { AnimalShow } from "./AnimalShow";
// import ProfileCard from "./ProfileCard";

function App() {
  //   const assistantList = [
  //     {
  //       title: "Alexa",
  //       handle: "@alexa99",
  //       img: "https://live.staticflickr.com/8425/7749078932_c476055cdf_w.jpg",
  //     },
  //     {
  //       title: "Cortona",
  //       handle: "@cortona92",
  //       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qg9dN3ZWYsS9R-DmBibKegwh_o17jH23cXmXUPggvz-Fr4XApyZaHSFzchTcJLJrQJA&usqp=CAU",
  //     },
  //     {
  //       title: "Google Assistant",
  //       handle: "@google23",
  //       img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GoogleAssistant_logo.max-1300x1300.jpg",
  //     },
  //   ];
  const handleClick = () => console.log("I am clicked!");
  return (
    // <div>
    //   <h1>Personal Digital Assistances</h1>
    //   {assistantList.map((assistant) => (
    //     <ProfileCard
    //       title={assistant.title}
    //       handle={assistant.handle}
    //       img={assistant.img}
    //     />
    //   ))}
    // </div>
    <div>
      <h1>Animals</h1>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
