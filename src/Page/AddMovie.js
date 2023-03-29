import React from 'react'
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { API } from '../global';
const movieValidationShema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(4),
    rating: yup.number().required().min(0).max(10),
    summary: yup.string().required().max(20),
    trailer: yup.string().required().min(4),
  })
function AddMovie() {
    // const API="http://localhost:4000";
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieValidationShema,
      onSubmit: (newMovie) => {
        console.log("Form values:", newMovie);
        addMovie(newMovie);
      },
    });
  const navigate = useNavigate();
  const addMovie = (newMovie) => {
    //   const newMovie = {
    //     name: name,
    //     poster: poster,
    //     rating: rating,
    //     summary: summary,
    //     trailer: trailer,
    //   };
    fetch(`https://63edccda388920150dd323c9.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "content-type": "application/json" }
    }).then(() => navigate("/movies"))

    //   // setMovieList([...movieList, newMovie])
    //   // console.log(newMovie);
  };
  return (
    <div>
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
        label="rating"
        variant='outlined'
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.rating && errors.rating ? errors.rating : null}

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
        label="trailer"
        variant='outlined'
        value={values.trailer}
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.trailer && errors.trailer ? errors.trailer : null}

      <Button type="submit" variant='contained' onClick={addMovie}>Add Movie</Button>
    </form>
    </div>
  )
}

export default AddMovie
