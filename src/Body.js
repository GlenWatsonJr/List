import React from "react";
import "./Body.css";
import List from "./List";
import { DisplayProvider } from "./DisplayContext";
import { useStateValue } from "./StateProvider";


//This is the component that holds the list component which are displayed when Logged In.
function Body() {
  const [{ lists, user }] = useStateValue();
  

  return (
    <div className="body">
      <div className="body__container">
        <div class="body__list">
        <DisplayProvider>
        {lists
        .filter((list) => list.user == user.email)
        .map((list) => (
          <List
            id={list.id}
            listName={list.listName}
          />
        ))}
          </DisplayProvider>
        </div>
      </div>
    </div>
  );
}

export default Body;
