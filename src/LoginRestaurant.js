import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function LoginRestaurant(props, Login, error) {

  const [details,setDetails] = useState({name: "", email: "", password: ""});

  const submitHandler = e => {

  }
  return (
    

      <form onSubmit={submitHandler}>
      <div className="form-inner">
       <h2>Login as a restaurant owner </h2> 
       {/*error*/}

       <div classname="form-group">
           <label htmlFor="email">Sähköposti: </label>
           <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
           </div>
           <br/>

           <div className="form-group">
               <label htmlFor="password">Salasana: </label>
               <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>

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
