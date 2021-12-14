import React from 'react'
import styles from './OrderStatus.module.css'

export default function OrderStatus() {

let status = localStorage.getItem('status')
if (status !== null){
let status_info = JSON.parse(localStorage.getItem('user_key'))
let check_status = [] = status.split('...')


//clears order from local storage
function handleCheck(){
    localStorage.removeItem('status')
    window.location.reload()
    
}


//changes the status of the order
if (check_status[1] === status_info[0].username){
    if (check_status[0] === 'waiting'){

        return (
        <div className={styles.container}>
        status info: {status_info[1]} <div >TILAUKSENNE ODOTTAA VAHVISTUSTA</div>ARVIOITU TOIMITUSAIKA:<div>45 min</div></div>
        
    )}
    if (check_status[0] === 'preparing'){

        return (
        <div className={styles.container}>
        status info: {check_status[0]} <div>TILAUKSENNE ON VASTAANOTETTU JA SITÄ VALMISTELLAAN</div>ARVIOITU TOIMITUSAIKA:<div>30 min</div></div>
        
    )}
    if (check_status[0] === 'moving'){

        return (
        <div className={styles.container}>
        status info: {check_status[0]} <div>TILAUKSENNE ON MATKALLA JA SAAPUU PIAN</div>ARVIOITU TOIMITUSAIKA:<div>10 min</div></div>
        
    )}

        
        else{
            
        return (<div>status info: {check_status[0]} <div>TILAUKSENNE ON SAAPUNUT PERILLE.</div>KUITTAA TILAUS VASTAANOTETUKSI<div><button onClick={() => handleCheck}>Kuittaus</button></div></div>
            
        )}
    }
    else{
        return (
            null)}
        }

    else{
    return (
        null
    )}
}
