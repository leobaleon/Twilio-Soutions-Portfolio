// src/Title.js

import React from 'react'
import './Title.css'
import logo from './logo-twilio-mark red.png'

function Title() {
  return (
    <div class="row">
        <div class="column">
            <img src={logo} className="App-logo" alt="logo" height="220px"/>
        </div>
        <div class="column">
            <h2>Leonardo Baleon - Solutions Portfolio</h2>
        </div>
    </div>   
  )
}

export default Title