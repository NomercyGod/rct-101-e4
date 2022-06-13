import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux/es/exports";
import { useNavigate,useLocation } from "react-router-dom";
import { loginuser } from "../store/auth/auth.actions";

const Login = () => {
  // querry saves the entered email and passwords

  const [querry, setquerry] = useState({})
  const handlequerrychange =(e)=>{
  const {name,value} = e.target
setquerry({...querry, [name]:value })
  }
//  store call

const dispatch = useDispatch()
const {data,error,loading} = useSelector((state)=>state.Auth)

// login logout funcnality 
const navigate = useNavigate()
const location = useLocation()
// console.log(location)

const handleloginstart = (e)=>{
  e.preventDefault()
  dispatch(loginuser(querry))

  
}

useEffect(() => {
  if(data.isAuthenticated){
  if(location.state==undefined){
navigate('/')
  }else{
    navigate(location.state)
}
  // tasks is pending
  }
}, [data.isAuthenticated])


  return (
    <div>
      
      <form onSubmit={handleloginstart}>
        <input data-cy="login-email" name="email" onChange={handlequerrychange} placeholder="enter your email" />
        <br />
        <input data-cy="login-password" name="pass" onChange={handlequerrychange} placeholder=" enter your password" />
        <br />
        <button data-cy="login-submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
