import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './components/LoginForm';

export default function LoginConsumer(props) {
  const adminUser = {
    email:"admin@123.com",
    password: "123"
  }

  const email = "";

  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Kirjauduttu sisään");
      setUser({
        name: details.name,
        email: details.email
      })}
  
      else {
        console.log("Kirjautuminen epäonnistui");
    }
    
  
  }

  const Logout = () => {
    setUser({name: "", email:""});
  }

  return (
    <div className="LoginConsumer">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Tervettuloa <span>{user.name}</span> </h2>
          <Link to="/restaurants"><div>Selaa ravintoloita</div></Link>
          <button onClick={Logout}>Kirjaudu ulos</button>
        </div> ) : (
      <LoginForm Login={Login} error={error}/>
     )}

<div className="menu"> 

{ props.usertest.map(user =>
<>
<div> {user.username} </div> <div> {user.password} </div>
</>
 )}
 </div>
    </div>
  );

  }


