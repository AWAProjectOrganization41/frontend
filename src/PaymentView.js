
import { Link, Navigate } from 'react-router-dom'
import React, {useState} from 'react'

var submitted = false

export default function PaymentView(props){


    var shoppingcart = localStorage.getItem('shoppincart')
    console.log("cart:"+shoppingcart)

    var products = shoppingcart.split('...')
    console.log(products[0])

    var products_obj = JSON.parse(products[0])

    var total = 0
    var products_string = ''
    var restaraunt_id = ''
    var owner_id = products[1]
    console.log(products[1])
   
    var orderer = JSON.parse(localStorage.getItem('user_key'))
    orderer = JSON.stringify(orderer[0].username)


    // products[0]: muut
    //products[1]: ravintolanomistajan id

    const restaurantOrder = {orderer_username: "", products:"", total_price:"", restaurant_id:"", owner_id:""};
    var [submitted, setSubmit] = useState(false)

    function CreateRestaurantOrder(){
        restaurantOrder.orderer_username = orderer    // tilaajan nimi
        restaurantOrder.products = products_string   // tuotteet
        restaurantOrder.total_price = total   // hinta
        restaurantOrder.restaurant_id = restaraunt_id   // ravintolan autom. id
        restaurantOrder.owner_id = owner_id    // ravintolan omistaja

        console.log("order: "+JSON.stringify(restaurantOrder))
        localStorage.setItem('order', JSON.stringify(restaurantOrder))
        console.log("order:"+localStorage.getItem('order'))
    
    fetch('http://localhost:3001/restaurant_orderhistory', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurantOrder),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
    })
    
    setSubmit(true)
  }



    return(
        <div>
            <Link to="/"><div style={{paddingRight:'50px'}}>Log Out</div></Link>
        {console.log(submitted)}{(submitted === true) ? (
            <div>
                {console.log(submitted)}{<Navigate to='/restaurants' />}
            </div> ) : (<div>
         
    
                <h3> your order: </h3>{products_obj.map(p => <div> {p.item_name} {p.price}  
                <script>
                    
                    {restaraunt_id = p.restaraunt_id}
                    {total+=parseInt(p.price)}
                    {products_string+=p.item_name+','}
                
                </script>
                
                </div> )}
                <h3> total price: </h3> <div>{total} e</div>
                
                <label htmlFor=":"> Select a delivery location </label>
                <input type="text" name="delivery" id="delivery" />
                <br/><br/>

                <label htmlFor=":"> Special requests for your order </label>
                <br/>
                <textarea name="request" id="request" rows="3" cols="40"/>
                <br/><br/>

                <h3> Select a payment method</h3>

                <p>
                <label for="pay1"> Visa </label>
                <input type="radio" name="pay" id="pay1" value="Visa" />
                <br/><br/>

                <label for="pay2"> Mastercard </label>
                <input type="radio" name="pay" id="pay1" value="Mastercard" />
                <br/><br/>

                <label for="pay2"> American Express </label>
                <input type="radio" name="pay" id="pay1" value="AmericanExpress" />
                </p><br/>

                <h3> Enter your credit card information </h3>

                <label htmlFor=":"> Enter your  cardnumber </label>
                <input type="text" name="cardnumber" id="cardnumber" />
                <br/><br/>

                
                <label htmlFor=":"> Date of expiration </label>  
                <br/>
                <label htmlFor=":"> month  </label>
                <select name="month" id="month">
                <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option>
                <option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option>
                <option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>
                </select>

                <label htmlFor=":"> year  </label>
                <select name="year" id="year">
                <option value="01">21</option><option value="02">22</option><option value="03">23</option><option value="04">24</option><option value="04">25</option>
                <option value="04">26</option><option value="04">27</option>
                </select>

                <br/>
                <label htmlFor=":"> CVC </label>
                <textarea name="cardnumber" id="cardnumber" cols="3" rows="1"/>

                <br/><br/>
                
            <button onClick = {CreateRestaurantOrder}> Submit order {console.log(submitted)}</button></div>)}
                </div>
    )
}