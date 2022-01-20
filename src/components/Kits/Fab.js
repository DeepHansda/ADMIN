import React from 'react';
import './fab.css'

function Fab({name,setOpen}){
    return (
    <div className="fab-container" onClick={()=>setOpen(true)}>
  <div className="fab fab-icon-holder">
  <i className='bx bx-plus' ></i>
  </div>
  <ul className="fab-options">
    <li>
      <span className="fab-label">{name == "Baker" ? "Add Baker" :  "Add a Shipping Partner"}</span>
    </li>
  </ul>
    </div>
    )
}

export default Fab;