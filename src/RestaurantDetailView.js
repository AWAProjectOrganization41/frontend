import React from 'react'
import { useParams } from 'react-router-dom';

export default function RestaurantDetailView(props) {

  const result = useParams();

  const restaurant = props.restaurant.find(restaurants => restaurants.id === parseInt(result.restaurantId));
  if(restaurant == null) {
    console.log(result.restaurantId);
    return <div>No matching restaurant</div>
  }

  return (
    <div>
      <table>
      <tr>
          <td>ID</td><td>{restaurant.id}</td>
        </tr>
        <tr>
          <td>Company Name</td><td>{restaurant.name}</td>
        </tr>
        <tr>
          <td>Address</td><td>{restaurant.address}</td>
        </tr>
      </table>

    </div>
  )
}
