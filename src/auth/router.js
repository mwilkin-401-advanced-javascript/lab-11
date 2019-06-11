'use strict';
/**
* authRouter
* @module authRouter - 
 */

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');


/**
* 
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
* 
 */

authRouter.get('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

/**
* 
 */

authRouter.get('/', auth, (res, req) => {

});

/**
* 
 */
 
authRouter.post('/', auth, (req, res) => {

});

module.exports = authRouter;
