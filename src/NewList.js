import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { db, generateRandomString } from './firebase';
import './NewList.css'
import { useStateValue } from './StateProvider';


//This compoenet is a form for creating new lists.
function NewList() {
    const { register, handleSubmit } = useForm();
    const [{user}] = useStateValue();
    const navigate = useNavigate();
    const listRef = db.ref("ListName")
    

    const onSubmit = (data) => {
       
        const id = Date.now();
        data["id"] = id;
        data["user"] = user.email;
        data["url"] = generateRandomString;
        listRef.child(data.id).set(data);
        navigate('/');
        window.location.reload(false);
    }

  return (
    <div className = 'newList'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>New list name:</p>
            <input className = "newList__text" type = 'text' {...register("listName")}/>
            <button>Create</button>
        </form>
    </div>
  )
}

export default NewList