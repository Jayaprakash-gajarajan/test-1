import React from 'react'
import  {TextField} from "@mui/material";
import {Button} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from '../global';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { type } from '@testing-library/user-event/dist/type';
import {FaEye, FaEyeSlash} from 'react-icons/fa'
// import TextField from '@mui/material/TextField';
// signup  page i am not created so i can insert the data in postman
// ADMIN can only see the delete button 
// ADMIN: username:"prakash"password:"prakash@123" roleId :"0"
// NORMAL USER: username:"sridhar"password:"sridhar@123" roleId :"1"
function Login() {
    
const handleToggle=()=>{
  if(passwordType==="password"){
    setPasswordType("text");
    setPasswordIcon(<FaEye/>)
  }
  else{
    setPasswordType("password");
    setPasswordIcon(<FaEyeSlash/>)
  }
}
    const [passwordType,setPasswordType]=useState("password");
    const [passwordIcon,setPasswordIcon]=useState(<FaEyeSlash/>);
    const [formState,setFormState]=useState("success");
    const navigate=useNavigate();
    const {handleChange,values,handleSubmit}=useFormik({
        initialValues:{username:"",password:""},
        onSubmit:async(values)=>{
            console.log(values);
         const data = await fetch(API+"/"+"login",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(values),
            });
            if(data.status==401){
                console.log("error");
                setFormState("error")
            }
            else{
                const result= await data.json()
                console.log("success",result);
                localStorage.setItem("token",result.token)
                localStorage.setItem("roleId",result.roleId)
                navigate("/movies")
            }
          
        },
});
  return (
    <div>
       <form onSubmit={handleSubmit} className="login-form" >
                <h2 style={{marginTop:"20px"}}>LOGIN</h2>
            <TextField 
            id="outlined-basic" 
            label="Username"
             variant="outlined"
             onChange={handleChange} 
            //  value={values.username}
             name="username"
             
             /> 
       {/* <input id='outlined-basic'
       type='password'
        label="Password"
        variant="outlined"
         placeholder='Password'
         onChange={handleChange}
        //  value={values.username}
         name='password'
         /> */}
         
             <TextField 
             type={passwordType}
            id="outlined-basic" 
            label="Password"
             variant="outlined"
             onChange={handleChange} 
             name="password"
             /> 
            <span className="eye" onClick={handleToggle}>{passwordIcon}</span>
           
            <Button  color={formState}
            type="submit" variant="contained">
                {formState ==="error"?"RETRY":"LOGIN"}
                </Button>
            </form>
            <Button onClick={()=>logout()}>logout</Button>
        </div>
  )
}
function logout() {
  localStorage.removeItem("token")
  window.location.href = "/";

}

export default Login
