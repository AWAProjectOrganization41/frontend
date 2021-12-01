import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './RestaurantList.module.css'

export default function RestaurantList(props) {

  return (
    <div className={ styles.restaurantList }>
      <div className={ styles.restaurantList }>
      { props.restaurants.map(restaurant =>
        <Link to={ "/restaurants/" + restaurant.restaurant_id}>
          <div className={ styles.product }>
            <div><img src={`./images/${restaurant.imagepath}`} /></div>{restaurant.name}<div>{restaurant.address}</div><div>{restaurant.restaurant_id}</div></div>
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
