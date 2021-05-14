'use strict';

const express = require('express');
const volunteers = require('../controller/volunteers');
const volunteersRouter = express.Router();

volunteersRouter
  // .get('/sendOTP/:phoneNumber',login.sendsms)
  // .get('/verifyOTP/:phoneNumber/:otp',login.verifyOTP)

//   .get('/getFiles',media.listOfvideo)
  // .post('/upload_profile/:phone_number',media.profil÷e_upload)
//   .delete('/remove/:filename',media.deleteFile)

module.exports = volunteersRouter;

//   .patch('/account/role/:searchString/:role', AccountCtrl.role)