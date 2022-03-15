import React from "react";
import "./Menu.css";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";

//TODO
//This is the menu for displaying lists and adding and deleteing lists
function Menu() {
  const [{user},dispatch] = useStateValue();
  const navigate = useNavigate();
  const handleSignOut = () => {
    if (user) {
      auth.signOut();
      navigate("/");
    }
  };
  return (
    <div className="menu">
      Menu
      <button onClick={handleSignOut}>Sign Out</button>
      <button>Create new list</button>
      <button>Publish List</button>
    </div>
  );
}

export default Menu;
