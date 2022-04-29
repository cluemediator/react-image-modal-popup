import React, { useState } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  { title: "Kitten 1", caption: "Caption 1", url: "//placekitten.com/1500/500" },
  { title: "Kitten 2", caption: "Caption 2", url: "//placekitten.com/4000/3000" },
  { title: "Kitten 3", caption: "Caption 3", url: "//placekitten.com/800/1200" },
  { title: "Kitten 4", caption: "Caption 4", url: "//placekitten.com/1500/1500" }
];

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="app">
      <h3>Modal popup with an image in React - <a href="https://www.cluemediator.com" target="_blank" rel="noreferrer noopener">Clue Mediator</a></h3>

      <button onClick={() => setIsOpen(true)}>Preview Images</button>
      {isOpen && <Lightbox
        imageTitle={images[imgIndex].title}
        imageCaption={images[imgIndex].caption}
        mainSrc={images[imgIndex].url}
        nextSrc={images[(imgIndex + 1) % images.length].url}
        prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
      />}
    </div>
  );
}

export default App;