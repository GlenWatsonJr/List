import React from "react";
import "./ListItems.css";

function ListItems({ id, listItem, priority, dueDate }) {
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
        </div>
      </small>
    </div>
  );
}

export default ListItems;
