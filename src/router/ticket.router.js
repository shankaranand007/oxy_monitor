'use strict';

const express = require('express');
const ticketController = require('../controller/ticket');
const loginRouter = express.Router();

loginRouter
  .post('/create/:phoneNumber',ticketController.newReq)
  .post('/saveStock',ticketController.saveStock)
  .get('/',ticketController.listOfReq)
  .post('/approve',ticketController.approveReq)
  .post('/reject',ticketController.rejectReq)
  .post('/close',ticketController.closeReq)
  .get('/available',ticketController.getAvailabilities)
  .get('/getDashboard',ticketController.getDashboard)
  .get('/getReports',ticketController.getReports)
  .post('/returnStock',ticketController.returnAvailability)



module.exports = loginRouter;
