import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {getAllUsers} from "../../Redux/actions/actions"


function TableRow() {
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getAllUsers());
},[])


const users = useSelector(state=>state.adminReducer)

  return (
    <tbody>
      {users.map((user)=>{
        return (
        <tr>
        <td>{user.time}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>

        <td>{user.address}</td>
      </tr>
        )

      })}
      
    </tbody>
  );
}

export default TableRow;
