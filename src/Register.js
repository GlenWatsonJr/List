import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { auth } from './firebase';
import "./Register.css";

function Register() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
      e.preventDefault();
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch(error => alert(error.message)) 
      
    };
  return (
    <div className='register'>
        <Link to='/'>
        <img
          className="register__logo"
          src={require("./images/listlogo.png")}
          alt=""
        />
        </Link>

        <div className='register__container'>
            <h1>Register</h1>
           <form>
               <h5>Email</h5>
               <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

               <h5>Password</h5>
               <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

               <button type = 'submit' onClick={register} className='register__signinButton'>Register</button>
           </form>
        </div>

    </div>
  )
}

export default Register