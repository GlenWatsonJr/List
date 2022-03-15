import "./List.css";
import ListItems from "./ListItems";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import Form from "./Form";
import { useStateValue } from "./StateProvider";
import { useDisplay, useDisplayToggle } from "./DisplayContext";

function List() {
  //for sending the data to the datalayer
  const [{ dataList, user }, dispatch] = useStateValue();

 
  console.log(dataList);

  //hooks for displaying and hiding the form
  const display = useDisplay();
  const toggleDisplay = useDisplayToggle();

  return (
    <div className="list">
      {/* TODO
      Change list title */}
      <h2>To Do List</h2>
      

      {dataList.map((item) => (
      
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
            onClick={toggleDisplay}
            className="list__minusIcon"
          />
        ) : (
          <AddBoxIcon onClick={toggleDisplay} className="list__addIcon" />
        )}
      </div>

      <div className="itemForm">{display ? <Form /> : null}</div>
    </div>
  );
}

export default List;
