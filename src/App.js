import React, { useState, useEffect } from 'react';
import './App.scss'
import axios from 'axios';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function App() {

  const [photos, setPhotos] = useState([]);

  Modal.setAppElement('#root');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return (
    <ul className="cards">
      {photos.map(photo => (
        <li className="card" key={photo.id}>
          <img className="card__img" src={photo.thumbnailUrl} alt={photo.title} loading="lazy"></img>
          <h2 className="card__title">{photo.title}</h2> 
          <span className="card__page-number">{photo.id}</span>
        </li>
      ))}
    </ul>
  );
}

export default App;