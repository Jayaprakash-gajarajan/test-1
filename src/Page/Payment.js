import React from 'react'
import '../Page/Payment.css'
import { useNavigate,useState } from 'react-router-dom'
function Payment({count,setCount,price,setPrice,payment,setPayment,name,setName}) {
    const navigate=useNavigate();
  return (
    <div>
     <div className='payment-container'>
     <div className='name'> Client Name
        <p>{name}</p>
          </div>
        <div className='seats'>Seats
        <p>{count}</p>
        </div>
        <div className='amount'> TotalAmount
        <p>{price}</p>
          </div>
        <div className='amount'>Show Time
        <p>6.00(AM)</p>
        </div>
     </div>
     <button className='btn btn-primary mt-3 w-25'onClick={()=>
    {  
        setPayment(true)
        {payment==true?setName("0"):setName("0")}
       {payment==true?setCount(0):setCount(0)}
       {payment==true?setPrice(0):setPrice(0)}
      //  {payment== true? setSelectedColor1('#fff'):setSelectedColor1('#fff')}
        // navigate("/theater")
    }}>Click to Pay </button> 

    { payment==true?<h1 className='status'>😍🎉🎉🎊🎊 Tickent Booked successfully 🎊🎊🎉🎉😍</h1>:null}
    </div>
  )
}

export default Payment
