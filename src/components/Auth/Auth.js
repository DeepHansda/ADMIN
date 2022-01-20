import React, { useState, useEffect } from "react";
import {adminLogin,adminSignup} from '../../Redux/actions/actions'
import {useDispatch} from 'react-redux'
import { Route, Routes,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function Auth({setSideBar}) {
  const [role, setRole] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()


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
                            class="form-control"
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="Enter The Role"
                          />
                        </div>}

                        {isSignUp && <div class="form-group">
                          <label class="control-label">Email Id*</label>
                          <input
                            class="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter Email Address"
                          />
                        </div>}
                      </div>
                      {/* {isSignUp ? null : (<div style={{ textAlign: "center", width: "100%" }}>
                        OR
                      </div>)} */}
                      <div class="col-12">
                        <div class="form-group">
                          <label class="control-label">Phone Number*</label>
                          <input
                            class="form-control"
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Eenter Phone Number"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label class="control-label">Password*</label>
                          <input
                            class="form-control"
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                          />
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
                <div class="col-7 mx-auto ">
                  <img class="img-fluid" src="assets/img/bg/login.svg" alt="" />
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
