import './App.css';
import Home from './Home';
import LoginRestaurant from './LoginRestaurant'
import LoginConsumer from './LoginConsumer';
import RestaurantList from './RestaurantList'
import RestaurantDetailView from './RestaurantDetailView'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RestaurantData from './data.json';
import { v4 as uuidv4 } from 'uuid';
import React, {useState, useEffect} from 'react';

//hello

function App() {
  const [restauranties, setRestaurants] = useState(false);
  useEffect(() => {
    getRestaurant();
  }, []);
  function getRestaurant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setRestaurants(data);
      });
  }
  function createRestaurant() {
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
  }

  const restaurants = RestaurantData.map(restaurant => {
    return { ...restaurant, id: uuidv4() }
  })

  return (
    <BrowserRouter>
      <div>
      <div>
      {restauranties ? restauranties : 'There is no restaurant data available'}
      <br />
      <button onClick={createRestaurant}>Add restaurant</button>
      <br />
      <button onClick={deleteRestaurant}>Delete merchant</button>
    </div>
        <div className="topBar">
          <Link to="/"><div>Home</div></Link>
          <Link to="/restaurants"><div>SHOPPING CART</div></Link>
        </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/loginrestaurant" element={ <LoginRestaurant /> } />
          <Route path="/loginconsumer" element={ <LoginConsumer /> } />
          <Route path="/restaurants" element={ <RestaurantList restaurants={ restaurants }/> } >
            <Route path=":restaurantId" element={ <RestaurantDetailView restaurants={ restaurants } /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
