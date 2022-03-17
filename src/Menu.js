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
  const newList =() => {
    navigate("/new");
  };
  return (
    <div className="menu">
      <h3>Menu</h3>
      <button onClick={newList}>Create new list</button>
      {/* <button>Publish List</button> */}
      <hr />
      <button className='menu__signout' onClick={handleSignOut}>Sign Out</button>
      
    </div>
  );
}

export default Menu;
