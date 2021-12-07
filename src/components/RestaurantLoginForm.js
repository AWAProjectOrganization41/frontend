import React, {useState} from "react";
import { Link } from 'react-router-dom'

function RestaurantLoginForm({Login}) {

    const [details,setDetails] = useState({restaurant_username: "", restaurant_password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
         <form onSubmit={submitHandler}>
             <div className="form-inner">
             <h2>Login </h2> 

             <div classname="form-group">
                 <label htmlFor="email"> Email: </label>
                 <input type="email" name="email" id="email" onChange={e => setDetails({...details, restaurant_username: e.target.value})} value={details.restaurant_username}/>
            </div>
            <br/>
                 <div className="form-group">
                     <label htmlFor="password">Password: </label>
                     <input type="password" name="password" id="password" onChange={e => setDetails({...details, restaurant_password: e.target.value})} value={details.restaurant_password}/>
                </div>

    
    <Link to="/restaurantui"><button> LOGIN </button></Link>



    </div>
    </form>
    )
}

export default RestaurantLoginForm;

//<input type="submit" value="LOGIN"/>
//<Link to="/restaurantui"><div>Kirjaudu sisään</div></Link>



