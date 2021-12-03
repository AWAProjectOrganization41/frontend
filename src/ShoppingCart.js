import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'

export default function ShoppingCart(){

    return(

        <section>
            <br/><br/><br/>
            
            <p> Shows cart contents</p>
            
            <br/>
               <label for="location"/> Select your delivery location <label/>
               <input type="text" name="location" id="location"></input>

               <br/>
               
               <p> Shows final cost </p>
               <br/>

               <p> fictional payment things </p>
               

        </section>


    )


}