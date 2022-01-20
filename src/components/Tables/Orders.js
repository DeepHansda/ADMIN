import React, { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {updateOrder,getAllOrders} from '../../Redux/actions/actions'

function Orders(){
    const dispatch = useDispatch()
    const [assign,setAssign] = useState(false)
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])

    const orders = useSelector((state)=>state.adminReducer)
    return (
        <div class="row" style={{paddingLeft:'90px'}}>
                            <div class="col-12">
                                <div class="card card-statistics clients-contant">
                                    <div class="card-header">
                                        <div class="d-xxs-flex justify-content-between align-items-center">
                                            <div class="card-heading">
                                                <h1 class="card-title" >Orders</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body py-0 table-responsive">
                                        <table class="table clients-contant-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date of Order</th>
                                                    <th scope="col">Customer Name</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Product Weight</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Payment Method</th>
                                                    <th scope="col">Total Price</th>
                                                    <th scope="col">Cake Baker Assigned</th>
                                                    <th scope="col">Delivery Boy Assigned</th>



                                                    <th scope="col">Edit &amp; Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orders.map((order) =>{
                                                        return(
                                                    <tr key={order._id}>
                                                    <td>{order.createAt}</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <p class="font-weight-bold">deep</p>
                                                        </div>
                                                    </td>
                                                    <td>order</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <p class="font-weight-bold">{order.product_details.name}</p>
                                                        </div>
                                                    </td>
                                                    <td>{order.product_details.weight}</td>
                                                    <td>{order.product_details.cake_type}</td>
                                                    <td><a href="javascript:void(0)" class="dot"></a><span>{order.user_details.payment}</span></td>
                                                    <td>{order.product_details.price}</td>
                                                    <td>deeplink</td>
                                                    <td>partner</td>
                                                    <td>
                                                        <div class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></div>
                                                    </td>
                                                </tr>
                                                        )
                                                    })
                                                }
                                                
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}
export default Orders;