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


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'



function App() {

  const [restaurant, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);
  const [user, setUser] = useState([]);
  const [restt, setReslogin] = useState([]);


// Hakee ravintolat tietokannasta. Ravintolat tallentuu 'restaurant' objektiin. Siirretään tämä restaurantlistiin:
  useEffect(() => {
    getRestaurant();
  }, []);
  function getRestaurant() {
    fetch('http://localhost:3001/r') // if developing locally: 'http://localhost:3001/r'. If to heroku: '/r'
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log("mooi" + data)
      setRestaurants(JSON.parse(data));
    });
}


// vanha deleterestaurant, poistuu:
    
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


  return (
    <BrowserRouter>
        <div className="topBar">
          <Link to="/"><div style={{paddingRight:'50px'}}>Home</div></Link>
          <Link to="/restaurants"><div>RESTAURANTS</div></Link>
          <Link to="/restaurantui/createrestaurant/createmenu"><div>create menu</div></Link>
          <Link to="/testuserorderhistory"><div>______test user order history</div></Link>

        </div>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/loginrestaurant" element={ <LoginRestaurant restest = {restt} /> } />
          <Route path="/loginconsumer" element={ <LoginConsumer usertest = {user}/> } />
          <Route path="/restaurants" element={ <RestaurantList restaurants={ restaurant }/> } />
          <Route path="/restaurants/:restaurant_id/*" element={ <RestaurantDetailView restaurant={ restaurant } /> } />
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

