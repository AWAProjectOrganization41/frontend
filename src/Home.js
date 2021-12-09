
import { Link } from 'react-router-dom'
import React from 'react'

export default function Home() {

  localStorage.clear();

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
