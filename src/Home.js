
import { Link } from 'react-router-dom'
import React from 'react'


export default function Home() {

  //manages local storage
  var status_save = localStorage.getItem('status')
  localStorage.clear();
  localStorage.setItem('status', status_save)

  return (
    <div style={{backgroundColor:'blue'}}>
      <h1>LOGIN</h1>
      <h3>KIRJAUDU SISÄÄN TAI REKISTERÖIDY</h3>

      <Link to="loginconsumer"><button>ASIAKKAANA</button></Link>
      <Link to="loginrestaurant"><button>RAVINTOLOITSIJANA</button></Link>
      <br/><br/>

    </div>
  
  )
}
