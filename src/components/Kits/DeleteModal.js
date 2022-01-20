import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteBaker,deleteShipper} from '../../Redux/actions/actions'

function DeleteModal({showDel,setShowDel,name,id}){
    const dispatch = useDispatch()

    const deleteBomb = (id) => {
       if(name == "Baker"){
           dispatch(deleteBaker(id))
       }
       else{
           dispatch(deleteShipper(id))
       }
    }

    return(
        <div className={showDel==true? "modal fade show" : "modal fade"} id="defaultModal" tabIndex="-1" role="dialog" aria-labelledby="defaultModal" style={showDel ? {display:'block'}:{display:'none'}} aria-modal="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{setShowDel(false)}}>
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Woohoo, you're reading this text in a modal!
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>{deleteBomb(id)}}>DELETE</button>
                                        <button type="button" className="btn btn-success" onClick={()=>{setShowDel(false)}}>CANCEL</button>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default DeleteModal;