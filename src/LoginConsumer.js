import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginConsumer() {
  return (
    <div>
      Login as a consumer
      <h4>Käyttäjätunnus</h4>
      <h4>Salasana</h4>
      <Link to="/restaurants"><div>Kirjaudu sisään</div></Link>
    </div>
  )
}
