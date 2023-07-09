import React, { useState, useEffect } from 'react';
import './App.scss'
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}><img src={photo.thumbnailUrl} alt="{photo.title}" loading="lazy"></img> </li>
      ))}
    </ul>
  );
}

export default App;