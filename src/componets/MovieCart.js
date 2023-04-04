import React from 'react'
import { Button } from '@mui/material';
import { checkAuth ,logout} from '../Page/Movies'
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../global';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const ROLE_ID={
    ADMIN:"0",
    NORMAL_USER:"1",
  };
function MovieCart({movie,getApi}) {
  const navigate=useNavigate();
  const [apiData, setApiData] = useState([]);
  const id=localStorage.getItem("id")
  const roleId=localStorage.getItem("roleId")
  const callGetAPI = async () => {
    const resp = await axios.get("https://63edccda388920150dd323c9.mockapi.io/movies");
    setApiData(resp.data);
  }
 /* const deleteMobile=() => {
    fetch(`${API}/${movie.id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          roleId:roleId,
        },
  
      })
        .then((data) => checkAuth(data))
        .then(() => getApi())
        .catch((err) => logout());
    };*/
    const deleteMobile = async (id) => {
      await axios.delete("https://63edccda388920150dd323c9.mockapi.io/movies"+"/"+id)
      console.log(id);
      getApi();
    }
    useEffect(() => {
      callGetAPI();
    }, []);
  return (
    <div>
      <div className="col card" style={{width:"18rem"}}>
  <img src={movie.poster} className="card-img-top"
   alt={movie.name}/>
  <div className="card-body">
  <h4 className='cart-tittle'>Movie :{movie.name}</h4>
    <h6>Certificate :{movie.certificate}</h6>
    <h4>Price :{movie.price}</h4>
    <p>{movie.summary}</p>
    <p className="card-text">
      {roleId==1?
        <button className='btn btn-primary mb-3 w-100 ' onClick={()=>(navigate('/theater'))}>
          BOOk
        </button>:null}
        {roleId==0?
           (
           <Button
            color={"error"}
            onClick={()=>deleteMobile(movie.id)}
            style={{width:"100%"}}
            variant="contained"
                >
                Delete
            </Button>):null}
    </p>
  </div>
</div>
    </div>
  )
}

export default MovieCart
