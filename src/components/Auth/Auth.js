import React from 'react'

function Auth(){
    return(
        <div class="app-contant">
                <div class="bg-white">
                    <div class="container-fluid p-0">
                        <div class="row no-gutters">
                            <div class="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
                                <div class="d-flex align-items-center h-100-vh">
                                    <div class="login p-50">
                                        <h1 class="mb-2">Hello Admin</h1>
                                        <p>Welcome back, please login to your account.</p>
                                        <form >
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label class="control-label">Email Id*</label>
                                                        <input type="text" class="form-control" placeholder="Email Id"/>
                                                    </div>
                                                </div>
                                                <div style={{textAlign: 'center',width: '100%'}}>OR</div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label class="control-label">Phone Number*</label>
                                                        <input type="password" class="form-control" placeholder="Phone Number"/>
                                                    </div>
                                                </div>
                                               
                                                <div class="col-12 mt-3">
                                                    <a href="index.html" class="btn btn-primary text-uppercase">Sign In</a>
                                                </div>
                                        
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
                                <div class="row align-items-center h-100">
                                    <div class="col-7 mx-auto ">
                                        <img class="img-fluid" src="assets/img/bg/login.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Auth;