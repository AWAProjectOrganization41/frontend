import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function LoginRestaurant(props) {

  const [details,setDetails] = useState({restaurant_username: "", restaurant_password: "", owner_id:""});

  const submitHandler = (e) => {

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

      </div>
  </form>

  )
}
