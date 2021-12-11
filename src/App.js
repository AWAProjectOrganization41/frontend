import './App.css';
import Home from './Home';
import LoginRestaurant from './LoginRestaurant'
import LoginConsumer from './LoginConsumer';
import RestaurantList from './RestaurantList'
import RestaurantDetailView from './RestaurantDetailView'
import RestaurantUI from './RestaurantUI';
import CreateRestaurant from './CreateRestaurant';
import OrderHistory from './OrderHistory';
import PaymentView from './PaymentView';
import TopBar from './TopBar'

import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import CreateMenu from './CreateMenu';


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
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/loginrestaurant" element={ <LoginRestaurant /> } />
          <Route path="/loginconsumer" element={ <LoginConsumer /> } />
          <Route path="/restaurants" element={ <RestaurantList /> } />
          <Route path="/restaurants/:restaurant_id/*" element={ <RestaurantDetailView restaurant={RestaurantDetailView}/> } />
          <Route path="/Createmenu/:id*" element={ <CreateMenu rest_id={CreateMenu}/> } />
          <Route path="/restaurantui" element = { <RestaurantUI /> } />
          <Route path="/restaurantui/createrestaurant" element = { <CreateRestaurant /> } />
          <Route path="/orderhistory" element = { <OrderHistory /> } />
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

