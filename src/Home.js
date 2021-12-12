
import { Link } from 'react-router-dom'
import React from 'react'


export default function Home() {

  var status_save = localStorage.getItem('status')
  //var order_save = localStorage.getItem('order')
  localStorage.clear();
  localStorage.setItem('status', status_save)
  //localStorage.setItem('order', order_save)

  return (
    <div>
      <h1>LOGIN</h1>
      <h3>KIRJAUDU SISÄÄN TAI REKISTERÖIDY</h3>

      <Link to="loginconsumer"><button>ASIAKKAANA</button></Link>
      <Link to="loginrestaurant"><button>RAVINTOLOITSIJANA</button></Link>
      <br/><br/>

    </div>
  
  )
}
