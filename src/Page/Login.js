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
// import TextField from '@mui/material/TextField';
// signup  page i am not created so i can insert the data in postman
// ADMIN can only see the delete button 
// ADMIN: username:"prakash"password:"prakash@123" roleId :"0"
// NORMAL USER: username:"sridhar"password:"sridhar@123" roleId :"1"
function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    //   event.preventDefault();
    // };

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
                <h2>LOGIN</h2>
            <TextField 
            id="outlined-basic" 
            label="Username"
             variant="outlined"
             onChange={handleChange} 
             value={values.username}
             name="username" 
             /> 
        
              <FormControl sx={{ m: 0, width: '46ch',fontSize:'15px' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password"
         
          name="password" 
          >Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            onChange={handleChange}
            type={showPassword ?"text":"password"}
            endAdornment={
              <InputAdornment position="end"
              value={values.password}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        
            <Button  color={formState}
            type="submit" variant="contained">
                {formState ==="error"?"RETRY":"LOGIN"}
                </Button>
            </form>
        </div>
  )
}

export default Login
