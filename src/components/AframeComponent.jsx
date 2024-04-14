import React from "react";
import { useRef, useEffect } from "react";
import "aframe"; // Import A-Frame

const AframeComponent = ({ thumb, src, position, setImgsrc }) => {
  const entityRef = useRef(null);

  useEffect(() => {
    const entity = entityRef.current;
    if (entity) {
      entity.addEventListener("click", () => {
        setImgsrc(src);
        console.log("Image changed to:", src);
      });
    }
  }, [setImgsrc]);
  return (
    <a-scene>
      <a-assets>
        <audio
          id="click-sound"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"
        ></audio>
      </a-assets>
      <a-entity
        ref={entityRef}
        class="link"
        geometry="primitive: plane; height: 1; width: 1"
        material={`shader: flat; src: ${thumb}`}
        sound="on: click; src: #click-sound"
        position={position}
        event-set__mouseenter="scale: 1.2 1.2 1"
        event-set__mouseleave="scale: 1 1 1"
      ></a-entity>
    </a-scene>
  );
};

export default AframeComponent;
