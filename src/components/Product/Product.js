import React, { useState, useEffect } from "react";
import slide from "../../assets/img/slide-1.jpg";
import { useSelector, useDispatch } from "react-redux";
import {updateCake} from "../../Redux/actions/actions"

function Product({product}) {

   
const dispatch = useDispatch()
  const [edit, setEdit] = useState(false);
  const [cakeName, setCakeName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [weight, setWeight] = useState(null);
  const [price, setPrice] = useState(null);


  var data = {
    cake_name: cakeName != null ? cakeName : product.cake_name,
    cake_description: desc != null ? desc : product.cake_description,
      weight: weight != null ? weight : product.weight,
      price:price != null ? price : product.price
  }



  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(updateCake(product._id,data))
}







  return (
    <div class="col-xxl-3 col-xl-4  col-sm-6">
      <div class="card card-statistics contact-contant">
        <img class="card-img-top" src={slide} alt="Card image cap" />
        <div class="card-body py-4">
          <div class="d-flex align-items-center"></div>
            <form onSubmit={submitHandler}>
          <div>
            <ul class="nav">
              <li class="nav-item">
                {edit ? (
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder={product.cake_name}
                    value={cakeName}
                    onChange={(e) => setCakeName(e.target.value)}
                  />
                ) : (
                  <h2>{product.cake_name}</h2>
                )}
              </li>
            </ul>
            <ul class="nav">
              <li class="nav-item">
                {edit ? (
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                    placeholder={product.price}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                ) : (
                  <h4>₹{product.price}</h4>
                )}
              </li>
            </ul>
            <ul class="nav">
              <li class="nav-item">
                {edit ? (
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder={product.weight}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                ) : (
                  <h5>{product.weight}</h5>
                )}
              </li>
            </ul>
            <ul class="nav">
              <li class="nav-item">
                {edit ? (
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                ) : (
                  <p>{product.cake_description}</p>
                )}
              </li>
            </ul>

            <ul class="nav">
              <li
                class="nav-item"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <p
                  class="btn btn-info"
                  style={{ padding: "10px" }}
                  onClick={() => setEdit(!edit)}
                >
                  {edit ? "Cancel" : "Edit Cake"}
                </p>
                {edit && (
                  <button class="btn btn-success" style={{ padding: "10px" }} type="submit">
                    Save
                  </button>
                )}
              </li>
            </ul>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
