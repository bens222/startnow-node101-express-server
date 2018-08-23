n this project we're going to:
Create a new server using the Express framework
Log all incoming requests with the morgan logging library
Serve the Top Spots project from the web server
Serve the Top Spots data from the web server
Update your Top Spots front end with your new back end
We're going to be using the popular Express framework to build a simple server similar to the last one. Only instead of responding with "Hello World" we're going to serve an entire directory and some data for our application.
A framework is a full collection of tools and patterns used to simplify development, as compared to a library which is a small set of tools typically used to accomplish a specific task.
The Express web framework provides us with a set of tools to make it easier to build web servers.
You'll be using morgan to log each request to the console (on the server side).
You will build a web server that will respond to requests for http://localhost:3000/ and return our application's resources.
The web server should also respond to GET requests at http://localhost:3000/data with all the data from data.json.