import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'

export default function TopBar(){

    
  let [auth, setAuth] = useState();

    console.log("autti:" +auth)
    if (auth === 'user'){
            console.log("user"+auth)
        return(

        <div className="topBar">
              <Link to="/restaurants"><div style={{paddingRight:'50px'}}>RESTAURANTS</div></Link>
              <Link to="/orderhistory"><div style={{paddingRight:'50px'}}>order history</div></Link>
            </div>
            
            )}
            
    else if (auth === 'restaurant'){
        
        console.log("rest"+auth)
        return(

            <div className="topBar">
                  <Link to="/restaurantui"><div style={{paddingRight:'50px'}}>YOUR RESTAURANTS</div></Link>
                  <Link to="/orderhistory"><div style={{paddingRight:'50px'}}>order history</div></Link>
                </div>
                
            )}
            
            else{
                setAuth(localStorage.getItem('auth'))
                return(

                    <div className="topBar">
                          Joo
                        </div>
                        
                    )
            }
    }