import React from "react";
import "aframe"; // Import A-Frame
import AframeComponent from "./components/AframeComponent.jsx";
import { useState } from "react";

function App() {
  const [imgsrc, setImgsrc] = useState("#cubes");
  return (
    <a-scene>
      <a-assets>
        <audio
          id="click-sound"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"
        ></audio>

        <img
          id="city"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"
        />
        <img
          id="city-thumb"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"
        />
        <img
          id="cubes"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg"
        />
        <img
          id="cubes-thumb"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg"
        />
        <img
          id="sechelt"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
        />
        <img
          id="sechelt-thumb"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg"
        />
        <img
          id="demon"
          src="https://sketchfab.com/3d-models/demon-mask-8f25337b683d415e8f393eff60bc2aa1"
        />
      </a-assets> 

      <a-sky id="image-360" radius="10" src={imgsrc}></a-sky>

      <AframeComponent
        thumb="#city-thumb"
        src="#city"
        position=" 1.5 0 -3"
        setImgsrc={setImgsrc}
      ></AframeComponent>
      <AframeComponent
        thumb="#cubes-thumb"
        src="#cubes"
        position="0 0 -3"
        setImgsrc={setImgsrc}
      ></AframeComponent>
      <AframeComponent
        thumb="#sechelt-thumb"
        src="#sechelt"
        position="-1.5 0 -3"
        setImgsrc={setImgsrc}
      ></AframeComponent>

      <a-camera>
        <a-cursor
          id="cursor"
          animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
          animation__clickreset="property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click"
          animation__fusing="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing"
          color="yellow"
        ></a-cursor>
      </a-camera>
    </a-scene>
  );
}

export default App;
