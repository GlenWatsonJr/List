import React, { useEffect, useState } from "react";
import "./List.css";
import ListItems from "./ListItems";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Form from "./Form";
import { useStateValue } from "./StateProvider";
import ListComplete from "./ListComplete";
import { db } from "./firebase";



function List({ id, listName }) {
  //for sending the data to the datalayer
  const [{ dataList, user, completeList }, dispatch] = useStateValue();
  //hooks for displaying and hiding the form
  console.log(completeList);
  
  const [display, setDisplay] = useState(false);
  const isDisplayed = () => {setDisplay(!display)};

  const listRef = db.ref("ListName").child(id);

  const removeList = () => {
    listRef.remove();
  
    window.location.reload();
  }
 
  
  return (
    <div className="list">
      {/* TODO
      Change list title */}
      <h2>{listName} <snall><CancelPresentationIcon className='list__cancel'onClick={removeList}/></snall></h2>
     

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
            completed={item.completed}
            user={item.user}
            listName={item.listName.listName}
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
        <div className='list__completed'>
      <h3>Completed</h3>
      {completeList
        .filter((item) => item.user == user.email)
        .filter((item) => item.listName == listName)
        .sort((a, b) => b.listPriority - a.listPriority)
        .map((item) => (
          <ListComplete
          item={item}
            id={item.id}
            listItem={item.listItem}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
