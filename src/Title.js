// src/Title.js

import React from 'react'
import './Title.css'
import logo from './logo-twilio-mark red.png'

function Title() {
  return (
    <div class="row">
        {/* Split into 2 columns to allow the Twilio logo to appear next to the
          title text. */}
        <div class="column">
            {/*Animated Twilio logo*/}
            <img src={logo} className="App-logo" alt="logo" height="220px"/>
        </div>
        <div class="column">
            {/* Website title */}
            <h2>Leonardo Baleon - Solutions Portfolio</h2>
        </div>
    </div>   
  )
}

export default Title