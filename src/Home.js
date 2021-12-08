
import { Link } from 'react-router-dom'
import React from 'react'

export default function Home() {



  return (
    <div>
      <h1>LOGIN</h1>
      <Link to="shoppingcart"><button>Shopping cart</button></Link>
        
      <h3>KIRJAUDU SISÄÄN</h3>

      <Link to="loginconsumer"><button>ASIAKKAANA</button></Link>
      <Link to="loginrestaurant"><button>RAVINTOLOITSIJANA</button></Link>
      <br/><br/>

      <Link to="/testmenu"><div>menutestaus </div></Link>
      <Link to="/testuserlogin"><div>userlogin get testaus</div></Link>
      <Link to="/search"><div>Haku testaus</div></Link>
    </div>
  
  )
}
