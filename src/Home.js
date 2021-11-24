import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>LOGIN</h1>
      <p>KIRJAUDU SISÄÄN
      </p>
      <Link to="loginconsumer"><button>HEROKU TOIMII</button></Link>
      <Link to="loginrestaurant"><button>RAVINTOLOITSIJANA</button></Link>
      <Link to="protected"><button>Protected</button></Link>
    </div>
  )
}
