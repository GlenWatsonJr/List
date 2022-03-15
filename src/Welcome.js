import React from "react";
import { useStateValue } from "./StateProvider";
import "./Welcome.css";
import Menu from "./Menu";
import Body from "./Body";

function Welcome() {
  const [{user}, dispatch] = useStateValue();

  if (user) {
    return(
      <div>
        <Menu />
        <Body />
      </div>
    );

  }else{
  return (
    <div className="welcome">
      <div className="welcome__container">
        <h4>Join List Today</h4>
        <form action="./create">
        <input className="welcome__button"  type="submit" value="Create a new Account" />
        </form>
        
        <h4>Already have an account?</h4>
        <form action="./login">
        <input className="welcome__button" type="submit" value="Sign In" />
        </form>

      </div>
      <div className="welcome__example">
      <p>Test account: test1234@test.com password: 123456</p>
      </div>
    </div>
  );
  }
}

export default Welcome;
