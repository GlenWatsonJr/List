import React from "react";
import "./Welcome.css";

function Welcome() {
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
    </div>
  );
}

export default Welcome;
