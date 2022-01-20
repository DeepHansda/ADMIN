import React, { useState,useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getAllBakers } from '../../Redux/actions/actions'
import BakerModal from '../Modals/BakerModal'
import Fab from '../Kits/Fab'
import DeleteModal from '../Kits/DeleteModal'

function Bakers(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllBakers());
    },[])

const bakers = useSelector(state=>state.adminReducer)
const name = "Baker"
// const bakers = useSelector((state)=>state.)
const [open,setOpen] = useState(false)
const [showDel,setShowDel] = useState(false)
const [id,setId] = useState([])
const handleDel = (bool,id)=>{
    setShowDel(bool)
    setId(id)
}
console.log(showDel)
    return (
        <>
        <BakerModal name={name} setOpen={setOpen} open={open}/>
        <Fab name ={name} setOpen={setOpen}/>
        <DeleteModal name= {name} setShowDel={setShowDel} showDel={showDel} id={id}/>
        

        <div className="row" style={{paddingLeft:'90px'}}>
                            <div className="col-12">
                                <div className="card card-statistics clients-contant">
                                    <div className="card-header">
                                        <div className="d-xxs-flex justify-content-between align-items-center">
                                            <div className="card-heading">
                                                <h1 className="card-title" >Bakers</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body py-0 table-responsive">
                                        <table className="table clients-contant-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date Of Joining</th>
                                                    <th scope="col">Unique Code</th>
                                                    <th scope="col">Cake Baker Name</th>
                                                    <th scope="col">Contact Details</th>
                                                    <th scope="col">Email Address</th>
                                                    <th scope="col">Location Details</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {bakers.map((baker)=>{
                                                    return (
                                                    <tr key={baker._id}>
                                                    <td>{baker.date_of_joining}</td>
                                                    <td>{baker._id}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <p className="font-weight-bold">{baker.fullName}</p>
                                                        </div>
                                                    </td>
                                                    <td>{baker.phone_number}</td>
                                                    <td>{baker.email}</td>
                                                    <td>{baker.location}</td>


                                                    <td>
                                                        <p className="btn btn-icon btn-outline-danger btn-round" onClick={()=>{handleDel(true,baker._id)}}><i className="ti ti-close"></i></p>
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
export default Bakers;