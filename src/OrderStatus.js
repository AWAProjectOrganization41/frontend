import React, { useState, useEffect } from 'react'
import {  Link, useParams } from 'react-router-dom'
import styles from './OrderStatus.module.css'

export default function OrderStatus() {

var status = {}
var status_time

if (localStorage.getItem('status_time')===null){localStorage.setItem('status_time', 48);status_time = localStorage.getItem('status_time')}
else{status_time = localStorage.getItem('status_time')}

    if (localStorage.getItem('status_time')!==null){
        // date: status = JSON.parse(localStorage.getItem('order')) = status.date
        //console.log(status)
        
        return (
            <div className={styles.container}>
            {status.orderer_username} <div>TILAUKSENNE ON VALMISTUMASSA</div>ARVIOITU TOIMITUSAIKA:<div>{status_time} min</div></div>
            
        )
    }
    else{
    return (
        null
    )}
}