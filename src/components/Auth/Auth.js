import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {adminLogin,adminSignup} from '../../Redux/actions/actions'
import {useDispatch} from 'react-redux'
import { Route, Routes,useNavigate } from 'react-router-dom';
import img from '../../assets/img/264816-P5FDHW-384.png'
import Cookies from 'js-cookie';


function Auth({setSideBar}) {
  const [role, setRole] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();


const data = {
    role: role,
    email: email,
    mobileNumber : phone,
    password: password
}

const thenHandle = async ()=>{
  navigate('/')
  window.location.reload();
  setSideBar(true)
  localStorage.setItem('number' ,data.mobileNumber )
}
  const submitHandler = (e)=>{
    e.preventDefault()
    if(isSignUp==true){
        dispatch(adminSignup(data)).then(()=>{
          thenHandle()
        } )

    }
    else{
        dispatch(adminLogin(data)).then(()=>{
          thenHandle()
        })
        
    }
}


  return (
    <div class="app-contant">
      <div class="bg-white">
        <div class="container-fluid p-0">
          <div class="row no-gutters">
            <div class="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
              <div class="d-flex align-items-center h-100-vh">
                <div class="login p-50">
                  <h1 class="mb-2">{isSignUp ? "Add A Stuff" : "Hello Admin"}</h1>
                  <p>{isSignUp ? null : "Welcome back, please login to your account."}</p>
                  <form onSubmit={submitHandler}>
                    <div class="row">
                      <div class="col-12">
                        {isSignUp && <div class="form-group">
                          <label class="control-label">Enter Role*</label>
                          <input
                            {...register("userRole",{required: true})}
                            class="form-control"
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="Enter The Role"
                          />
                          {errors.userRole && <span style={{color:'red'}}>This field is required</span>}
                        </div>}

                        {isSignUp && <div class="form-group">
                          <label class="control-label">Email Id*</label>
                          <input
                            {...register("sEmail",{required: true})}
                            class="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter Email Address"
                          />
                          {errors.sEmail && <span style={{color:'red'}}>Please Enter Email Address</span>}
                        </div>}
                      </div>
                      {/* {isSignUp ? null : (<div style={{ textAlign: "center", width: "100%" }}>
                        OR
                      </div>)} */}
                      <div class="col-12">
                        <div class="form-group">
                          <label class="control-label">Phone Number*</label>
                          <input
                            // {...register("sNumber",{required: true,min:10})}
                            class="form-control"
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Eenter Phone Number"
                          />
                          {/* {errors.sNumber && <span style={{color:'red'}}>Please Enter 10 Digit Mobile Number</span>} */}

                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label class="control-label">Password*</label>
                          <input
                          // {...register("sPassword",{required:true,minLength:10})}
                            class="form-control"
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                          />
                          {/* {errors.sPassword && <span style={{color:'red'}}>Please Enter a Password Which Contain 8 Characters</span>} */}

                        </div>
                      </div>

                      <div class="col-12 mt-3">
                        <button
                        type="submit"
                          class="btn btn-primary text-uppercase"
                        >
                          {isSignUp ? "Add" : "Sign In"}
                        </button>
                      </div>
                    </div>
                    <div class="col-12  mt-3">
                      <p>
                        Want to add a Stuff to your company
                        <p onClick={()=>{setIsSignUp(!isSignUp)}} style={{cursor: "pointer" , color:'purple'}} > {isSignUp ?"Sign In" : "Add Stuff"}</p>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
              <div class="row align-items-center h-100">
                <div class="row h-10 ">
                  {/* <img style={{maxWidth:"100%",height:"100vh",objectFit:'cover'}} src={img} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
