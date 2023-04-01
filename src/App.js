// the hacathondb nodejs file to start then only the movie data shown else " no Details"can show.
// because the data come form the atlas.
//the movie data not come from the redux it will check the token and roleId to access the movie page.
// this project simply apply protected route for the <Movie/> component 
// the real time application starting will show the login page. if you signup or login then only see the data.
//booking the seat is one time can be apply.because this application another time if you book the previous booked seats are not show in sold list.

import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom';
import Movies from './Page/Movies';
import Home from './Page/Home';
import TicketPrice from './Page/TicketPrice';
import Theater from './Page/Theater';
import Payment from './Page/Payment';
import { useState } from 'react';
import Login from './Page/Login';
import { ProdectedRoute } from './Page/Movies';
import AddMovie from './Page/AddMovie';
import Signin from './Signin';
// import SliderOne from './SliderOne';
function App() {
  let [count,setCount]=useState(0);
  let [price,setPrice]=useState(0);
  let [payment,setPayment]=useState(false);
  const [name ,setName]=useState("0");
  return (
    <div className="App">
     <Navigation/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    
    <Route path='/movies' element={
      <ProdectedRoute>
          <Movies/>
     </ProdectedRoute>
         }/>
    <Route path='/tickets' element={<TicketPrice/>}/>
    <Route path='/addmovie' element={<AddMovie/>}></Route>
    <Route path='/theater' element={<Theater count={count} setCount={setCount} price={price} setPrice={setPrice} setPayment={setPayment}name={name}setName={setName} />}/>
    <Route path='/pay' element={<Payment count={count}setCount={setCount} price={price}setPrice={setPrice} payment={payment} setPayment={setPayment}name={name} setName={setName}/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup'element={<Signin/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
