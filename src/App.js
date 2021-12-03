import './App.css';
import Home from './Home';
import LoginRestaurant from './LoginRestaurant'
import LoginConsumer from './LoginConsumer';
import RestaurantList from './RestaurantList'
import RestaurantDetailView from './RestaurantDetailView'
import RestaurantUI from './RestaurantUI';
import CreateRestaurant from './CreateRestaurant';
import CreateMenu from './CreateMenu';
import ShoppingCart from './ShoppingCart';


import Testmenu from './Testmenu';
import Testuserlogin from './Testuserlogin';
import Testrestaurantlogin from './Testrestaurantlogin';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'



function App() {

  const [restaurant, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);
  const [user, setUser] = useState([]);
  const [restt, setReslogin] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);
  function getRestaurant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(JSON.parse(data))
        setRestaurants(JSON.parse(data));
      });
  }

  useEffect(() => {
    getMenu();
  }, []);
  function getMenu() {
    fetch('http://localhost:3001/restaurant_menu')
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(JSON.parse(data));
      setMenu(JSON.parse(data))
    });
  }

  useEffect(() => {
    getUserLogin();
  }, []);
  function getUserLogin() {
    fetch('http://localhost:3001/user_login')
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(JSON.parse(data));
      setUser(JSON.parse(data))
    });
  }

  useEffect(() => {
    getRestaurantLogin();
  }, []);
  function getRestaurantLogin() {
    fetch('http://localhost:3001/restaurant_login')
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(JSON.parse(data));
      setReslogin(JSON.parse(data))
    });
  }



  /*function createRestaurant() {
      let name = prompt('Enter restaurant name');
      let address = prompt('Enter restaurant address');
      let operating_hours = prompt('Enter the operating hours');
      let imagePath = prompt('Enter the pictures imagePath');
      let restaurantType = prompt('Enter the restaurants type. Buffet, fast food, fast casual, casual dining or fine dining. ');
      let priceLevel = prompt('Enter the price level: €, €€, €€€, €€€€');

      fetch('http://localhost:3001/restaurant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, address, operating_hours, imagePath, restaurantType, priceLevel}),
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

  return (
    <BrowserRouter>
        
        <div className="topBar">
          <Link to="/"><div style={{paddingRight:'50px'}}>Home</div></Link>
          <Link to="/restaurants"><div>RESTAURANTS</div></Link>
        </div>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/loginrestaurant" element={ <LoginRestaurant /> } />
          <Route path="/loginconsumer" element={ <LoginConsumer /> } />
          <Route path="/restaurants" element={ <RestaurantList restaurants={ restaurant }/> } />
          <Route path="/restaurants/:restaurant_id/*" element={ <RestaurantDetailView restaurant={ restaurant } /> } />
          <Route path="/restaurantui" element = { <RestaurantUI /> } />
          <Route path="/restaurantui/createrestaurant" element = { <CreateRestaurant /> } />
          <Route path="/restaurantui/createrestaurant/createmenu" element = { <CreateMenu /> } />
          <Route path="/shoppingcart" element = { <ShoppingCart /> } />

          <Route path="/testmenu" element = { <Testmenu menutest= {menu} /> } />
          <Route path="/testuserlogin" element = { <Testuserlogin usertest = {user} /> } />
          <Route path="/testrestaurantlogin" element = { <Testrestaurantlogin restest = {restt} /> } />

        </Routes>


        <br/><br/><br/><br/><br/><br/>
        <button onClick={deleteRestaurant}>Delete restaurant</button><br/><br/>
        
        
      
    </BrowserRouter>
  );
/*<button onClick={createRestaurant}> add restaurant</button>*/

}


export default App;

