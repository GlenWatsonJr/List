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
import { db } from "./firebase";

//This divides the elements into paths
function App() {
  const [{ dataList }, dispatch] = useStateValue();

  useEffect(() => {
    const listRef = db.ref("Lists");
    listRef.on("value", (snapshot) => {
      const lists = snapshot.val();
      for (let element in lists) {
        dispatch({
          type: "ADD_TO_LIST",
          item: lists[element],
        });
      }
    });

    dispatch({
      type: "SORT_LIST"
    });

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create" element={<Register />}></Route>
          <Route
            path="/user"
            element={[<Header />, <Menu />, <Body />]}
          ></Route>
          <Route path="*" element={[<Header />, <Welcome />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
