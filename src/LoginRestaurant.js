import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CreateRestaurant from './CreateRestaurant';

export default function LoginRestaurant(props) {

  const [details,setDetails] = useState({restaurant_username: "", restaurant_password: "", owner_id:""});
  const [newUser, setNewUser] = useState({restaurant_username: "", restaurant_password: ""});


  const submitHandler = (e) => {
    alert('a new user was submitted');
    //console.log(details)
    createRestaurantLogin(newUser);
    
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
      <div className="form-inner">
       <h2>Login as a restaurant owner </h2> 

       <div classname="form-group">
           <label htmlFor="restaurant_username">Sähköposti: </label>
           <input type="restaurant_username" name="restaurant_username" id="restaurant_username" onChange={e => setDetails({...details, restaurant_username: e.target.value})} value={details.restaurant_username}/>
           </div>
           <br/>

           <div className="form-group">
               <label htmlFor="restaurant_password">Salasana: </label>
               <input type="restaurant_password" name="restaurant_password" id="restaurant_password" onChange={e => setDetails({...details, restaurant_password: e.target.value})} value={details.restaurant_password}/>

           </div>
           <br/>

           <div>
           { props.restest.map(restt =>
           <div>
            <p> {restt.restaurant_username} </p>
            <p> {restt.restaurant_password} </p>
            <p> {restt.restaurant_id} </p>
            </div>
            )}
            </div>

           <input type="submit" value="LOGIN"/>
           <br/>
           <Link to="/restaurantui"><div>Kirjaudu sisään</div></Link>


           <div>
           <h2> Create an account </h2>
       <section>
               <label for="item_name"/> Enter your username <label/>
               <input type="text" name="restaurant_username" id="restaurant_username" onChange= { e => setNewUser({...newUser, restaurant_username: e.target.value})} value={newUser.restaurant_username}></input>
               <br/><br/>

               <label for="description"/> Enter a password <label/>
               <input type="text" name="restaurant_password" id="restaurant_password" onChange= { e => setNewUser({...newUser, restaurant_password: e.target.value})} value={newUser.restaurant_password}></input>
               <br/><br/>

        </section>

        <Link to="/restaurantui"><button onClick = {submitHandler}> tee uusi käyttäjä </button></Link>
        </div>

      </div>
  </form>

  )
}
