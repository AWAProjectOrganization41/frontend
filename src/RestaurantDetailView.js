import React, { useState, useEffect } from 'react'

import styles from './RestaurantDetailView.module.css'
import {  Link, useParams } from 'react-router-dom'
import RestaurantList from './RestaurantList';
import OrderStatus from './OrderStatus.js'

let i = 0;
var SortedCart = {}
SortedCart.products = []
var cart_items = [];


export default function RestaurantDetailView(props, showContent) {


  // ravintolan menu tallentuu muuttujaarrayhyn 'menu'. Esim. 'menu.item_name' = tuotteen nimi
  const [menu, setMenu] = useState([]);
  const [all_restaurants, setRestaurants] = useState([])

  //const restaurantid = localStorage.getItem('restaurantdetailkey'+)

  var user_key = localStorage.getItem('user_key')
  console.log(JSON.parse(user_key))
  let key = JSON.parse(user_key)

// funktio hakkee menut. Tähän pitää lisätä id minkä mukaan hakee:
  

  useEffect(() => {
    getRestaurant();
    //getMenu();
    getMenuById();
  }, []);

  /*function getMenu() {
    fetch('http://localhost:3001/restaurant_menu') // http://localhost:3001/restaurant_menu jos lokaalisti, /restaurant_menu jos heroku
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(JSON.stringify(data));
      setMenu(JSON.parse(data))
    });
  }*/


  function getMenuById(){
    console.log(result.restaurant_id + "joooo");
const idarr = [{id: result.restaurant_id}]
    fetch('http://localhost:3001/restaurant_menu', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(idarr),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log("tata:"+JSON.parse(data))
      setMenu(JSON.parse(data))
    });
  }
  

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

// status joka määrittelee, näytetäänkö menu vai ostoskori. (myöhemmin shoppingcart omalle sivulle?)

    const [ViewStatus, setStatus] = useState('')
    
  // Händlää tuotteen lisäämisen listalle cart_items:

    const handleFoodClick = (menui) => {
      //cart_items[i] = SortedCart.products = menui
      
      console.log("HANDLEFOODCLICK")
      
      if(cart_items.includes(menui)){
        console.log("handling "+JSON.stringify(menui))
        console.log("Handling "+JSON.stringify(cart_items))
          setStatus('menu_view');
      }
  
        else{
          cart_items[i] = SortedCart.products = menui
          i++
        setStatus('shoppingcart');
    
    };}

    const handleDeleteFromCart = (item) => {    // Status: näytetään ostoskori
      console.log("HANDLEDELETE")
      console.log("poistetaan: "+JSON.stringify(item))
      let a = 0
      console.log("1"+cart_items)
      console.log("1"+JSON.stringify(cart_items))
      cart_items.forEach(function(message){
        //console.log(message)
        if (message === item){
          console.log("onsama"+JSON.stringify(message) + JSON.stringify(item))
          console.log("onsamaitem"+cart_items[a])
          console.log("byt poistuu index: "+JSON.stringify(cart_items[a]))
              cart_items.splice(cart_items.indexOf(a),1)
              console.log(cart_items)
              i = 0            
              setStatus('shoppingcart');             
            }
        else{
              a++}    
          }
        );
    }
      
  const result = useParams();
  const restaurant = all_restaurants.find(restaurant => restaurant.restaurant_id === parseInt(result.restaurant_id));
  if(restaurant == null) {
    console.log("terve" + result.restaurant_id);
    return <div>No matching restaurant</div>
  }

  const RestaurantView = ({ViewStatus}) => {

      return(
        <div>
        <div className={styles.header}><h1>Add food to shoppincart</h1></div>
        <div className={styles.commonView}>
            <div className={styles.menuView}>{ menu.map(menu => <div> 
            <div className={styles.product}><button className={styles.button} onClick={() => handleFoodClick(menu)}>
               <img className={styles.image} 
            src={`/images/${menu.imagepath}`}/> {menu.item_name}</button></div></div>)}</div> </div>
            
            
        <div className={styles.menuInfo}>
        <CartView food={cart_items} />
        </div>
        
       
          
        </div>
      )
    }

  const CartView = ({food}) => {
    setStatus('menu_view');
    if(food < 1 ){
      
      return(
        <div>
          <p> Cart is empty </p>
        </div>
      )}
      else{
      console.log("CARTVIEW")

      var summa = 0
      cart_items.map(money => summa = summa+parseFloat(money.price))
      console.log("tässä näkyy" + JSON.stringify(cart_items) + summa)
    
      localStorage.setItem('shoppincart', JSON.stringify(cart_items)+'...'+restaurant.name+'...'+restaurant.restaurant_id);
    return(<div className={styles.shoppingcartContainer}>
        <div className={styles.shoppingcart}> {cart_items.map(prodes =>
        <div className={styles.shoppingcartContainer}><img className={styles.menuImage} 
        src={`/images/${prodes.imagepath}`}/><div style={{}}> { prodes.item_name }<div>{ prodes.description }</div><div>{ prodes.price }</div></div> 
          <button style={{}} onClick={() => handleDeleteFromCart(prodes)}><div>DELETE</div></button></div>)}
          LOPPUSUMMA: {summa+"€"}<div>

            <Link to={"/payment/"}><button onClick = {ToPayment}  food = {cart_items} summa = {summa} style={{margin:'20px'}}>PAY</button></Link>
            <p>{console.log(cart_items + summa + "testii" + food)} </p>
            
          </div>
          </div>
          </div>
           
    )}}
    
    const ToPayment = ({food, summa}) => {
      return(
        console.log("mo" + food + summa)
      )
    }

// Näyttää ravintolan tiedot sivulla: <button onClick={() => handleDeleteFromCart(prodes)}>delete</button>


  if (user_key !== null){

  return (
    <div>
      <Link to="/"><div style={{paddingRight:'50px'}}>Log Out</div></Link>
    <OrderStatus/><div className={styles.restaurantInfo}><img className={styles.restaurantImage} src={`/images/${restaurant.imagepath}`} />
          ID{restaurant.restaurant_id} {restaurant.name} {restaurant.address}
          {restaurant.operating_hours} {restaurant.restaurant_type} {restaurant.price_level}</div>
        <div>
          <RestaurantView ViewStatus={ViewStatus}/>
        </div>
        </div>
  )
}
else{
  return (
    <div>You must sign in</div>
  )

}
}