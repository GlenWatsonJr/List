import React from "react";
import { useForm } from "react-hook-form";
import { useStateValue } from "./StateProvider";
import "./Form.css";

function Form() {
  const [{ dataList }, dispatch] = useStateValue();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch({
      type: "ADD_TO_LIST",
      item: data,
    });
    dispatch({
      type: "SORT_LIST",
    });
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
