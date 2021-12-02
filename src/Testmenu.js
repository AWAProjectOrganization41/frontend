import React from 'react'

export default function Testmenu(props){

     return (
         <div className="menu"> 

        { props.menutest.map(menu =>
        <>
        <div> {menu.item_name} </div>
        </>
         )}
         </div>
     )
}

