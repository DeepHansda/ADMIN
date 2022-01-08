import React from "react";
import slide from '../../assets/img/slide-1.jpg'


function Product() {
    return (
    <div class="col-xxl-3 col-xl-4  col-sm-6">
                                <div class="card card-statistics contact-contant">
                                        <img class="card-img-top" src={slide} alt="Card image cap"/>
                                    <div class="card-body py-4">
                                        <div class="d-flex align-items-center">
                                        </div>
                                        <div>
                                        <ul class="nav">
                                               
                                               <li class="nav-item">
                                                   <h4>021-843-8478</h4>
                                               </li>
                                           </ul>
                                            <ul class="nav">
                                               
                                                <li class="nav-item">
                                                    <p>021-843-8478</p>
                                                </li>
                                            </ul>
                                            <ul class="nav">
                                                
                                                <li class="nav-item">
                                                    <p>40-1440-8546</p>
                                                </li>
                                            </ul>
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <p>Lizzy.Halfman@gmail.com</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
}

export default Product;