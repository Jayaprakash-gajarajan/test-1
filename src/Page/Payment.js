import React from 'react'
import '../Page/Payment.css'
import { useNavigate,useState } from 'react-router-dom'
function Payment({count,setCount,price,setPrice,payment,setPayment,name,setName}) {
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
      if(payment==""){
        alert("please select the site");
      }
      else{
        var options={
          key:"rzp_test_BML8CQloOOhbVP",
          key_secret:"Gp5To3jisLKXIEI9WJFg02cL",
          payment:payment*100,
          currency:"INR",
          name:"STARTUP_PROJECTS",
          description:"testing purpose",
          handler:function(response){
            alert(response.razorpay_payment_id)
          },
          prefill:{
            name:"Jayaprakash",
            email:"jayaprakash58563@gmail.com",
            contact:"6754566778"
          },
          notes:{
            address:"Razorpay corporate office"
          },
          theme:{
            color:"#3399cc"
          }
        };
      }
      var pay=new window.Razorpay(options);
      pay.open();
    }

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
     <button className='btn btn-primary mt-3 w-25'onClick={handleSubmit
    
      //   setPayment(true)
      //   {payment==true?setName("0"):setName("0")}
      //  {payment==true?setCount(0):setCount(0)}
      //  {payment==true?setPrice(0):setPrice(0)}
    }>Click to Pay </button> 

    { payment==true?<h1 className='status'>😍🎉🎉🎊🎊 Tickent Booked successfully 🎊🎊🎉🎉😍</h1>:null}
    </div>
  )
}

export default Payment
