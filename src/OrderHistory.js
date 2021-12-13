import React, {useState, useEffect} from 'react'
import TopBar from './TopBar';

import { Link, Outlet } from 'react-router-dom'

export default function UserHistory(props){

    let auth = localStorage.getItem('auth');
    let loggedin = localStorage.getItem(auth+'_key')
    let user = JSON.parse(loggedin)[0];
    console.log("loggedin"+loggedin)
    console.log("user"+user)

    const [history, setHistory] = useState([]);

    console.log(JSON.stringify(user))

    
    useEffect(() => {
      if (auth === 'user'){
      getOrderHistoryUser();
      }
      if(auth === 'restaurant'){
        getOrderHistoryRestaurant();}
    }, []);

    

    function getOrderHistoryUser() {
      fetch('http://localhost:3001/restaurantorderhistory', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log("data:"+data)
      setHistory(JSON.parse(data))
    }) }
    
    function getOrderHistoryRestaurant() {
      fetch('http://localhost:3001/userorderhistory', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log("data:"+data)
      setHistory(JSON.parse(data))
    }) }
      

    if (auth !== null){
      console.log(loggedin)
      
      if (auth === 'user'){

      return(
        <div>
        <div className="topBar">
          <TopBar/>
        </div>
          <Link to="/"><div style={{paddingRight:'50px'}}>Log Out</div></Link>
            <h3> käyttäjän tekemät tilaukset </h3>
            <div className="orderHistory"> 
            { history.map(history =>
               <>
               <br/>
               <div> {history.restaurant_name} </div>
               <div> {history.products} </div>
               <div> {history.total_price} </div>
               </>
            )}
            </div></div>)}

      if (auth === 'restaurant'){

        return (
          <div>
          <div className="topBar">
            <TopBar/>
          </div>
            <h3> ravintolalle tallennetut tilaukset </h3>
            <div className="orderHistoryRestaurant"> 
            { history.map(history =>
               <>
               <br/>
               <div> {history.restaurant_name} </div>
               <div> {history.products} </div>
               <div> {history.total_price} </div>
               </>
            )}
            </div></div>)}
    
    
    else{
    return(
      <div>
        <div>
          YOU HAVE TO LOG IN
        </div>
        <button><Link to="/"><div style={{paddingRight:'50px'}}>PALAA PÄÄSIVULLE</div></Link></button>
        </div>
    )}
}}

