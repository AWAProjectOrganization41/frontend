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
  const [newUser, setNewUser] = useState({username: "", password: ""});

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

  const submitHandler = (e) => {
    alert('a new user was submitted');
    //console.log(details)
    createUserLogin(newUser);
  }

  function createUserLogin(newUser) {
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
<div> {user.password} </div>
</>
 )}
 </div>

 <div>
   <h2> Create an account </h2>
   <section>
               <label for="username"/> Enter your username <label/>
               <input type="text" name="username" id="username" onChange= { e => setNewUser({...newUser, username: e.target.value})} value={newUser.username}></input>
               <br/><br/>

               <label for="password"/> Enter a password <label/>
               <input type="text" name="password" id="password" onChange= { e => setNewUser({...newUser, password: e.target.value})} value={newUser.password}></input>
               <br/><br/>

        </section>

        <Link to="/restaurants"><button onClick = {submitHandler}> tee uusi käyttäjä </button></Link>
 </div>
    </div>
  );

  }


