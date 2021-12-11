import React, {useState, useEffect} from 'react'

import { Link, Outlet } from 'react-router-dom'

export default function UserHistory(props){

    var loggedin = localStorage.getItem('user_key')

    const [history, setHistory] = useState([]);
    const [restaurantHistory, setRestaurantHistory] = useState([]);

    const userOrder = {restaurant_name: "", products:"", total_price:"", restaurant_id:"", owner_id:""};
   

    function createUserOrder(){
            userOrder.restaurant_name = "Sakarin pullat"    // ravintolan nimi
            userOrder.products = "sahramipulla, kanelipulla, kookospulla"   // tuotteet
            userOrder.total_price = 100.50    // hinta
            userOrder.restaurant_id = 3   // ravintolan autom. id
            userOrder.owner_id = 1    // ravintolan omistaja

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

    if (loggedin !== null){
      console.log(loggedin)
      return(
        <div>
          <Link to="/"><div style={{paddingRight:'50px'}}>Log Out</div></Link>
            <h3> käyttäjän tekemät tilaukset </h3>
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


            <h3> ravintolalle tallennetut tilaukset </h3>
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

            <button onClick = {createUserOrder}> tee tilaus ravintolalle tilaajana</button>
            <br/><br/><br/>

        </div>
    )
    }
    else{
    return(
      <div>
        <div>
          YOU HAVE TO LOG IN
        </div>
        <button><Link to="/"><div style={{paddingRight:'50px'}}>PALAA PÄÄSIVULLE</div></Link></button>
        </div>
    )}
}