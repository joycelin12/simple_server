"use strict";

const routeResponseMap = {
	
	"/info" : "<h1>Info Page</h1>",
	"/contact" : "<h1>Contact Us</h1>",
	"/about" : "<h1>Learn More About Us </h1>",
	"/hello" : "<h1>Say hello by emaling us here</h1>",
	"/error" : "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000, //require the http and http-status-codes modules
	http = require("http"),
	httpStatus = require("http-status-codes"),
	app = http.createServer((req, res) => { //Create the server with request and server parameters
		console.log("Received an incoming request!");
		res.writeHead(httpStatus.OK, {
                 "Content-Type": "text/html"
		}); // write the response to the client.

		if(routeResponseMap[req.url]) {

                    setTimeout(() => res.end(routeResponseMap[req.url]), 2000); //Wrap a request with setTimeout to delay the response manually
		} else {
		    res.end("<h1>Welcome!</h1>")	
  
		}
                
	
	});

app.listen(port); //tell the application server to listen on port 3000
console.log(`The server has stared and listening on port number: ${port}`); 
