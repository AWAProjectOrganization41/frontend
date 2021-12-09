

import React from 'react'
import { Link } from 'react-router-dom'

export default function RestaurantUI(){
var restaurant_key = localStorage.getItem('restaurant_key')
console.log(JSON.parse(restaurant_key))

return (
    <div>
        <h1> My restaurants </h1>
        {restaurant_key}
        <h1> Add a new restaurant </h1>
        <Link to="createrestaurant"><button> Create </button></Link>

 

    </div>
)

}
