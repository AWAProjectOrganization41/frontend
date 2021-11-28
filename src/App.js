import './App.css';
import Home from './Home';
import LoginRestaurant from './LoginRestaurant'
import LoginConsumer from './LoginConsumer';
import RestaurantList from './RestaurantList'
import RestaurantDetailView from './RestaurantDetailView'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'

function App() {

// complicated new db code that should be in its own class

  const [restaurant, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);
  function getRestaurant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setRestaurants(JSON.parse(data));
      });
  }
  /*function createRestaurant() {
    let name = prompt('Enter restaurant name');
    let address = prompt('Enter restaurant address');
    fetch('http://localhost:3001/restaurant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, address}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getRestaurant();
      });
  }
  function deleteRestaurant() {
    let id = prompt('Enter restaurant id');
    fetch(`http://localhost:3001/restaurant/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getRestaurant();
      });
  }*/

  // complicated things end here

  return (
    <BrowserRouter>
      <div>
      
        <div className="topBar">
          <Link to="/"><div>Home</div></Link>
          <Link to="/restaurants"><div>SHOPPING CART</div></Link>
        </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/loginrestaurant" element={ <LoginRestaurant /> } />
          <Route path="/loginconsumer" element={ <LoginConsumer /> } />
          <Route path="/restaurants" element={ <RestaurantList restaurants={ restaurant }/> } >
            <Route path=":restaurantId" element={ <RestaurantDetailView restaurant={ restaurant } /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
