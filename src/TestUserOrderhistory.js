import React, {useState, useEffect} from 'react'

export default function TestUserOrderhistory(props){

    const [history, setHistory] = useState([]);
    const [restaurantHistory, setRestaurantHistory] = useState([]);

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
        </div>
    )
}