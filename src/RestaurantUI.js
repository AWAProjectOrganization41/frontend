import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './RestaurantUi.module.css'

export default function RestaurantUI(){

    function setTime(){
        if (localStorage.getItem('status_time') !== null){
        if (status_time >= 1){
        localStorage.setItem('status_time', status_time-2)
        window.location.reload()}
        else {
            localStorage.removeItem(status_time)
        }}
    }

var restaurant_key = localStorage.getItem('restaurant_key')
console.log(JSON.parse(restaurant_key))

var status_time = localStorage.getItem('status_time')


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
      <Link to="/"><div style={{paddingRight:'50px'}}>Log Out</div></Link>
      {restaurant_key}
      <img style={{width:'100%'}} src={'/images/arrival.png'} />
      <div>
          STATUS TIME: {status_time}<div><button onClick={setTime}>SET STATUS TIME -10 MIN</button></div>
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