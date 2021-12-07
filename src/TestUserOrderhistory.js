import React, {useState, useEffect} from 'react'

export default function TestUserOrderhistory(props){

    const [history, setHistory] = useState([]);
    const [restaurantHistory, setRestaurantHistory] = useState([]);

    const userOrder = {restaurant_name: "", products:"", total_price:"", restaurant_id:""};
    //const userOrder = {restaurant_name: "", products:"", total_price:"", restaurant_id:""};
   

    function createUserOrder(){
        
            userOrder.restaurant_name = "Sakarin pullat"
            userOrder.products = "sahramipulla, kanelipulla, kookospulla"
            userOrder.total_price = 100.50
            userOrder.restaurant_id = 3

            console.log(JSON.stringify(userOrder))
        

        fetch('http://localhost:3001/user_orderhistory', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userOrder),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
      }

    useEffect(() => {
        getUserOrderhistory();
      }, []);
      function getUserOrderhistory() {
        fetch('http://localhost:3001/user_orderhistory') // if developing locally: 'http://localhost:3001/r'. If to heroku: '/r'
        .then(response => {
          return response.text();
        })
        .then(data => {
            setHistory(JSON.parse(data))
        });
    }

    useEffect(() => {
        getRestaurantOrderhistory();
      }, []);
      function getRestaurantOrderhistory() {
        fetch('http://localhost:3001/restaurant_orderhistory') // if developing locally: 'http://localhost:3001/r'. If to heroku: '/r'
        .then(response => {
          return response.text();
        })
        .then(data => {
            setRestaurantHistory(JSON.parse(data))
        });
    }


    return(
        <div>

            <div className="orderHistoryUser"> 
            { history.map(history =>
               <>
               <br/>
               <div> {history.restaurant_name} </div>
               <div> {history.products} </div>
               <div> {history.total_price} </div>
               </>
            )}
            </div>


            <div className="orderHistoryRestaurant"> 
            { restaurantHistory.map(restaurantHistory =>
               <>
               <br/>
               <div> {restaurantHistory.orderer_username} </div>
               <div> {restaurantHistory.products} </div>
               <div> {restaurantHistory.total_price} </div>
               </>
            )}
            </div>

            <button onClick = {createUserOrder}> tee tilaus ravintolalle </button>

        </div>
    )
}