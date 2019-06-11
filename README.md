# Lab-11 Authentication Server

[![Build Status](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-11.svg?branch=master)](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-11)

### Author: Felipe Delatorre and Matt Wilkin

### Links and Resources

[Submission PR](https://github.com/mwilkin-401-advanced-javascript/lab-11/pull/1)

[Travis](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-11)

[Heroku](https://hidden-lake-68893.herokuapp.com/)

* UML <img src="./assets/Book_App_UML.png" width="400">

### Documentation

Dependencies

  bcrypt
  cors 
  debug 
  dotenv
  eslint
  express
  jest
  jsonwebtoken
  mongodb-memory-server
  mongoose
  mongoose-schema-jsonschema
  morgan
  require-directory
  supertest
  swagger-ui-express

Modules


Exported Values and Methods


### Setup

Running the app
npm start

### Tests

How do you run tests?
npm test

What assertions were made?
What assertions need to be / should be made?

_________________
_________________

Project Guidelines

Getting Started

You’ve been provided a server code with the authentication middleware, models and routes scaffolded in.

There are some potential bugs and missing logic.
Work with a partner!

Requirements

Assignment: Auth Server

Create a UML diagram of the authentication system on a whiteboard

Identify and fix any bugs

NEW CODE: Protect the /book and /book/:id routes by requiring user authentication

Document and publish the code with JSDoc

Testing

POST to /signup to create a new user

POST to /signin to login as a user (use basic auth)

Need tests for auth middleware and the routes

Does the middleware function (send it a basic header)

Do the routes assert the requirements (signup/signin)

Are the book routes protected properly?

Ensure that you use supergoose instead of mongo/express

Notes

Signup with httpie:

echo '{"username":"name","password":"pass"}' | http post :3000/signup
Signin with httpie:

http post :3000/signin -a username:password
You may also use Postman or RESTy