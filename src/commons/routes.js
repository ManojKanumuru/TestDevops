'use strict';

var express = require('express');

let apiRoutes = express.Router();

const userController = require('./../controller/userController');

module.exports = function(app){

	apiRoutes.get('/user/details', userController.getUserDetails);

	//apiRoutes.get('/users/getProfile', userController.getProfile);
	
	app.use('/api', apiRoutes);
}