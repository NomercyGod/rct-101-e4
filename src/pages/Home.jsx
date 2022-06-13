import React from "react";
import Products from '../components/Products/Products'
import { useSelector } from "react-redux/es/exports";
const Home = () => {
const {loading,error,data} =useSelector((state)=>state.Auth)

  return (
  <div>
    home
    {/* code here */}
    <Products />
    </div>)
};

export default Home;
