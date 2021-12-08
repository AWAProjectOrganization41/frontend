import React, { useState, useEffect } from 'react'

import styles from './RestaurantDetailView.module.css'
import {  Link, useParams } from 'react-router-dom'
import PaymentView from './PaymentView';

let i = 0;
var SortedCart = {}
SortedCart.products = []
var cart_items = [];
let adding = 0;
let prod
var checkWord = "";

export default function RestaurantDetailView(props, showContent) {

  // ravintolan menu tallentuu muuttujaarrayhyn 'menu'. Esim. 'menu.item_name' = tuotteen nimi

  const [menu, setMenu] = useState([]);

// funktio hakkee menut. Tähän pitää lisätä id minkä mukaan hakee:

  useEffect(() => {
    getMenu();
  }, []);
  function getMenu() {
    fetch('http://localhost:3001/restaurant_menu') // http://localhost:3001/restaurant_menu jos lokaalisti, /restaurant_menu jos heroku
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(JSON.stringify(data));
      setMenu(JSON.parse(data))
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
  const restaurant = props.restaurant.find(restaurant => restaurant.restaurant_id === parseInt(result.restaurant_id));
  if(restaurant == null) {
    console.log(result.restaurant_id);
    return <div>No matchiestaurng restaurant</div>
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
      console.log("tässä näkyy" + cart_items + summa)
    
    
    return(<div className={styles.shoppingcartContainer}>
        <div className={styles.shoppingcart}> {cart_items.map(prodes =>
        <div className={styles.shoppingcartContainer}><img className={styles.menuImage} 
        src={`/images/${prodes.imagepath}`}/><div style={{}}> { prodes.item_name }<div>{ prodes.description }</div><div>{ prodes.price }</div></div> 
          <button style={{}} onClick={() => handleDeleteFromCart(prodes)}><div>DELETE</div></button></div>)}
          LOPPUSUMMA: {summa+"€"}<div>

            <Link to={"/payment/"}><button onClick = {ToPayment}  food = {cart_items} summa = {summa} style={{margin:'20px'}}>PAY</button></Link>
            
          </div>
          </div>
          </div>
           
    )}}
    
    const ToPayment = ({food, summa}) => {

      let foods = food
      let price = summa
      return(
        console.log("mo" + foods + price)
      )
    }

// Näyttää ravintolan tiedot sivulla: <button onClick={() => handleDeleteFromCart(prodes)}>delete</button>

  return (
    <div><div className={styles.restaurantInfo}><img className={styles.restaurantImage} src={`/images/${restaurant.imagepath}`} />
          ID{restaurant.restaurant_id} {restaurant.name} {restaurant.address}
          {restaurant.operating_hours} {restaurant.restaurant_type} {restaurant.price_level}</div>
        <div>
          <RestaurantView ViewStatus={ViewStatus}/>
        </div>
        </div>
  )
}