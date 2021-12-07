import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import RestaurantLoginForm from './components/RestaurantLoginForm';

export default function LoginRestaurant(props) {

  const [newUser, setNewUser] = useState({restaurant_username: "", restaurant_password: ""});


  const submitHandler = (e) => {
    alert('a new user was submitted');
    console.log(newUser)
    createRestaurantLogin(newUser);
  }

  const Login = details => {
    console.log(details);
  }


  function createRestaurantLogin(newUser) {
    console.log("dt:"+newUser)

    fetch('http://localhost:3001/user_login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }


  return (

      <form onSubmit={submitHandler}>
      <div>
      <RestaurantLoginForm Login = {Login} />

           <div>
           <h2> Create an account </h2>
                 <section>
                     <form onSubmit={submitHandler}>
                     <label for="restaurant_username"/> Enter your username <label/>
                     <input type="text" name="restaurant_username" id="restaurant_username" onChange= { e => setNewUser({...newUser, restaurant_username: e.target.value})} value={newUser.restaurant_username}></input>
                     <br/><br/>

                     <label for="restaurant_password"/> Enter a password <label/>
                     <input type="text" name="restaurant_password" id="restaurant_password" onChange= { e => setNewUser({...newUser, restaurant_password: e.target.value})} value={newUser.restaurant_password}></input>
                     <br/><br/>

                    </form>
                 </section>

            <Link to="/restaurantui"><button onClick = {submitHandler}> tee uusi käyttäjä </button></Link>
            </div>

            <div>
                { props.restest.map(restt =>
                <div>
                    <p> {restt.restaurant_password} </p>
                </div>
                    )}
            </div>

        </div>
    </form>

  )
}
