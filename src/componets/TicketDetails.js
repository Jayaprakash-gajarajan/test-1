import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
function TicketDetails({movie,editButton}) {
  const navigate=useNavigate();
  const roleId=localStorage.getItem("roleId");
  return (
    <div>
       <div className="col card" style={{width:"18rem"}}>
  <img src={movie.poster} className="card-img-top"
   alt={movie.name}/>
  <div className="card-body">
    <h4 className='cart-tittle'>Movie :{movie.name}</h4>
    <h6>Certificate :{movie.certificate}</h6>
    <h4>Price :{movie.price}</h4>
    <p className="card-text">
        <button className='btn btn-primary mt-3 w-100'onClick={()=>(navigate('/login'))} >
          BOOk
        </button> 
       {editButton}
    </p>
  </div>
</div>
    </div>
  )
}

export default TicketDetails
