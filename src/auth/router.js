'use strict';

/**
* authRouter
* @module src/auth/router 
 */

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');


/**
* @method post
* @param {Object} req - request object
* @param {Object} res - response object
* @param {Object} next - middleware call
* @desc signup new user
*/

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

/**
* @method get
* @param {function} auth - authorization function to secure route
* @param {Object} req - request object
* @param {Object} res - response object
* @param {Object} next - middleware call
* @desc signin user
*/ 

authRouter.get('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

/**
* @method get
* @param {function} auth - authorization function to secure route
* @param {Object} req - request object
* @param {Object} res - response object
* @desc something here
*/

authRouter.get('/', auth, (res, req) => {

});

/**
* @method post
* @param {function} auth - authorization function to secure route
* @param {Object} req - request object
* @param {Object} res - response object
* @desc something here
*/
authRouter.post('/', auth, (req, res) => {

});


/**
* Export method
* @type {Method}
 */

module.exports = authRouter;
