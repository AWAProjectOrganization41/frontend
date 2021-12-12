import React, { useState, useEffect } from 'react'
import {  Link, useParams } from 'react-router-dom'
import styles from './OrderStatus.module.css'

export default function OrderStatus() {

let status = localStorage.getItem('status')
if (status !== null){

let status_info = JSON.parse(localStorage.getItem('user_key'))
console.log(status_info[0].username)


// [0]: statusinfo, [1]: orderer_id, [2]: restaurant_id
let check_status = [] = status.split('...')
console.log(check_status[1])

let page_not_updated;

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
        // date: status = JSON.parse(localStorage.getItem('order')) = status.date
        //console.log(status)
        
        else{
        return (<div></div>
            
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
