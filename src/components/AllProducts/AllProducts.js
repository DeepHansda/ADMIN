import React, { Component } from 'react'
import Product from '../Product/Product'

function AllProducts(){
    return(
        <div class="row" style={{padding:'20px',paddingLeft:'100px',width:'100%'}}>
                  <Product/>    
                  <Product/>    
                  <Product/>    
                  <Product/>    

        </div>
    )
}

export default AllProducts;