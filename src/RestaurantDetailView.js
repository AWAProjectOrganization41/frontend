import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from './RestaurantDetailView.module.css'

let i = 0;
var SortedCart = {}
SortedCart.products = []
var cart_items = [''];

export default function RestaurantDetailView(props) {

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

    const [ViewStatus, setStatus] = useState('menu_view')
    
  // Händlää tuotteen lisäämisen listalle cart_items:

    const handleFoodClick = (item_name, description, price, imagepath) => {
      console.log("item name: "+item_name)
      

      if(cart_items.includes(item_name+"..."+description+"..."+price+"..."+imagepath)){
        console.log("Handling "+cart_items)
        // PROTOTYPE DEMO ////////////////////
        //SortedCart.products.splice(SortedCart.products.indexOf(0),1)
        //cart_items.splice(SortedCart.products.indexOf(0),1)
          /////////////////////////////
        setStatus('shoppingcart');
      }
        else{
          cart_items[i] = item_name+"..."+description+"..."+price+"..."+imagepath;
          i++
      setStatus('shoppingcart');
    }
    };
/*
    const handleOpenCart = () => {    // Status: näytetään ostoskori
      setStatus('shoppingcart');
    }

    const handleCloseCart = () => {   // status: näytetään menu
      setStatus('menu_view');
    };*/

    
    const Button = ({handleClick, text}) => (     // händlää ja ohjaa handleopencartiin tai handleclosecartiin. Pystyy händläämään Button-buttoneja 
      <button onClick = {handleClick}> 
       {text}
      </button>
    )

    // Hakee id:n perusteella oikean ravintolan tiedot:
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
            <div className={styles.product}><button className={styles.button} onClick={() => handleFoodClick(menu.item_name, menu.description, menu.price, menu.imagepath)}>
               <img className={styles.image} 
            src={`/images/${menu.imagepath}`}/> {menu.item_name} </button></div></div>)}</div> </div>
            
            
        <div className={styles.shoppingcart}><div>
        
          <Statistics food={cart_items}/>
          
        </div></div></div>
      )
    }
    /*<Button handleClick = {handleOpenCart} text='shoppincart'> </Button>
    <Button handleClick = {handleCloseCart} text='Close Cart'> </Button>*/

  // Jos korissa on tavaraa, näyttää ne, muuten palauttaa tekstin kori on tyhjä:
  const Statistics = ({food}) => {
    setStatus('menu_view');
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
  
// Näyttää ostokset korissa:

  const CartView = () => {
    let prod = cart_items[i-1].split("...")
    console.log("cartissa items "+prod[0]+prod[1]+prod[2]+prod[3])
      SortedCart.products[i] = ({item_name: prod[0], description: prod[1], price: prod[2], imagepath: prod[3]})
      //SortedCart.products[i] = ({item_name: 'poo',description: SortedCart.products[i].description})

      console.log(SortedCart.products)
  


    
    return(
        <div className={styles.shoppingcart}> {SortedCart.products.map(prodes =>
        <div><img className={styles.image} 
        src={`/images/${prodes.imagepath}`}/><div> { prodes.item_name }<div>{ prodes.description }</div><div>{ prodes.price }</div></div> </div>)}
           </div>
    )}
  
// Näyttää ravintolan tiedot sivulla:

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