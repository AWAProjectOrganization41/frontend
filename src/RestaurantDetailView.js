import React from 'react'
import { useParams } from 'react-router-dom';

export default function RestaurantDetailView(props) {

  const result = useParams();

  const restaurant = props.restaurant.find(restaurant => restaurant.restaurant_id === parseInt(result.restaurant_id));

  if(restaurant == null) {
    console.log(result.rant_id);
    return <div>No matchiestaurng restaurant</div>
  }

  return (

    <div>
      <tr>
          <td>ID</td><td>{props.restaurant.restaurant_id}</td>
        </tr>
        <tr>
          <td>Company Name</td><td>{restaurant.name}</td>
        </tr>
        <tr>
          <td>Address</td><td>{restaurant.address}</td>
        </tr>
        <tr>
          <td>operating hours</td><td>{restaurant.operating_hours}</td>
        </tr>
        <tr>
          <td>Image</td><td>{restaurant.imagepath}</td>
        </tr>
        <tr>
          <td>Type</td><td>{restaurant.restaurant_type}</td>
        </tr>
        <tr>
          <td>Price level</td><td>{restaurant.price_level}</td>
        </tr>
      </div>

  
  )
}
