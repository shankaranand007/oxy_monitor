'use strict';

const express = require('express');
const ticketController = require('../controller/ticket');
const loginRouter = express.Router();

loginRouter
  .post('/create/:phoneNumber',ticketController.newReq)
  .post('/addStock',ticketController.addStock)
  .get('/',ticketController.listOfReq)
  .post('/approve',ticketController.approveReq)





//   .get('/getFiles',media.listOfvideo)
  // .post('/upload_profile/:phone_number',media.profil÷e_upload)
//   .delete('/remove/:filename',media.deleteFile)

module.exports = loginRouter;

//   .patch('/account/role/:searchString/:role', AccountCtrl.role)