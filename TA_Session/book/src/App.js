import React, { useState } from "react";
import Books from "./components/Books";
import Forms from "./components/Forms";

const App = () => {
  const [bookList, setBookList] = useState([]);
  const [key, setKey] = useState(0);
  const handleDelete = (id) => {
    setBookList(bookList.filter((data) => data.id !== id));
  };
  return (
    <>
      <Forms
        bookLists={bookList}
        setBookLists={setBookList}
        keys={key}
        setKeys={setKey}
      />
      {bookList.map((data, index) => (
        <Books
          bookLists={bookList}
          setBookLists={setBookList}
          datas={data}
          key={index}
          handleDeletes={(id) => handleDelete(id)}
        />
      ))}
    </>
  );
};

export default App;
