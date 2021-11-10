import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RestaurantList(props) {
  return (
    <div className="restaurantListView">
      <div className="restaurantList">
      { props.restaurants.map(restaurant =>
        <Link to={ restaurant.id }>
          <div className="restaurantListElement">{restaurant.companyName}</div>
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
