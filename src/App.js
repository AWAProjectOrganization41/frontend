import './App.css';
import Home from './Home';
import LoginRestaurant from './LoginRestaurant'
import LoginConsumer from './LoginConsumer';
import RestaurantList from './RestaurantList'
import RestaurantDetailView from './RestaurantDetailView'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RestaurantData from './data.json';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const restaurants = RestaurantData.map(restaurant => {
    return { ...restaurant, id: uuidv4() }
  })

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
          <Route path="/restaurants" element={ <RestaurantList restaurants={ restaurants }/> } >
            <Route path=":restaurantId" element={ <RestaurantDetailView restaurants={ restaurants } /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
