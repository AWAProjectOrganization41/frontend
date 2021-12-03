import { Link } from 'react-router-dom'
import React, {useState, setState, state} from 'react'

export default function CreateRestaurant(props){

  const [restaurant, setRestaurant] = useState({name:"", address:"", operating_hours:"", imagepath:"", restaurant_type:"", price_level:""});

  let name 
  let address 
  let operating_hours 
  let imagepath 
  let restaurant_type 
  let price_level 

  const handleSubmit = (e) => {
    alert('restaurant was submitted');
    name = restaurant.name
    console.log('1' + name);
    console.log('2' + restaurant.name);
    console.log('3' + {name: e.target.value})
    createRestaurant();
  }


    return(

       <div>
           <h2> Add a restaurant </h2>
           <br/>

           <form onSubmit={handleSubmit}>
           <section>
               <label for="name"/> Enter a name <label/>
               <input type ="text" name="name" id="name" onChange = {e => setRestaurant({ name: e.target.value})} value = {restaurant.name} ></input>
               <br/><br/>

               <label for="address"/> Enter an address <label/>
               <input type="text" name="address" id="address" onChange= { e => setRestaurant({ address: e.target.value})} value={restaurant.address}></input>
               <br/><br/>
    

               <label for="hours"/> Enter the operating hours <label/>
               <input type="text" name="hours" id="hours" onChange= { e => setRestaurant({ hours: e.target.value})} value={restaurant.operating_hours}></input>
               <br/><br/>
               
               <label for="imagepath"/> Enter a file path for your image <label/>
               <input type="text" name="imagepath" id="imagepath" onChange= { e => setRestaurant({ imagepath: e.target.value})} value={restaurant.imagepath}></input>
               <br/><br/>
               

               <span> Enter the restaurant type </span>
               <br/>
               <input type="radio" name="type" id="buffet" value="buffet" onChange= { e => setRestaurant({ type: e.target.value})} />
               <label for="buffet"> Buffet </label>
              

               <input type="radio" name="type" id="fastfood" value="fastfood" onChange= { e => setRestaurant({ type: e.target.value})}/>
               <label for="fastfood"> Fast food </label>
    

               <input type="radio" name="type" id="fastcasual" value="fastcasual" onChange= { e => setRestaurant({ type: e.target.value})}/>
               <label for="fastcasual"> Fast casual </label>
              

               <input type="radio" name="type" id="casualdining" value="casualdining" onChange= { e => setRestaurant({ type: e.target.value})}/>
               <label for="casualdining"> Casual dining </label>
     

               <input type="radio" name="type" id="finedining" value="finedining" onChange= { e => setRestaurant({ type: e.target.value})}/>
               <label for="finedining"> Fine dining </label>

               <br/><br/>

               <span> Enter the price level</span>
               <br/>
               <input type="radio" name="price" id="price1" value="€" onChange= { e => setRestaurant({ price: e.target.value})}/>
               <label for="price1"> € </label>
        

               <input type="radio" name="price" id="price2" value="€€" onChange= { e => setRestaurant({ price: e.target.value})}/>
               <label for="price2"> €€ </label>
       

               <input type="radio" name="price" id="price3" value="€€€" onChange= { e => setRestaurant({ price: e.target.value})}/>
               <label for="price3"> €€€ </label>
      

               <input type="radio" name="price" id="price4" value="€€€€" onChange= { e => setRestaurant({ price: e.target.value})}/>
               <label for="price4"> €€€€ </label>
               <button type="submit"> Submit </button>

           </section>
           </form>

           <Link to="createmenu"><button onClick= {createRestaurant}> Done </button></Link>
           
       </div> 
       
       
    );


    function createRestaurant(props) {

        console.log(JSON.stringify({name, address, operating_hours, imagepath, restaurant_type, price_level}))
        console.log(name);
  
        fetch('http://localhost:3001/restaurant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, address, operating_hours, imagepath, restaurant_type, price_level}),
        })
          .then(response => {
            return response.text();
          })
      }




}