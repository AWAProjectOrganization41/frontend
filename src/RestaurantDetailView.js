import React from 'react'
import { useParams } from 'react-router-dom';

export default function RestaurantDetailView(props) {

  const result = useParams();

  const restaurant = props.restaurants.find(restaurant => props.restaurants.id === 12);
  if(restaurant == null) {
    return <div>No matching restaurant</div>
  }

  return (
    <div>
      <table>
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
