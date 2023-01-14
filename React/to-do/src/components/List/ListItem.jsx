export const ListItem = (props) => {
  return (
    <div className="list-text-container">
      {/* <div className="list-index-container">{props.index + 1}.</div> */}
      <div
        className={props.data.isCompleted ? "list-text-completed" : "list-text"}
        key={props.index}
      >
        {props.data.text}
      </div>
      <input
        type={"checkbox"}
        onClick={(event) => {
          props.completeItem(props.index, event.target.checked);
        }}
      />
      <span
        className="material-symbols-outlined"
        onClick={() => {
          props.delete(props.index);
        }}
      >
        delete
      </span>
    </div>
  );
};
