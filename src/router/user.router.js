'use strict';

const express = require('express');
const login = require('../controller/user');
const loginRouter = express.Router();

loginRouter
  .get('/sendOTP/:phoneNumber',login.sendsms)
  .get('/verifyOTP/:phoneNumber/:otp',login.verifyOTP)
  .post('/updateInfo/:phoneNumber',login.UpdateInfo)


//   .get('/getFiles',media.listOfvideo)
  // .post('/upload_profile/:phone_number',media.profil÷e_upload)
//   .delete('/remove/:filename',media.deleteFile)

module.exports = loginRouter;

//   .patch('/account/role/:searchString/:role', AccountCtrl.role)