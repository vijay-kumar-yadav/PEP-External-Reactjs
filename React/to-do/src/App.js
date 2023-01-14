import React, { useState } from "react";
import "./App.css";
import { List } from "./components/List/List";

const App = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const addToList = () => {
    // // 1. using concat
    // setList(list.concat(text));

    // // 2. using spread operator
    // setList([...list, text]);
    // 3. using array of objects
    if (text.length === 0) {
      return;
    }
    const check = list.filter((data) => data.text === text).length;
    // console.log(check);
    if (check === 1) {
      alert("already in list");
      return;
    }

    setList([
      ...list,
      {
        isCompleted: false,
        text: text,
      },
    ]);
  };
  const calculateTotalCompleted = () => {
    return list.filter((data) => data.isCompleted).length;
  };
  return (
    <div className="main-container">
      <div className="header">
        <h1>TO DO LIST</h1>
      </div>
      <div className="total-container">
        <h2>
          Total {calculateTotalCompleted()}/{list.length}
        </h2>
      </div>
      <div className="input-container">
        <input
          type={"text"}
          placeholder="Enter to-do"
          onChange={(event) => setText(event.target.value)}
          onKeyUp={(event) => {
            if (event.keyCode === 13) addToList(setText(event.target.value));
          }}
          value={text}
        ></input>
        <button onClick={addToList}>
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
      <List list={list} setList={setList}></List>
    </div>
  );
};

export default App;
