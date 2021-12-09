import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './RestaurantList.module.css'

// Listaa ravintolat sivulle

export default function RestaurantList(props) {

  // props.restaurants = ravintolat tallennettuina. Esim. 'props.restaurants.name' = ravintolan nimi

  var user_key = localStorage.getItem('user_key')
  console.log(JSON.parse(user_key))

  return (
    <div className={ styles.restaurantList }>
      {user_key}
      <img style={{width:'100%'}} src={'/images/arrival.png'} />
      <div>
      { props.restaurants.map(restaurant =>
        <Link to={ "/restaurants/" + restaurant.restaurant_id}>
          <div className={ styles.product }>
            <div><img className={ styles.image }src={`./images/${restaurant.imagepath}`} /></div><div className={ styles.header }>{restaurant.name}</div><div>{restaurant.address}</div><div>{restaurant.restaurant_id}</div></div>
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
