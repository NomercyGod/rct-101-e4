import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
   const {data, loading, error}  = useSelector((state)=>state.Auth)
   const location = useLocation()
  //  console.log(location)
if(data.isAuthenticated){
  return children;
}else{
  return <Navigate to='/login' state={location.pathname} />
}
};

export default RequiredAuth;
