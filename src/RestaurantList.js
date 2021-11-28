import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RestaurantList(props) {
  return (
    <div className="restaurantListView">
      <div className="restaurantList">
      { props.restaurants.map(restaurants =>
        <Link to={ restaurants.id }>
          <div className="restaurantListElement">{restaurants.name}</div>
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
