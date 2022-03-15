import React from "react";
import "./ListItems.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function ListItems({ id, listItem, priority, dueDate }) {
  const [{dataList}, dispatch] = useStateValue();

  const removeFromList = () => {
    dispatch({
      type: 'REMOVE_FROM_LIST',
      id:id

    });
  }
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
          <DeleteForeverIcon className="listItem__delete" onClick={removeFromList}/>
        </div>
        <p>Id:<strong>{id}</strong></p>
      </small>
    </div>
  );
}

export default ListItems;
