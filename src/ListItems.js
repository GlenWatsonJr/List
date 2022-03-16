import React from "react";
import "./ListItems.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function ListItems({ item, id, listItem, priority, dueDate }) {
  // const [{ dataList }, dispatch] = useStateValue();

  const removeFromList = () => {
    const listRef = db.ref("Lists").child(item.id);
    listRef.remove();
  
    window.location.reload();
  };
  return (
    <div className="listItems">
      <h4>
        <input type="checkbox" name="checkbox" />
        <label key={id} className="listItem__label">
          {listItem}
        </label>
      </h4>

      <small>
        <div className="listItem__listSmall">
          <p>Priority:</p>
          {Array(priority)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          <p className="listItem__dueDate">Due by: {dueDate}</p>
          <DeleteForeverIcon
            className="listItem__delete"
            onClick={removeFromList}
          />
        </div>
        <p>
          Id:<strong>{id}</strong>
        </p>
      </small>
    </div>
  );
}

export default ListItems;
