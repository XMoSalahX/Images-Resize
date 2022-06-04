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
├── build # 
````


## To install this app 
  this app is complete, you don't need to install any packages
## Scripts:
	npm run build: to build js file  
	npm run jasmine: to test your app using jasmine  
	npm run test: to build js file then, test your app using jasmine  
	npm run start: to start nodemon server in ts file  
## to use this app:
	this app run on port: 8001  
	api endpoint : "/resize"    
	link with query string:  
    http://localhost:8001/resize?filename=test&width=800&height=400  
		
	you should to write qurey string in link:  
	filename: file name on the server that you want to change  
	width: the width you want to be  
	height: the width you want to be  
    
  
