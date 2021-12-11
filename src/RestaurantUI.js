import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './RestaurantUi.module.css'
import TopBar from './TopBar';
import CreateMenu from './CreateMenu'

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

let [status, setStatus] = useState('rest')

var status_time = localStorage.getItem('status_time')

let rest_id


  // props.restaurants = ravintolat tallennettuina. Esim. 'props.restaurants.name' = ravintolan nimi

  const [restaurant, setRestaurants] = useState([]);
  
// Hakee ravintolat tietokannasta. Ravintolat tallentuu 'restaurant' objektiin.

//muokkaus: only restaurants where id =?

const restaurants_by_id = [{id: JSON.parse(restaurant_key)[0].restaurant_id}]

useEffect(() => {
  getRestaurantsById();
}, []);
function getRestaurantsById(){
    fetch('/myrestaurants', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurants_by_id),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log("tata:"+JSON.parse(data))
      setRestaurants(JSON.parse(data))
    });
  }

  function handleEditMenu(id){
    rest_id = id
    console.log(rest_id)
    setStatus('menu')
  }
  

  if (restaurant_key !== null){

    if (status !== 'menu'){

  return (
    <div className={ styles.restaurantList }>
    <div className="topBar">
      <TopBar/>
    </div>
      <Link to="/"><div style={{paddingRight:'50px'}}>Log Out</div></Link>
      {restaurant_key}
      <img style={{width:'100%'}} src={'/images/arrival.png'} />
      <div>
          STATUS TIME: {status_time}<div><button onClick={setTime}>SET STATUS TIME -10 MIN</button></div>
      { restaurant.map(restaurant =>
          <div className={ styles.product }>
            <div><img className={ styles.image }src={`./images/${restaurant.imagepath}`} /></div>
            <div className={ styles.header }>{restaurant.name}</div>
            <div>{restaurant.address}</div><div>{restaurant.restaurant_id}<Link to={ "/createmenu/"+restaurant.restaurant_id }> <button className={styles.button}onClick={() => handleEditMenu(restaurant.restaurant_id)}></button></Link></div></div>
      )}
      </div>
      <Link to="createrestaurant"><button> Create </button></Link>
    </div>
  )}
else {
  return(
  <CreateMenu rest_id = {rest_id}/>
  )
}
}

  else {
    return(
    <div className="restaurantInfo">
        INFO
      </div>
      )
  }
}