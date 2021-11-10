import React from 'react'
import { useParams } from 'react-router-dom';

export default function RestaurantDetailView(props) {

  const result = useParams();

  const restaurant = props.restaurants.find(restaurant => restaurant.id === result.restaurantId);
  if(restaurant == null) {
    return <div>No matching restaurant</div>
  }

  return (
    <div>
      <table>
        <tr>
          <td>Company Name</td><td>{restaurant.companyName}</td>
        </tr>
        <tr>
          <td>Address</td><td>{restaurant.address}</td>
        </tr>
        <tr>
          <td>City</td><td>{restaurant.city}</td>
        </tr>
        <tr>
          <td>Rating</td><td>{restaurant.rating}</td>
        </tr>
      </table>

    </div>
  )
}
