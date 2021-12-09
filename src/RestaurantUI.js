import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './RestaurantUi.module.css'

export default function RestaurantUI(){

var restaurant_key = localStorage.getItem('restaurant_key')
console.log(JSON.parse(restaurant_key))


  // props.restaurants = ravintolat tallennettuina. Esim. 'props.restaurants.name' = ravintolan nimi

  const [restaurant, setRestaurants] = useState([]);
  
// Hakee ravintolat tietokannasta. Ravintolat tallentuu 'restaurant' objektiin.

//muokkaus: only restaurants where id =?
useEffect(() => {
  getRestaurant();
}, []);
function getRestaurant() {
  fetch('http://localhost:3001/r') // if developing locally: 'http://localhost:3001/r'. If to heroku: '/r'
  .then(response => {
    return response.text();
  })
  .then(data => {
    console.log("mooi" + data)
    setRestaurants(JSON.parse(data));
  });
}


  if (restaurant_key !== null){

  return (
    <div className={ styles.restaurantList }>
      
      {restaurant_key}
      <img style={{width:'100%'}} src={'/images/arrival.png'} />
      <div>
      { restaurant.map(restaurant =>
        <Link to={ "/restaurantUi" }>
          <div className={ styles.product }>
            <div><img className={ styles.image }src={`./images/${restaurant.imagepath}`} /></div><div className={ styles.header }>{restaurant.name}</div><div>{restaurant.address}</div><div>{restaurant.restaurant_id}</div></div>
        </Link>
      )}
      </div>
      <Link to="createrestaurant"><button> Create </button></Link>
    </div>
  )}

  else {
    return(
    <div className="restaurantInfo">
        INFO
      </div>
      )
  }
}