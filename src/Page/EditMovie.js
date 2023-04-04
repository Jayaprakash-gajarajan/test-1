import React from 'react'
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import * as yup from 'yup';
const movieValidationShema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(4),
    price: yup.number().required().min(0),
    summary: yup.string().required().max(200),
    certificate: yup.string().required().min(4),
  })
function EditMovie() {
    const { id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    fetch(`https://63edccda388920150dd323c9.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setDetails(mv));
  }, []);

   console.log(details)
  return (
    <div>
       {details ? <Update details={details} /> : "Loading..."}
    </div>
  )
}

export function Update({details}){
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: details.name,
        poster: details.poster,
        price: details.price,
        summary: details.summary,
        certificate: details.certificate,
        
      },
      validationSchema: movieValidationShema,
      onSubmit: (update) => {
         console.log("Form values:", update);
        updateUser(update);
      },
    });
  
  const navigate = useNavigate();
  
  const updateUser = (update)=>{
    fetch(`https://63edccda388920150dd323c9.mockapi.io/movies/${details.id}`,{
      method:"PUT",
      body:JSON.stringify(update),
      headers:{"Content-type":"application/json"},
    }).then(()=>navigate("/tickets"));
  };
    return(
        <form onSubmit={handleSubmit} className='add-movie-form'>
        <TextField
          label="name"
          variant='outlined'
          name="name"
          value={values.name}
          onChange={handleChange}onBlur={handleBlur}
        />
        {touched.name && errors.name ? errors.name : null}
        <TextField
          label="poster"
          variant='outlined'
          name="poster"
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.poster && errors.poster ? errors.poster : null}
  
        <TextField
          label="price"
          variant='outlined'
          name="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.price && errors.price ? errors.price : null}
  
        <TextField
          label="summary"
          variant='outlined'
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.summary && errors.summary ? errors.summary : null}
        <TextField
          label="certificate"
          variant='outlined'
          value={values.certificate}
          name="certificate"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.certificate && errors.certificate ? errors.certificate : null}
  
        <Button type="submit" variant='contained'onClick={updateUser}>Update Movie</Button>
      </form>
    )
}

export default EditMovie
