import React, { useState } from "react";
import "./List.css";
import ListItems from "./ListItems";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import Form from "./Form";
import { useStateValue } from "./StateProvider";
import { useDisplay, useDisplayToggle } from "./DisplayContext";


function List({ id, listName }) {
  //for sending the data to the datalayer
  const [{ dataList, user }, dispatch] = useStateValue();
  //hooks for displaying and hiding the form
  
  const [display, setDisplay] = useState(false);

  const isDisplayed = () => {setDisplay(!display)};
   

  
  return (
    <div className="list">
      {/* TODO
      Change list title */}
      <h2>{listName}</h2>

      {dataList
        .filter((item) => item.user == user.email)
        .filter((item) => item.listName.listName == listName)
        .sort((a, b) => b.listPriority - a.listPriority)
        .map((item) => (
          <ListItems
            item={item}
            id={item.id}
            listItem={item.listItem}
            priority={Number(item.listPriority)}
            dueDate={item.listDueDate}
          />
        ))}

      <div className="list__add">
        {display ? (
          <IndeterminateCheckBoxIcon
            onClick={isDisplayed}
            className="list__minusIcon"
          />
        ) : (
          <AddBoxIcon
            onClick={isDisplayed}
            className="list__addIcon"
          />
        )}
      </div>

      <div className="itemForm">
        {display ? <Form listName={listName} /> : null}
      </div>
    </div>
  );
}

export default List;
