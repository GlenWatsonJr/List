import React from "react";
import "./Body.css";
import List from "./List";
import { DisplayProvider } from "./DisplayContext";

//This is where the lists are displayed.
function Body() {
  return (
    <div className="body">
      <div className="body__container">
        <div class="body__list">
        <DisplayProvider>
          <List />
          </DisplayProvider>
        </div>
      </div>
    </div>
  );
}

export default Body;
