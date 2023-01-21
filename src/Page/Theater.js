import React from 'react'
import '../Page/Theater.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Theater({count,setCount,price,setPrice,setPayment}) {
  // const [disabled,setDisabled]=useState(false)
  const navigate=useNavigate();
  const [show,setShow]=useState(true);
  const [show1,setShow1]=useState(true);
  const [show2,setShow2]=useState(true);
  const [show3,setShow3]=useState(true);
  const [show4,setShow4]=useState(true);
  const [show5,setShow5]=useState(true);
  const [show6,setShow6]=useState(true);
  const [show7,setShow7]=useState(true);
  const [show8,setShow8]=useState(true);
  const [show9,setShow9]=useState(true);
  const [show10,setShow10]=useState(true);
  const [show11,setShow11]=useState(true);
  const [show12,setShow12]=useState(true);
  const [show13,setShow13]=useState(true);
  const [show14,setShow14]=useState(true);

// const [availableColor,setAvailableColor]=useState("#44451");
const [selectedColor1,setSelectedColor1]=useState("#444451");
const [selectedColor2,setSelectedColor2]=useState("#444451");
const [selectedColor3,setSelectedColor3]=useState("#444451");
const [selectedColor4,setSelectedColor4]=useState("#444451");
const [selectedColor5,setSelectedColor5]=useState("#444451");
const [selectedColor6,setSelectedColor6]=useState("#444451");
const [selectedColor7,setSelectedColor7]=useState("#444451");
const [selectedColor8,setSelectedColor8]=useState("#444451");
const [selectedColor9,setSelectedColor9]=useState("#444451");
const [selectedColor10,setSelectedColor10]=useState("#444451");
const [selectedColor11,setSelectedColor11]=useState("#444451");
const [selectedColor12,setSelectedColor12]=useState("#444451");
const [selectedColor13,setSelectedColor13]=useState("#444451");
const [selectedColor14,setSelectedColor14]=useState("#444451");
const [selectedColor15,setSelectedColor15]=useState("#444451");

// const[soldColor,setSlodColor]=useState("#fff");
let styles = {
  background: selectedColor1,
};
let style1={
background:selectedColor2,
}
let style2={
  background:selectedColor3,
  }
  let style3={
    background:selectedColor4,
    }
    let style4={
      background:selectedColor5,
      }
      let style5={
        background:selectedColor6,
        }
        let style6={
          background:selectedColor7,
          }
          let style7={
            background:selectedColor8,
            }
            let style8={
              background:selectedColor9,
              }
              let style9={
                background:selectedColor10,
                }
                let style10={
                  background:selectedColor11,
                  }
                  let style11={
                    background:selectedColor12,
                    }
                    let style12={
                      background:selectedColor13,
                      }
                      let style13={
                        background:selectedColor14,
                        }
                        let style14={
                          background:selectedColor15,
                          }
