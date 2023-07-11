import React, { useState, useEffect } from 'react';
import './App.scss'
import axios from 'axios';

function App() {

  const [photos, setPhotos] = useState([]);

  const displayModal = (url) => {

    // Create modal to display JSON url
    var section = document.createElement("section");
    section.classList.add("modal");
    var img = document.createElement("img");
    img.classList.add("modal__img");

    img.src = (url);
    section.appendChild(img)

    // Show Modal
    var root = document.getElementById("root");
    root.appendChild(section)

    // Add close btn which deletes modal 
    var btn = document.createElement("button");
    btn.classList.add("modal__btn");
    section.appendChild(btn)
    btn.innerHTML = "Close";
    btn.focus() 

    btn.onclick = function(){
      section.outerHTML = ""
    };
  }

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
    <><h1>The Book of Lorem Ipsum</h1>
    <p>Click a page to view photo</p>
      <ul className="cards">
        {photos.map(photo => (
          <li className="card" key={photo.id}>
            <a className="card__link" href="#" onClick={displayModal.bind(this, photo.url)}>
              <img className="card__img" src={photo.thumbnailUrl} alt={photo.title} loading="lazy"></img>
              <h2 className="card__title">{photo.title}</h2>
              <span className="card__page-number">{photo.id}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;