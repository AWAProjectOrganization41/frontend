import { Link } from 'react-router-dom'
import React, {useState} from 'react'

export default function CreateMenu(){

    
    const [restaurant_menu, setMenu] = useState({item_name:"", description:"", price:"", imagepath:""});

    console.log(restaurant_menu);

    return (
        <div>
        <h1> Create a menu for your restaurant </h1>
        <br />

        <section>
               <label for="item_name"/> Enter a name <label/>
               <input type="text" name="item_name" id="item_name" onChange= { e => setMenu({ name: e.target.value})} value={restaurant_menu.item_name}></input>
               <br/><br/>

               <label for="description"/> Enter a description <label/>
               <input type="text" name="description" id="description" onChange= { e => setMenu({ name: e.target.value})} value={restaurant_menu.description}></input>
               <br/><br/>

               <label for="price"/> Enter a price <label/>
               <input type="text" name="price" id="price" onChange= { e => setMenu({ name: e.target.value})} value={restaurant_menu.price}></input>
               <br/><br/>

               <label for="imagepath"/> Enter an imagepath for your image <label/>
               <input type="text" name="imagepath" id="imagepath" onChange= { e => setMenu({ name: e.target.value})} value={restaurant_menu.imagepath}></input>
               <br/><br/>

        </section>

        <Link to="/"><button> Done </button></Link>

        </div>

    )
}