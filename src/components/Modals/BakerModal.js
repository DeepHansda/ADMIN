import React,{useState} from 'react';
import {addBaker,addShipper} from '../../Redux/actions/actions'
import {useDispatch , useSelector} from 'react-redux'

function BakerModal({setOpen,open,name}){
    const dispatch = useDispatch()
    const [fullName,setFullName] = useState([])
    const [phoneNumber,setPhoneNumber] = useState([])
    const [email,setEmail] = useState([])
    const [location,setLocation] = useState([])
    const [pin,setPin] = useState([])
    const [password,setPassword] = useState([])
    console.log(email)
    var data = {
        fullName: fullName,
        phone_number : phoneNumber,
        email: email,
        location: location,
        pin_code:pin,
        password: password
    }
    const submitHandler = (e) => {
        e.preventDefault()
       if(name == "Baker"){
           dispatch(addBaker(data))
       }
       else{
           dispatch(addShipper(data))
       }
    }

    return(
        <div className={open ? "modal fade show" : "modal fade"} id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" style={open ? {display:"block",background:'rgba(0, 0, 0, 0.37)'}: {display:'none',background:'rgba(0, 0, 0, 0.37'}}   aria-modal="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{name == "Baker" ? "Add Baker" : "Add Shipping Partner"}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>setOpen(false)}>
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <label for="modelname">Full Name</label>
                                                <input type="text" className="form-control" id="modelemail" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                                            </div>

                                            <div className="form-group">
                                                <label for="modelpass">Phone Number</label>
                                                <input type="number" className="form-control" id="modelpass" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                            </div>

                                            <div className="form-group">
                                                <label for="modelemail">Email</label>
                                                <input type="email" className="form-control" id="modelemail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            </div>

                                            <div className="form-group">
                                                <label for="modelemail">Location</label>
                                                <input type="text" className="form-control" id="modelemail" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                                            </div>

                                            <div className="form-group">
                                                <label for="modelemail">Pin Code</label>
                                                <input type="number" className="form-control" id="modelemail" value={pin} onChange={(e)=>setPin(e.target.value)}/>
                                            </div>

                                            <div className="form-group">
                                                <label for="modelemail">Password</label>
                                                <input type="text" className="form-control" id="modelemail" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            </div>

                                            
                                            
                                            <button type="submit" className="btn btn-primary">ADD</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default BakerModal;