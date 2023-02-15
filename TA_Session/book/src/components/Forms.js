import React, { useState } from "react";

const Forms = (Props) => {
  const [bookName, setBookName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookName === "") return;
    Props.setBookLists([
      ...Props.bookLists,
      { name: bookName, id: Props.keys },
    ]);
    let key = Props.keys + 1;
    Props.setKeys(key);
    setBookName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add A Books</label>
        <input
          type={"text"}
          value={bookName}
          onChange={(event) => {
            setBookName(event.target.value);
          }}
          placeholder="Book Title Here.."
        />
        <button type={"submit"}>Create</button>
      </form>
    </>
  );
};

export default Forms;
