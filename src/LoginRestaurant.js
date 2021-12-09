import React, {useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import RestaurantLoginForm from './components/RestaurantLoginForm';

export default function LoginConsumer() {

  var [login, setLogin] = useState(false);
  const [error, setError] = useState("");
  const [restaurant_key, setId] = useState([]);
  const [newRestaurantUser, setNewRestaurantUser] = useState({username: "", password: ""});

  var data_id = ''

  const Login = details => {

    fetch('http://localhost:3001/restaurant_login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)

    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(data)
        setId(JSON.parse(data))
        if(data!=='[]'){
          
          console.log("Kirjauduttu sisään");
          setLogin(true)
        }
          else {
            console.log("Kirjautuminen epäonnistui");
          }});      
        }

        if (Login){
          localStorage.setItem('restaurant_key', JSON.stringify(restaurant_key));
        }

  const submitHandler = (e) => {
    alert('a new user was submitted');
    //console.log(details)
    createRestaurantLogin(newRestaurantUser);
  }

  function createRestaurantLogin(newRestaurantUser) {
    console.log("dt:"+newRestaurantUser)

    fetch('http://localhost:3001/create_restaurant_login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurantUser)
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }

  const Logout = () => {
    setLogin(false)
  }

  return (
    <div className="LoginRestaurant">
      {(login === true) ? (
        <div className="welcome">
          <Navigate to='/restaurantUi' />
          <button onClick={Logout}>Kirjaudu ulos</button>
        </div> ) : (
      <RestaurantLoginForm Login={Login} error={error}/>
     )}

<div className="menu"> 
<div> morjes omistaja ... </div>
 </div>

 <div>
   <h2> Create an account </h2>
  <div>Enter your username</div>
   <section>
               <label htmlFor="username"/> Enter your email <label/>
               <input type="text" name="username" id="username" onChange= { e => setNewRestaurantUser({...newRestaurantUser, username: e.target.value})} value={newRestaurantUser.username}></input>
               <br/><br/>

               <label htmlFor="password"/> Enter a password <label/>
               <input type="text" name="password" id="password" onChange= { e => setNewRestaurantUser({...newRestaurantUser, password: e.target.value})} value={newRestaurantUser.password}></input>
               <br/><br/>

        </section>

        <Link to="/restaurantUi"><button onClick = {submitHandler}> create </button></Link>
 </div>
    </div>
  );

  }
