import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


//Header component that displays logo and who is logged in.
function Header() {
  const[{user}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={require("./images/listlogo.png")}
          alt=""
        />
      </Link>
      
      
      <div className="header__user">
        <PersonIcon className="header__userIcon" />
        <h3>{user ? user?.email : 'Please Sign in'}</h3>
      </div>
      
      
    </div>
  );
}

export default Header;
