import './App.css';
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
  // React Hook useState for Carousel
  // const [title,setTitle] = useState("Default");

  return (
    <div className="App">
      {/* Logo and title as website header */}
      <Title/>      
      <body className="App-header">
        {/* Carousel title to display each image's title */}
        <h3>Carousel Item Title</h3>
        {/* The carousel itself */}
        <ImageGallery
          items={images}
        />
        <h1> </h1>
        {/* A timeline that shows different dates and the accompanying
            descriptions of the projects/activities performed. */}
        <div style={{ width: "1000px"}}>
          <Chrono 
            items={events} 
            mode="HORIZONTAL"
            cardHeight="500px" 
            cardWidth="1000px" 
            useReadMore="true"
            theme={{
              primary: "red",
              secondary: "orange",
              cardBgColor: "gray"
            }} 
          />
        </div>
      </body>
    </div>
  );
}

export default App;