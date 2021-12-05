import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from './RestaurantDetailView.module.css'

let i = 0;
let cart_items = [];

export default function RestaurantDetailView(props) {

  const [menu, setMenu] = useState([]);

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

    const [ViewStatus, setStatus] = useState('menu_view')
    
  
    const handleFoodClick = (foodid) => {
      cart_items[i] = foodid;
      i++;
      console.log(i+cart_items+foodid)
    };

    const handleOpenCart = () => {
      setStatus('shoppingcart');
    }

    const handleCloseCart = () => {
      setStatus('menu_view');
    };

    
    const Button = ({handleClick, text}) => (    
      <button onClick = {handleClick}> 
       {text}
      </button>
    )

  const result = useParams();
  const restaurant = props.restaurant.find(restaurant => restaurant.restaurant_id === parseInt(result.restaurant_id));

  if(restaurant == null) {
    console.log(result.restaurant_id);
    return <div>No matchiestaurng restaurant</div>
  }

  const RestaurantView = ({ViewStatus}) => {

    if (ViewStatus !== 'shoppingcart'){
      return(
        <div className={styles.commonView}>
            <div className={styles.menuView}><h1>Add food to shoppincart</h1>{ menu.map(menu => <div> <button className={styles.button} onClick={() => handleFoodClick(menu.item_name)}> <img className={styles.image} src={`/images/${menu.imagepath}`}/> {menu.item_name} </button></div>)}
            <Button handleClick = {handleOpenCart} text='shoppincart'> </Button>
            </div> 
              </div>
            )
          }
    else{
      return(
        <div>
          <Statistics food={cart_items}/>
          <Button handleClick = {handleCloseCart} text='Close Cart'> </Button>
        </div>
      )
    }
  }

  const Statistics = ({food}) => {

    if(food < 1){
      return(
        <div>
          <p> Cart is empty </p>
        </div>
      )
    } else{
      return(
        <div>
        <CartView />
        </div>
      )
    }
  }
  
  const CartView = () => {
    return(
        <div> {cart_items.map(cart_items => <div> {cart_items} </div> )} </div>
    )}
  
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