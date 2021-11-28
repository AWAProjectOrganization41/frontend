import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RestaurantList(props) {

  // NEW MESSY CODE FOR RESTAURANT DB //

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

  // NEW MESSY CODE FOR RESTAURANT DB ENDS HERE //
  
  return (
    <div className="restaurantListView">
      <div className="restaurantList">
      { props.restaurants.map(restaurant =>
        <Link to={ restaurant.id }>
          <div className="restaurantListElement">{restaurant.companyName}</div>
        </Link>
      )}
      </div>
      <div className="restaurantInfo">
        INFO
        <Outlet />
      </div>

      // NEW MESSY CODE FOR RESTAURANT DB //

      <div>
      {restauranties ? restauranties : 'There is no restaurant data available'}
      <br />
      <button onClick={createRestaurant}>Add restaurant</button>
      <br />
      <button onClick={deleteRestaurant}>Delete restaurant</button>
    </div>

        // NEW MESSY CODE FOR RESTAURANT DB ENDS HERE //

    </div>
  )
}
