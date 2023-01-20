import React from 'react'
import '../Page/Payment.css'
import { useNavigate,useState } from 'react-router-dom'
function Payment({count,setCount,price,setPrice,payment,setPayment}) {
    const navigate=useNavigate();
  return (
    <div>
     <div className='payment-container'>
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
     <button className='btn btn-primary mt-3'onClick={()=>
    {  
        setPayment(true)
       {payment==true?setCount(0):setCount(0)}
       {payment==true?setPrice(0):setPrice(0)}
      //  {payment== true? setSelectedColor1('#fff'):setSelectedColor1('#fff')}
        // navigate("/theater")
    }}>Proceed to pay </button> 

    { payment==true?<h1 className='status'>😍🎉🎉🎊🎊 Tickent Booked successfully 🎊🎊🎉🎉😍</h1>:null}
    </div>
  )
}

export default Payment
