import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>LOGIN</h1>
      <h3>KIRJAUDU SISÄÄN</h3>

      <Link to="loginconsumer"><button>ASIAKKAANA</button></Link>
      <Link to="loginrestaurant"><button>RAVINTOLOITSIJANA</button></Link>
      <br/><br/>
      <Link to="protected"><button>Protected</button></Link>
    </div>
  )
}
