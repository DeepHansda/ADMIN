import React, { useState,useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getAllShippers } from '../../Redux/actions/actions'
import Fab from '../Kits/Fab'
import BakerModal from '../Modals/BakerModal'
import DeleteModal from '../Kits/DeleteModal'



function Shipping_Partners(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllShippers());
    },[])

const shippers = useSelector(state=>state.adminReducer)
const [open,setOpen] = useState(false)
const [showDel,setShowDel] = useState(false)
const [id,setId] = useState([])
const handleDel = (bool,id)=>{
    setShowDel(bool)
    setId(id)
}

    return (
        <>
         <BakerModal  setOpen={setOpen} open={open}/>
        <Fab  setOpen={setOpen}/>
        <DeleteModal  setShowDel={setShowDel} showDel={showDel} id={id}/>

        <div class="row" style={{paddingLeft:'90px'}}>
                            <div class="col-12">
                                <div class="card card-statistics clients-contant">
                                    <div class="card-header">
                                        <div class="d-xxs-flex justify-content-between align-items-center">
                                            <div class="card-heading">
                                                <h1 class="card-title" >Shipping Partners</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body py-0 table-responsive">
                                        <table class="table clients-contant-table mb-0">
                                            <thead>
                                            <tr>
                                                    <th scope="col">Date Of Joining</th>
                                                    <th scope="col">Unique Code</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Contact Details</th>
                                                    <th scope="col">Email Address</th>
                                                    <th scope="col">Location Details</th>
                                                    <th scope="col">Pin Code</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {shippers.map((shipper)=>{
                                                    return (
                                                    <tr key={shipper._id}>
                                                    <td>{shipper.date_of_joining}</td>
                                                    <td>{shipper._id}</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <p class="font-weight-bold">{shipper.fullName}</p>
                                                        </div>
                                                    </td>
                                                    <td>{shipper.phone_number}</td>
                                                    <td>{shipper.email}</td>
                                                    <td>{shipper.location}</td>
                                                    <td>{shipper.pin_code}</td>


                                                    <td>
                                                        <p class="btn btn-icon btn-outline-danger btn-round" onClick={()=>{handleDel(true,shipper._id)}}><i class="ti ti-close"></i></p>
                                                    </td>
                                                </tr>

                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
    );
}
export default Shipping_Partners;