// let [count,setCount]=useState(0);
// let [price,setPrice]=useState(0);  
  return (
    <div>
    <div className='bodys'>
      <div className='d-flex box'>
     <div className="movie-container">
      <label> Select a movie:</label>
      <select id="movie">
        <option value="220">Vikram (RS.120)</option>
        <option value="320">Jai Bheem (RS.130)</option>
        <option value="250">RRR (RS.140)</option>
        <option value="260">Iron man (RS.160)</option>
      </select>
    </div>
<div className='movie-container'>
<label> Select Show Time:</label>
      <select id="movie">
        <option value="220">6.00(AM)</option>
        <option value="320">10.00(AM)</option>
        <option value="250">2.00(PM)</option>
        <option value="260">6.00(PM)</option>
      </select>
</div>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 m-15 col-form-label">Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>
    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>Available</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat sold"></div>
        <small>Sold</small>
      </li>
    </ul>
    <div className="container">
      <div className="screen"></div>

      <div className="row" >
        <div className="seat" style={styles} onClick={()=>
        {
          // (setSelectedColor1("green"))
          // setCount(count+1)
          // setPrice(price+120)
          { show == true ? setCount(count + 1) : setCount(count - 1) }
          { show == true ? setPrice(price+120) : setPrice(price-120) }
          { show == true ? setSelectedColor1("green") : setSelectedColor1("#444451") }
              setShow(!show)
        }
        }></div>
        <div className="seat" style={style1} onClick={()=>{
          { show1 == true ? setCount(count + 1) : setCount(count - 1) }
          { show1 == true ? setPrice(price+120) : setPrice(price-120) }
          { show1 == true ? setSelectedColor2("green") : setSelectedColor2("#444451") }
              setShow1(!show1)
        }}></div>
        <div className="seat"style={style2} onClick={()=>{
          { show2 == true ? setCount(count + 1) : setCount(count - 1) }
          { show2 == true ? setPrice(price+120) : setPrice(price-120) }
          { show2 == true ? setSelectedColor3("green") : setSelectedColor3("#444451") }
              setShow2(!show2)
        }}></div>
        <div className="seat" style={style3} onClick={()=>
          {
            { show3 == true ? setCount(count + 1) : setCount(count - 1) }
            { show3 == true ? setPrice(price+120) : setPrice(price-120) }
            { show3 == true ? setSelectedColor4("green") : setSelectedColor4("#444451") }
                setShow3(!show3)
          }}
            ></div>
        <div className="seat"style={style4} onClick={()=>{
           { show4 == true ? setCount(count + 1) : setCount(count - 1) }
           { show4 == true ? setPrice(price+120) : setPrice(price-120) }
           { show4 == true ? setSelectedColor5("green") : setSelectedColor5("#444451") }
               setShow4(!show4)
        }}></div>
        <div className="seat" style={style5} onClick={()=>{
          { show5 == true ? setCount(count + 1) : setCount(count - 1) }
          { show5 == true ? setPrice(price+120) : setPrice(price-120) }
          { show5 == true ? setSelectedColor6("green") : setSelectedColor6("#444451") }
              setShow5(!show5)
        }}></div>
        <div className="seat"style={style6} onClick={()=>
          {
            { show6 == true ? setCount(count + 1) : setCount(count - 1) }
            { show6 == true ? setPrice(price+120) : setPrice(price-120) }
            { show6 == true ? setSelectedColor7("green") : setSelectedColor7("#444451") }
                setShow6(!show6)
        }}></div>
        <div className="seat"style={style7} onClick={()=>{
          { show7 == true ? setCount(count + 1) : setCount(count - 1) }
          { show7 == true ? setPrice(price+120) : setPrice(price-120) }
          { show7 == true ? setSelectedColor8("green") : setSelectedColor8("#444451") }
              setShow7(!show7)
        }}></div>
      </div>

      <div className="row">
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold" ></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
      </div>
      <div className="row">
        <div className="seat"style={style8} onClick={()=>{
           { show8 == true ? setCount(count + 1) : setCount(count - 1) }
           { show8 == true ? setPrice(price+120) : setPrice(price-120) }
           { show8 == true ? setSelectedColor9("green") : setSelectedColor9("#444451") }
               setShow8(!show8)
        }}></div>
        <div className="seat"style={style9} onClick={()=>{
           { show9 == true ? setCount(count + 1) : setCount(count - 1) }
           { show9 == true ? setPrice(price+120) : setPrice(price-120) }
           { show9 == true ? setSelectedColor10("green") : setSelectedColor10("#444451") }
               setShow9(!show9)
        }}></div>
        <div className="seat"style={style10} onClick={()=>{
           { show10 == true ? setCount(count + 1) : setCount(count - 1) }
           { show10 == true ? setPrice(price+120) : setPrice(price-120) }
           { show10 == true ? setSelectedColor11("green") : setSelectedColor11("#444451") }
               setShow10(!show10)
        }}></div>
        <div className="seat"style={style11} onClick={()=>{
          { show11 == true ? setCount(count + 1) : setCount(count - 1) }
          { show11 == true ? setPrice(price+120) : setPrice(price-120) }
          { show11 == true ? setSelectedColor12("green") : setSelectedColor12("#444451") }
              setShow11(!show11)
        }}></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
      </div>
      <div className="row">
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"style={style12} onClick={()=>{
         { show12 == true ? setCount(count + 1) : setCount(count - 1) }
         { show12 == true ? setPrice(price+120) : setPrice(price-120) }
         { show12 == true ? setSelectedColor13("green") : setSelectedColor13("#444451") }
             setShow12(!show12)
        }}></div>
        <div className="seat"style={style13} onClick={()=>
          {
            { show13 == true ? setCount(count + 1) : setCount(count - 1) }
            { show13 == true ? setPrice(price+120) : setPrice(price-120) }
            { show13 == true ? setSelectedColor14("green") : setSelectedColor14("#444451") }
                setShow13(!show13)
        }}></div>
      </div>
      <div className="row">
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
      </div>
      <div className="row">
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"style={style14} onClick={()=>{
           { show14 == true ? setCount(count + 1) : setCount(count - 1) }
           { show14 == true ? setPrice(price+120) : setPrice(price-120) }
           { show14 == true ? setSelectedColor15("green") : setSelectedColor15("#444451") }
               setShow14(!show14)              
         }}></div>
      </div>
    </div>
  <p className="text">You have selected <span id="count">{count}</span> seat for a price of RS.<span id="total">{price}</span></p>   
</div>
    <button className='btn btn-primary w-100' onClick={()=>{
      setPayment(false)
      (navigate('/pay'))}
    }
       >Proceed to pay </button> 
</div>
  )
}

export default Theater
