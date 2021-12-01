

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function RestaurantUI(){

return (
    <div>
        <h1> My restaurants </h1>
        
        <h1> Add a new restaurant </h1>
        <Link to="createrestaurant"><button> Create </button></Link>

        <h1> Other restaurants </h1>

    </div>
)

}

