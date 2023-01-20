import React from 'react'
import { Button } from '@mui/material';
import { checkAuth ,logout} from '../Page/Movies'
import { useNavigate } from 'react-router-dom';
const ROLE_ID={
    ADMIN:"0",
    NORMAL_USER:"1",
  };
function MovieCart({movie,getApi}) {
  const navigate=useNavigate();
  const roleId=localStorage.getItem("roleId")
  const deleteMobile=() => {
    fetch(`http://localhost:4000/movies/${movie._id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          roleId:roleId,
        },
  
      })
        .then((data) => checkAuth(data))
        .then(() => getApi())
        .catch((err) => logout());
    };
  return (
    <div>
      <div className="col card" style={{width:"18rem"}}>
  <img src={movie.poster} className="card-img-top"
   alt={movie.name}/>
  <div className="card-body">
    <h5 className='cart-tittle'>{movie.name}</h5>
    <p>{movie.summary}</p>
    <p className="card-text">
        <button className='btn btn-primary mb-3 w-100 ' onClick={()=>(navigate('/theater'))}>
          BOOk
        </button>
        {roleId==0?
           (
           <Button
            color={"error"}
            onClick={()=>deleteMobile(movie._id)}
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
