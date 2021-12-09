import './App.css';
import Home from './Home';
import LoginRestaurant from './LoginRestaurant'
import LoginConsumer from './LoginConsumer';
import RestaurantList from './RestaurantList'
import RestaurantDetailView from './RestaurantDetailView'
import RestaurantUI from './RestaurantUI';
import CreateRestaurant from './CreateRestaurant';
import CreateMenu from './CreateMenu';
import TestUserOrderhistory from './TestUserOrderhistory';
import PaymentView from './PaymentView';
import OrderStatus from './OrderStatus';


import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react'


function App() {

// vanha deleterestaurant, poistuu:
    /*
function deleteRestaurant() {
  let id = prompt('Enter restaurant id');
  fetch(`http://localhost:3001/restaurant/${id}`, { // if developing locally: 'http://localhost:3001/restaurant/${id}'. If to heroku: '/restaurant/{$id}'
    method: 'DELETE',
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
      getRestaurant();
    });
}
*/


  return (
    <BrowserRouter>
        <div className="topBar">
          <Link to="/restaurants"><div style={{paddingRight:'50px'}}>RESTAURANTS</div></Link>
          <Link to="/restaurantui/createrestaurant/createmenu"><div style={{paddingRight:'50px'}}>create menu</div></Link>
          <Link to="/testuserorderhistory"><div style={{paddingRight:'50px'}}>order history</div></Link>
        </div>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/loginrestaurant" element={ <LoginRestaurant /> } />
          <Route path="/loginconsumer" element={ <LoginConsumer /> } />
          <Route path="/restaurants" element={ <RestaurantList /> } />
          <Route path="/restaurants/:restaurant_id/*" element={ <RestaurantDetailView restaurant={RestaurantDetailView}/> } />
          <Route path="/restaurantui" element = { <RestaurantUI /> } />
          <Route path="/restaurantui/createrestaurant" element = { <CreateRestaurant /> } />
          <Route path="/restaurantui/createrestaurant/createmenu" element = { <CreateMenu /> } />
          <Route path="/testuserorderhistory" element = { <TestUserOrderhistory /> } />
          <Route path="/payment" element = { <PaymentView /> } />

        </Routes>

        <br/><br/><br/><br/><br/><br/>
        
        
    </BrowserRouter>
  );

/*
<button onClick={deleteRestaurant}>Delete restaurant</button><br/><br/>
*/

}


export default App;

