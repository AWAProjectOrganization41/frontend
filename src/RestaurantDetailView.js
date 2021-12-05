import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function RestaurantDetailView(props) {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);
  function getMenu() {
    fetch('http://localhost:3001/restaurant_menu')
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(JSON.stringify(data));
      setMenu(JSON.parse(data))
    });
  }

  const Button = ({handleClick, text}) => (    
    <button onClick = {handleClick}> 
     {text}
    </button>
  )
  
    const [food, setFood] = useState("")
    const [cart, setCart] = useState(1)
    
  
    const handleFoodClick1 = () => {
      setFood(food + "food1");
    };
    const handleFoodClick2 = () => {
      setFood(food + "food2");
    };
    const handleFoodClick3 = () => {
      setFood(food + "food3");
    };
    const handleFoodClick4 = () => {
      setFood(food + "food4");
    };
    const handleFoodClick5 = () => {
      setFood(food + "food5");
    };

    const handleShoppingView = () => {
      setCart(2);
    }

    const handleCloseCart = () => {
      setCart(1);
    };

  const result = useParams();

  const restaurant = props.restaurant.find(restaurant => restaurant.restaurant_id === parseInt(result.restaurant_id));

  if(restaurant == null) {
    console.log(result.restaurant_id);
    return <div>No matchiestaurng restaurant</div>
  }
  const ShoppingCart = ({cart}) => {

    if(cart < 2){
      return(
        <div>
          <h1>Add food to restaurant</h1>
       <div>{ menu.map(menu => <Button handleClick = {handleFoodClick1}  text = {menu.item_name}> </Button>)}</div>
       <div><Button handleClick = {handleFoodClick2} text = 'food2' > </Button></div>
       <div><Button handleClick = {handleFoodClick3} text = 'food3' > </Button></div>
       <div><Button handleClick = {handleFoodClick4} text = 'food4' > </Button></div>
       <div><Button handleClick = {handleFoodClick5} text = 'food5' > </Button></div>
       <Button handleClick = {handleShoppingView} text='shoppincart'> </Button>
        </div>
      )
    } else{
      return(
        <div>
          <table>
            <tbody>
        <Statistics food={food}/>
       <Button handleClick = {handleCloseCart} text='Close Cart'> </Button>
            </tbody>   
         </table>  
        </div>
      )
    }
  }

  

  const Statistics = ({food}) => {

    if(food < 1){
      return(
        <div>
          <p> No food selected </p>
        </div>
      )
    } else{
      return(
        <div>
          <table>
            <tbody>
        <StatisticLine text='food' value = {food} />
            </tbody>   
         </table>  
        </div>
      )
    }
  }
  
  const StatisticLine = ({text, value}) => {
    return(
      <tr>
        <td> {text} </td>
        <td> {value}</td>
        </tr>
    )
    }
  
  return (
    <div>
          <div>
            ID{restaurant.restaurant_id} {restaurant.name} {restaurant.address}
          {restaurant.operating_hours} <img src={`./images/${restaurant.imagepath}`} /> {restaurant.restaurant_type} {restaurant.price_level}
          </div>
        <div>
      <ShoppingCart cart={cart}/>
    </div>
          </div>
  )

}