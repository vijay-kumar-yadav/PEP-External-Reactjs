import { ListItem } from "./ListItem";

export const List = (props) => {
  const renderList = () => {
    // //1. using forEach
    // let data = [];
    // list.forEach((text, index) => {
    //   data.push(<div>{text}</div>);
    // });
    //   return data;
    //instead of foreach we use map as it require less code  and also returns which list it loop
    // // 2. Using map
    // return list.map((text, index) => (
    //   <div className="list-text-container">
    //     <div className="list-index-container">{index + 1}.</div>
    //     <div className="list-text" key={index}>
    //       {text}
    //     </div>
    //     <span
    //       className="material-symbols-outlined"
    //       onClick={() => {
    //         deleteFromList(index);
    //       }}
    //     >
    //       delete
    //     </span>
    //   </div>
    // ));
    //using components
    return props.list.map((text, index) => (
      <ListItem
        data={text}
        index={index}
        key={index}
        delete={deleteFromList}
        completeItem={completeItem}
      ></ListItem>
    ));
  };

  const completeItem = (currentIndex, value) => {
    props.setList(
      props.list.map((item, index) =>
        index === currentIndex ? { ...item, isCompleted: value } : { ...item }
      )
    );
  };

  const deleteFromList = (currentIndex) => {
    // //using splice
    // list.splice(currentIndex, 1);
    // console.log(list);
    // setList([...list]);
    //using filter
    props.setList(props.list.filter((text, index) => currentIndex !== index));
  };
  return (
    <>
      <div className="list-container">{renderList()}</div>
    </>
  );
};
