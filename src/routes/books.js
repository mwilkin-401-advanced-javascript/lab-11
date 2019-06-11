'use strict';

/**
 * @module src/routes/books
 */


const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware');

/**
 * Get a list of records for model provided
 * @route GET /{model}
 * @param {string} model.path.required - Resource model name
 * @param {function} auth - authorization function to secure route
 * @returns {Object} - { count: , results: [{}, {}]}
 */

router.get('/books', auth, handleGetAll);

/**
 * Gets a list of records for model with id provided
 * @route GET /{model}/{id}
 * @param {function} auth - authorization function to secure route
 * @param {string} model.path.required - Resource model name
 * @param {number} id.path.required - Resource model name
 * @consumes 
 * @returns {Object} 200 - { count: 3, results: [{}, {}, {}]}
  */

router.get('/books/:id', auth, handleGetOne);

// Route Handlers

/**
* @function handleGetAll
* @param {Object} request - request object
* @param {Object} response - response object
* @param {function} next - calls next middleware
* @desc Middleware that handle get all route call
* @returns {Object} 200 - json(books)
*
* */

function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

/**
* @function handleGetOne
* @param {Object} request - request object
* @param {Object} response - response object
* @param {function} next - calls next middleware
* @desc Middleware that handle get one route call
* @returns {Object} 200 - json(book)
*
* */


function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

/**
* Export object with app and start methods attached
* @type {Object}
 */

module.exports = router;
