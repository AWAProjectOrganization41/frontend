import React from 'react'
import { useParams } from 'react-router-dom';

export default function RestaurantDetailView(props) {

  const result = useParams();

  const restaurant = props.restaurant.find(restaurant => restaurant.restaurant_id === parseInt(result.restaurant_id));

  if(restaurant == null) {
<<<<<<< HEAD
    console.log(result.restaurant_id);
    return <div>No matchiestaurng restaurant</div>
=======
    console.log(result.rant_id);
    return <div>No matching restaurant</div>
>>>>>>> 55aff74ffec61eb2d51c2ac58659dbda4d2799cd
  }

  return (

    <div>
          <div>ID{restaurant.restaurant_id}</div>
          <div>Company Name{restaurant.name}</div>
          <div>Address{restaurant.address}</div>
          <div>operating hours{restaurant.operating_hours}</div>
          <div>Image{restaurant.imagepath}</div>
          <div>Type{restaurant.restaurant_type}</div>
          <div>Price level{restaurant.price_level}</div>
      </div>

  
  )
}
