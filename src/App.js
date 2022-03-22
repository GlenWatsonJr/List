import "./App.css";
import Header from "./Header";
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import Body, { refresh } from "./Body";
import Menu from "./Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import NewList from "./NewList";
import Publish from "./Publish";



function App() {

  //custom hook on how to display values found in Reducer.js/StateProvider.js
  const [{dataList, lists, user}, dispatch] = useStateValue();


  useEffect(() => { 

    //references to the location of the items in the database
    const listRef = db.ref("Lists");
    const listNameRef = db.ref("ListName");
    const completeRef = db.ref("Complete")
   


    //loads the list items from database that are not complete
    listRef.on("value", (snapshot) => {
      const lists = snapshot.val();
      for (let element in lists) {
        dispatch({
          type: "ADD_TO_LIST",
          item: lists[element],
        });
      }
    });

      //loads the lists names from database
    listNameRef.on("value", (snapshot) => {
      const listNames = snapshot.val();
      for (let element in listNames) {
        dispatch({
          type: "CREATE_LIST",
          list: listNames[element],
        });
      }
    });

    //loads complete items from database
    completeRef.on("value", (snapshot) => {
      const completeItems = snapshot.val();
      for (let element in completeItems) {
        dispatch({
          type: "CREATE_COMPLETE_LIST",
          item: completeItems[element],
        });
      }
    });

    //authentication code for users
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
      {/* This divides the elements into paths */}
          <Route path="/login" element={<Login />}></Route> {/* Sign In page */}
          <Route path="/publish" element={<Publish/>}></Route>  {/* Publish page Not In Use ATM */}
          <Route path="/create" element={<Register />}></Route>  {/* Create new User Page */}
          <Route path="/new" element={[<Header />, <Menu />, <NewList />]}></Route>  {/* Create new List */}
          
          {/* <Route
            path="/user"
            element={[<Header />, <Menu />, <Body />]} 
          ></Route> logged In route */}

          <Route path="*" element={[<Header />, <Welcome />]}></Route>  {/* This divides the elements into paths */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
