import React from "react";
import { useForm } from "react-hook-form";
import { useStateValue } from "./StateProvider";
import "./Form.css";
import { db } from "./firebase";


//This is the Form component underneath the list after clicking the + box
function Form({listName}) {
  const [{ dataList, user }, dispatch] = useStateValue();
  const { register, handleSubmit } = useForm();
  const listRef = db.ref();
  

  const onSubmit = (data) => {
    const id = Date.now();
    data["id"] = id;
    data["user"] = user.email;
    data["completed"] = false;
    data["listName"] = {listName};

    listRef.child("Lists").child(id).set(data);

    window.location.reload(false);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Item: </label>
        <input
          className="itemForm__text"
          type="text"
          {...register("listItem")}
        />
        <br></br>
        <label>Priority: </label>
        <select {...register("listPriority")}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label className="itemForm__dueDate">Due Date: </label>
        <input type="date" {...register("listDueDate")} />

        <button className="form__button">Add</button>
      </form>
    </div>
  );
}

export default Form;
