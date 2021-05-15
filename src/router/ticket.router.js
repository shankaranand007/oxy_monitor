'use strict';

const express = require('express');
const ticketController = require('../controller/ticket');
const loginRouter = express.Router();

loginRouter
  .post('/create/:phoneNumber',ticketController.newReq)
  .post('/addStock',ticketController.addStock)
  .get('/',ticketController.listOfReq)
  .post('/approve',ticketController.approveReq)
  .get('/available',ticketController.getAvailabilities)
  .get('/getDashboard',ticketController.getDashboard)
  .post('/returnStock',ticketController.returnAvailability)



module.exports = loginRouter;