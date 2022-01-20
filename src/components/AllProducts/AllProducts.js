import React, { useState,useEffect } from 'react'
import Product from '../Product/Product'
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/actions/actions";



function AllProducts(){
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProducts());
    }, []);

    const products = useSelector((state) => state.adminReducer);

    return(
        <div class="row" style={{padding:'20px',paddingLeft:'100px',width:'100%'}}>
                  {
                      products.map((product) =>{
                          return(
                        <Product product={product}/>
                          )
})}    
        </div>
    )
}

export default AllProducts;