# A-Frame Gallery App

This project is a React-based web application that utilizes A-Frame for creating an immersive VR experience. The application showcases a simple 360-degree image gallery where users can select different scenes using clickable thumbnails.

# Features

- 360-degree image viewing.
- Interactive thumbnails to change the scene.
- Integration of sound effects on clicking.

# Getting Started

# Prerequisites

Ensure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

# Installation
    1. Get the necessary file installed in your system using npm install
    2. Don't forget to download aframe from npm i aframe

# Running the Application
After installation, you can run the application locally using:
    npm run dev

# Components:
App.js
App.js is the main React component that sets up the A-Frame scene. It includes multiple instances of AframeComponent to display different images as selectable options in the VR environment.

# AframeComponent:
The AframeComponent is a reusable React component that represents an interactive element in the A-Frame scene. It is used to display clickable thumbnails that switch the main scene's image.

# Props:
thumb: URL of the thumbnail image.
src: URL of the main image to display on click.
position: Position of the thumbnail in the scene.
setImgsrc: Function to update the main image displayed.


# Working:
On computers
You can move in any direction using arrows. The cursor is yellow fixed at the center. You can click using the cursor on the aframe components of cube, city and sechelt. This will change the background image as mapped to that entity.

# On Vr:
The functionality will be same and you can click just by gazing at that component.

# More Information:
Make sure you have a stable and fast internet connection
