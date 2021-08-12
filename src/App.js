import './App.css';
// import React, { useState } from 'react'
import React from 'react'
import Title from './Title'

// Carousel
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import images from './images'

// Timeline
import { Chrono } from 'react-chrono';
import events from './events'


function App() {
  return (
    <div className="App">
      {/* Logo and title as website header */}
      <Title/>      
      <body className="App-header">
        <div style={{ width: "1000px"}}>
          {/* A timeline that shows different dates and the accompanying
            descriptions of the projects/activities performed. */}
          <Chrono 
            items={events} 
            mode="HORIZONTAL"
            cardWidth="1000px" 
            theme={{
              primary: "red",
              secondary: "orange",
              cardBgColor: "none",
              cardForeColor: "white",
              titleColor: "red"
            }} 
          >
            {/* Mock Disocvery Call */}
            <div>
              <a href="https://docs.google.com/document/d/1K-jvyuYqyNhXQ95FwiVftjFunh5_ROHXBKf87LcG9pQ/edit?usp=sharing">Technical Discovery Workbook</a>
              <p>Note: this is only available within Twilio Inc.</p>
            </div>
            {/* Solutions Brief */}
            <div>
              <a href="https://twilio.zoom.us/rec/share/rMjZLf0hIRxNxnNs7Pk8IsyvxHQygeKTRWrvydvrVO1UQsYZQiSGiFEf69Llkc0B.qkM3huG6Sav3jxx0">Solutions Brief Presentation</a>
              <p>Passcode: D7vAHxM+</p>
            </div>
            {/* WISE Demo using Owl Platform */}
            <div> 
              <a href="https://twilio.zoom.us/rec/share/YuNQfUROw_a08-X4_m93OVUggagYoya0F6CCSlzaEzWVPrVc8KxYfGHYOTzPuu_F.g3GqBuheU2qnwTXS?startTime=1625774543000">WISE Demo using Owl Platform</a>
              <p>Passcode: #r^0QC7+</p>
            </div>
            {/* Custom WISE Demo */}
            <div> 
              <a href="https://twilio.zoom.us/rec/share/HcRpZoMuR1dPwxS_1YyQoim9oFizvc6tULy8vT74BNeh6QgpgbLCvJkvEPTiUzKy.cWKJiNfSEWVUB-cj">Custom WISE Demo</a>
            </div>
            {/* WISE Showcase */}
            <div> 
              <a href="https://twilio.zoom.us/rec/share/rrlTS8mWdZETzjyhb5wUnT82muC2E8PVbleOSL4BnfL3BoMd1JPbPf0ZL5b1k1Ja.brEIVvaLLCKo42CJ?startTime=1627669958000">WISE Showcase</a>
            </div>
            {/* Technical Win */}
            <div>
              <a href="https://twilio.zoom.us/rec/share/8yLFWjfqV886OHR_q8wlm5TQo6VvVt3vfE_EQraR7NYYv0Ra0oo-JAOyNrIKsBEs.VfkYWqWsAFPqbSrs">Technical Win</a>
              <p>Passcode: 2=Ffhd8E</p>
            </div>
          </Chrono>
          {/* Carousel title to display each image's title */}
          <h3>Internship highlights</h3>
          {/* The carousel itself */}
          <ImageGallery
            items={images}
          />
          {/* Just a little spacing between the carousel and footer */}
          <h3> </h3>
        </div>
      </body>
        <footer class="site-footer">
            Copyright © 2021 Leonardo Baleon | All rights reserved
        </footer>
    </div>
    
  );
}

export default App;