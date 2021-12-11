import { Link, useParams } from 'react-router-dom'
import React, {useState} from 'react'
import TopBar from './TopBar';

export default function CreateMenu(){

    const [details, setDetails] = useState({item_name:"", description:"", price:"", imagepath:"", owner_id:""});
    const submitHandler = (e) => {
        alert('menu was submitted');
        setDetails(details.owner_id = rest_id )
        //setDetails(details.owner_id = 1);
        createMenu(details);
    }

    function createMenu(details){
        console.log(details);

        fetch('http://localhost:3001/create_restaurant_menu', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
      }

      const result = useParams();
      const rest_id = result.id
      console.log(rest_id)
      if(rest_id === null) {
        return <div>Something went wrong</div>
      }

      var restaurant_key = localStorage.getItem('restaurant_key')

      if (restaurant_key !== null){

    return (
        <div>
        <div className="topBar">
          <TopBar/>
        </div>
        <h1> Create a menu for your restaurant </h1>
        <br />

        <section>
            <form onSubmit = {submitHandler}>
               <label for="item_name"/> Enter a name <label/>
               <input type="text" name="item_name" id="item_name" onChange= { e => setDetails({...details, item_name: e.target.value})} value={details.item_name}></input>
               <br/><br/>

               <label for="description"/> Enter a description <label/>
               <input type="text" name="description" id="description" onChange= { e => setDetails({...details, description: e.target.value})} value={details.description}></input>
               <br/><br/>

               <label for="price"/> Enter a price <label/>
               <input type="text" name="price" id="price" onChange= { e => setDetails({...details, price: e.target.value})} value={details.price}></input>
               <br/><br/>

               <label for="imagepath"/> Enter an imagepath for your image <label/>
               <input type="text" name="imagepath" id="imagepath" onChange= { e => setDetails({...details, imagepath: e.target.value})} value={details.imagepath}></input>
               <br/><br/>

               </form>

        </section>

        <Link to="/restaurantui"><button onClick = {submitHandler}> Submit </button></Link>
        </div>
    )
  }

  else{
    return(
    <div>
        <div>
          YOU HAVE TO LOG IN
        </div>
        <button><Link to="/"><div style={{paddingRight:'50px'}}>PALAA PÄÄSIVULLE</div></Link></button>
        </div>
        )
  }
}

