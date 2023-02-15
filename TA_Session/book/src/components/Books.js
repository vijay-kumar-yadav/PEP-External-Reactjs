import React from "react";

const Books = (props) => {
  return (
    <>
      <h1 contentEditable>{props.datas.name}</h1>
      <button onClick={() => props.handleDeletes(props.datas.id)}>
        delete
      </button>
    </>
  );
};

export default Books;
