import React from 'react'
import { useParams } from 'react-router-dom';

export default function RestaurantDetailView(props) {

  const result = useParams();

  const restaurant = props.restaurant.find(restaurant => restaurant.restaurant_id === parseInt(result.restaurant_id));

  if(restaurant == null) {
    console.log(result.restaurant_id);
    return <div>No matchiestaurng restaurant</div>
  }

  return (

    <div>
          <div>
            ID{restaurant.restaurant_id} {restaurant.name} {restaurant.address}
          {restaurant.operating_hours} <img src={`./images/${restaurant.imagepath}`} /> {restaurant.restaurant_type} {restaurant.price_level}
          </div>

          <div>FOOD 1</div><div>FOOD 2</div><div>FOOD 3</div><div>FOOD 4</div><div>FOOD 5</div><div>FOOD 1</div><div>FOOD 1</div><div>FOOD 1</div>

      </div>

  
  )
}
