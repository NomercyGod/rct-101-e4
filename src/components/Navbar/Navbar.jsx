import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { logoutuser } from "../../store/auth/auth.actions";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation()
// login logout funcnality 
const handleonclick = ()=>{
navigate('/login')
  // taska left here
  dispatch(logoutuser())
}

//  useselector 
const Count = useSelector((state) => state.cart.data.length);


// store cmand
const dispatch = useDispatch()
const {data, loading, error} = useSelector((state)=>state.Auth)





  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
      <div style={{margin:"20px"}}>
        
        <Link to={'/'} data-cy="navbar-home-link" >logo</Link>
        {/* TODO: Use Link instead of anchor tag. */}
        {/* <a data-cy="navbar-home-link" ></a> */}
      </div>
      <div style={{display:"flex"}}>
        <div data-cy="navbar-cart-items-count" style={{padding:"20px"}}>
          cart {Count}
        </div>
        <button style={{margin:"20px"}} data-cy="navbar-login-logout-button" onClick={handleonclick} >
         
         {data.isAuthenticated? "logout": 'login' }
         
        </button>
      </div>
    </div>
  );
};

export default Navbar;
