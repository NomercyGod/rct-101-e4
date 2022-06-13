import React, { useEffect } from "react";
import Product from './Product/Product'
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getproduct } from "../../store/product/product.actions";

const Products = () => {
  const {loading,error,data} = useSelector((state)=>state.getdata)
  console.log(loading,error,data)
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getproduct())
}, [])

  return <div>
    {/* {loading  && <div>loading...</div>} */}
    <h1>Products</h1>
    {/* here */}
<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }} >


{data.map((e) => (
          <Product key={e.id} {...e} />
        ))}
</div>
    </div>;

};

export default Products;
