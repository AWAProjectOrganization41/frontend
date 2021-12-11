import React, {useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import LoginForm from './components/LoginForm';

export default function LoginConsumer() {

  var [login, setLogin] = useState(false);
  const [error, setError] = useState("");
  const [user_key, setId] = useState([])
  const [newUser, setNewUser] = useState({username: "", password: ""});


  const Login = details => {

    fetch('http://localhost:3001/user_login', {
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
        console.log("data: "+data)
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
          localStorage.setItem('user_key', JSON.stringify(user_key));
          localStorage.setItem('auth', 'user');
        }

  const submitHandler = (e) => {
    alert('a new user was submitted');
    //console.log(details)
    createUserLogin(newUser);
  }

  function createUserLogin(newUser) {
    console.log("dt:"+newUser)

    fetch('http://localhost:3001/create_user_login', {
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
    setLogin(false)
  }

  return (
    <div className="LoginConsumer">
      {(login === true) ? (
        <div className="welcome">
          <Navigate to='/restaurants' />
          <button onClick={Logout}>Kirjaudu ulos</button>
        </div> ) : (
      <LoginForm Login={Login} error={error}/>
     )}

<div className="menu"> 
<div> Terve herra ... </div>
 </div>

 <div>
   <h2> Create an account </h2>
  <div>Enter your username</div>
   <section>
               <label htmlFor="username"/> Enter your username <label/>
               <input type="text" name="username" id="username" onChange= { e => setNewUser({...newUser, username: e.target.value})} value={newUser.username}></input>
               <br/><br/>

               <label htmlFor="password"/> Enter a password <label/>
               <input type="text" name="password" id="password" onChange= { e => setNewUser({...newUser, password: e.target.value})} value={newUser.password}></input>
               <br/><br/>

        </section>

        <Link to="/restaurants"><button onClick = {submitHandler}> create </button></Link>
 </div>
    </div>
  );

  }
