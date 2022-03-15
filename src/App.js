import "./App.css";
import Header from "./Header";
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import Body from "./Body";
import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

//This divides the elements into paths
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() =>{

    auth.onAuthStateChanged(authUser => {
      console.log(`The USER is >>> `, authUser);

      if (authUser) {
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create" element={<Register />}></Route>
          <Route path="/user" element={[<Header />, <Menu />, <Body />]}></Route>
          <Route path="*"  element={[<Header />,<Welcome />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;