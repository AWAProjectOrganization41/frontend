import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './RestaurantList.module.css'

export default function RestaurantList(props) {

  return (
    <div>
      <div>
      { props.restaurants.map(restaurant =>
        <Link to={ "/restaurants/" + restaurant.restaurant_id}>
          <div className={ styles.product }>
            <div><img className={ styles.image } src={`./images/${restaurant.imagepath}`} /></div><div className={ styles.header }>{restaurant.name}</div><div>{restaurant.address}</div><div>{restaurant.restaurant_id}</div></div>
        </Link>
      )}
      </div>

      <div className="restaurantInfo">
        INFO
        <Outlet />
        

      </div>
    </div>
  )
}
