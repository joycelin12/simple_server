"use strict";

const port = 3000, //require the http and http-status-codes modules
	http = require("http"),
	httpStatus = require("http-status-codes"),
	app = http.createServer((request, response) => { //Create the server with request and server parameters
		console.log("Received an incoming request!");
		response.writeHead(httpStatus.OK, {
                 "Content-Type": "text/html"
		}); // write the response to the client.
                
		let responseMessage = "<h1>Hello, Universe!</h1>";
		response.write(responseMessage);
                response.end();
		console.log(`Sent a response : ${responseMessage}`);

	});

app.listen(port); //tell the application server to listen on port 3000
console.log(`The server has stared and listening on port number: ${port}`); 
