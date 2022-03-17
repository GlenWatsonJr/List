import React from "react";
import "./ListItems.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import './ListComplete.css'

function ListComplete({ item, id, listItem}) {
  const [{ dataList }, dispatch] = useStateValue();

  const removeFromList = () => {
    const listRef = db.ref("Complete").child(item.id);
    listRef.remove();
  
    window.location.reload();
  };

  return (
    <div className="listComplete">
      <h4>
                 {listItem}
      </h4>
    <div>
          <DeleteForeverIcon
            className="listComplete__delete"
            onClick={removeFromList}
          />
          </div>
    </div>
  );
}

export default ListComplete;
