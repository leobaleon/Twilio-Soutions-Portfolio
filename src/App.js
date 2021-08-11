import './App.css';
import Title from './Title'
// import React, { useState } from 'react'
import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    title: 'Sample Picture 1',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    title: 'Sample Picture 2',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    title: 'Sample Picture 3',
  },
];

function App() {
  // const [title,setTitle] = useState("Default");

  return (
    <div className="App">
      <Title/>      
      <body className="App-header">
        {/*<h3>{title}</h3>*/}
        <ImageGallery
          items={images}
        />
      </body>
    </div>
  );
}

export default App;