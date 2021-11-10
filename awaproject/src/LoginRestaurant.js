import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginRestaurant() {
  return (
    <div>
      Login as a restaurant
      <h4>Käyttäjätunnus</h4>
      <h4>Salasana</h4>
      <Link to="/restaurants"><div>Kirjaudu sisään</div></Link>
    </div>
  )
}
