import React from "react";

const ProfileCard = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.title} height="100px" width="150px" />
      <h1>{props.title}</h1>
      <p>{props.handle}</p>
    </div>
  );
};

export default ProfileCard;
