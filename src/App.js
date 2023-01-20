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
// import SliderOne from './SliderOne';
function App() {
  let [count,setCount]=useState(0);
  let [price,setPrice]=useState(0);
  let [payment,setPayment]=useState(false);
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
    <Route path='/theater' element={<Theater count={count} setCount={setCount} price={price} setPrice={setPrice} payment={payment} />}/>
    <Route path='/pay' element={<Payment count={count}setCount={setCount} price={price}setPrice={setPrice} payment={payment} setPayment={setPayment}/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
