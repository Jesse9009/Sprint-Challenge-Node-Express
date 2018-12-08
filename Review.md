# Review Questions

## What is Node.js?

Node.js is a runtime environment for javascript. It allows JS to be used on for back end code rather than just being used in the browser for front end code.

## What is Express?

Express is a framework for Node.js that allows developers to build servers more easily. Express has methods and middleware already built in for developers to use.

## Mention two parts of Express that you learned about this week.

We learned about HTTP methods and how to use them, and we learned about what middleware is, how to use built-in middleware, 3rd party middleware, and custom middleware.

## What is Middleware?

Middleware is an 'add on' to the core functionality of a system. In the case of express, express is pretty lightweight so it's functionality is relatively limited. To get desired functionality, a developer can use middleware that performs the desired functionality.

## What is a Resource?

A resource is a source of data. In our case, we had an actions resource that contained all of our action data, and a project resource that contained all of our project data. I don't have a much more solid grasp of how to explain a resource any other way. I am hoping that with more time, I will come up with a better explanation.

## What can the API return to help clients know if a request was successful?

An API can return status codes and messages to let the client know if a request was successful.

## How can we partition our application into sub-applications?

We can partition our app into sub-apps by using routes. Instead of putting all of our endpoints and HTTP methods on a single file, we can separate them out. Any HTTP calls that are done to similar URLs can be grouped together in a route file. Then the route file can be imported (required) into the index.js file.

## What is express.json() and why do we need it?

Express.json is built in middleware that parses the request body for us. We need it to be able to handle the incoming request properly.
