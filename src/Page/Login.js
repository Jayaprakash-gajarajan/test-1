import React from 'react'
import  {TextField} from "@mui/material";
import {Button} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from '../global';
// signup  page i am not created so i can insert the data in postman
// ADMIN can only see the delete button 
// ADMIN: username:"prakash"password:"prakash@123" roleId :"0"
// NORMAL USER: username:"sridhar"password:"sridhar@123" roleId :"1"
function Login() {
    const [formState,setFormState]=useState("success");
    const navigate=useNavigate();
    const {handleChange,values,handleSubmit}=useFormik({
        initialValues:{username:"prakash",password:"123"},
        onSubmit:async(values)=>{
            console.log(values);
         const data = await fetch(`${API}/login`,{
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
                <h2>Login</h2>
            <TextField 
            id="outlined-basic" 
            label="Username"
             variant="outlined"
             onChange={handleChange} 
             value={values.username}
             name="username"
             /> 

           <TextField id="outlined-basic"
            label="Password" 
            variant="outlined" 
            onChange={handleChange} 
            value={values.password}
            name="password"
            />   

            <Button  color={formState}
            type="submit" variant="contained">
                {formState ==="error"?"Retry":"Submit"}
                </Button>
            </form>
        </div>
  )
}

export default Login
