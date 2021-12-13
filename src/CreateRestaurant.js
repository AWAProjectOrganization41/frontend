import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import TopBar from './TopBar';

export default function CreateRestaurant(){

  const [details, setDetails] = useState({name:"", address:"", operating_hours:"", imagepath:"", restaurant_type:"", price_level:"", owner_id:""});

  //gets restaurant id for create restaurant
  //calls create restaurant
  const submitHandler = (e) => {
    alert('restaurant was submitted');
    setDetails(details.owner_id = JSON.parse(localStorage.getItem('restaurant_key'))[0].restaurant_id)
    console.log(details)
    createRestaurant(details);
  }

  console.log(JSON.parse(localStorage.getItem(('restaurant_key'))))

 //post method for creating a restaurant
  function createRestaurant(details) {

    console.log("dt:"+details)

    fetch('http://localhost:3001/restaurant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)

    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }

//renders a form for creating a restaurant
    return(

       <div>
           <h2> Add a restaurant </h2>
           <br/>

           <form onSubmit={submitHandler}>
           <section>
               <label for="name"/> Enter a name <label/>
               <input type ="text" name="name" id="name" onChange = {e => setDetails({ ...details, name: e.target.value})} value = {details.name} ></input>
               <br/><br/>

               <label for="address"/> Enter an address <label/>
               <input type="text" name="address" id="address" onChange= { e => setDetails({ ...details, address: e.target.value})} value={details.address}></input>
               <br/><br/>
    

               <label for="hours"/> Enter the operating hours <label/>
               <input type="text" name="hours" id="hours" onChange= { e => setDetails({...details, operating_hours: e.target.value})} value={details.operating_hours}></input>
               <br/><br/>
               
               <label for="imagepath"/> Enter a file path for your image <label/>
               <input type="text" name="imagepath" id="imagepath" onChange= { e => setDetails({...details, imagepath: e.target.value})} value={details.imagepath}></input>
               <br/><br/>
               

               <span> Enter the restaurant type </span>
               <br/>
               <input type="radio" name="type" id="buffet" value="buffet" onChange= { e => setDetails({...details, restaurant_type: e.target.value})} />
               <label for="buffet"> Buffet </label>
              

               <input type="radio" name="type" id="fastfood" value="fastfood" onChange= { e => setDetails({...details, restaurant_type: e.target.value})}/>
               <label for="fastfood"> Fast food </label>
    

               <input type="radio" name="type" id="fastcasual" value="fastcasual" onChange= { e => setDetails({...details, restaurant_type: e.target.value})}/>
               <label for="fastcasual"> Fast casual </label>
              

               <input type="radio" name="type" id="casualdining" value="casualdining" onChange= { e => setDetails({...details, restaurant_type: e.target.value})}/>
               <label for="casualdining"> Casual dining </label>
     

               <input type="radio" name="type" id="finedining" value="finedining" onChange= { e => setDetails({...details, restaurant_type: e.target.value})}/>
               <label for="finedining"> Fine dining </label>

               <br/><br/>

               <span> Enter the price level</span>
               <br/>
               <input type="radio" name="price" id="price1" value="o" onChange= { e => setDetails({...details, price_level: e.target.value})}/>
               <label for="price1"> € </label>
        

               <input type="radio" name="price" id="price2" value="oo" onChange= { e => setDetails({...details, price_level: e.target.value})}/>
               <label for="price2"> €€ </label>
       

               <input type="radio" name="price" id="price3" value="ooo" onChange= { e => setDetails({...details, price_level: e.target.value})}/>
               <label for="price3"> €€€ </label>
      

               <input type="radio" name="price" id="price4" value="oooo" onChange= { e => setDetails({...details, price_level: e.target.value})}/>
               <label for="price4"> €€€€ </label>
               

           </section>
           </form>

           <Link to="createmenu"><button onClick= {submitHandler}> Submit </button></Link>
           
       </div> 
       
       
    );

}