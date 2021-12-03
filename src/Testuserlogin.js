import React from 'react'

export default function Testuserlogin(props){

    return (
        <div className="menu"> 

       { props.usertest.map(user =>
       <>
       <div> {user.username} </div> <div> {user.password} </div>
       </>
        )}
        </div>
    )

}