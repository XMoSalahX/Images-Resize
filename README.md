# Images-Resize
The API aims to resize the image to the client-side to avoid wasting server space using the Node JS framework and the Sharp package.

## What You're Getting

````bash
┌── assets # The folder containing the images to be modified.
│    ├── encenadaport.jpg # One of the images to be modified.
│    ├── fjord.jpg # One of the images to be modified.
│    ├── icelandwaterfall.jpg # One of the images to be modified.
│    ├── palmtunnel.jpg # One of the images to be modified.
│    └── santamonica.jpg # One of the images to be modified.
├── spec # The forlder containing the specifications for unit testing.
│    └── support # The folder containing the specifications for unit testing.
│        └── jasmine.json # The specification for unit testing.
├── src # The folder containing the source code.
│    ├── routes # The folder containing */resize* route.
│    │    └── resize.ts # The source code for the */resize* route.
│    ├── tests # The folder containing jasmine configuration file and specs.
│    │    ├── helpers # The folder containing the helpers for unit testing.
│    │    └── indexSpec.ts # The source code for the unit testing.
│    ├── utilities # The folder containing the utilities for the application.
│    │    └── fun.ts # The source code for the utilities.
│    └── index.ts # The source code for the application.
├── tsconfig.json # The configuration file for the TypeScript compiler.
├── package-lock.json # The configuration file for the npm package manager.
├── package.json # The configuration file for the npm package manager.
└── README.md # The README file.

````


## Cloneing

To clone this application: `git clone https://github.com/XMoSalahX/Images-Resize.git`

## Installation

Go to this path `cd Images-Resize` and run the following command: `npm install`

## Scripts:
- To build js file: `npm run build`  
- To test your app using jasmine: `npm run jasmine`  
- To build js file then, test your app using jasmine: `npm run test`  
- To start nodemon server in ts file: `npm run start`  

## To use this app:

this app run on port: **8001**  
api endpoint : **"/resize"**       
link with query string:
**http://localhost:8001/resize?filename=test&width=800&height=400**   
	
### You should to write qurey string in link: 

**filename:** file name on the server that you want to change  
**width:** the width you want to be  
**height:** the width you want to be  

## App Dependencies

- Node JS `v18.1.0`
- Express `v4.17.2`
- Sharp `v0.30.1`
    
  
