import React from 'react'

export default function Testrestaurantlogin(props){

    return (
        <div className="menu"> 

       { props.restest.map(restt =>
       <>
       <div> {restt.restaurant_username} </div> <div> {restt.restaurant_password} </div>
       </>
        )}
        </div>
    )

}