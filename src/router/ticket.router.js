'use strict';

const express = require('express');
const login = require('../controller/user');
const loginRouter = express.Router();

loginRouter
  .get('/create/:phoneNumber',login.sendsms)


//   .get('/getFiles',media.listOfvideo)
  // .post('/upload_profile/:phone_number',media.profil÷e_upload)
//   .delete('/remove/:filename',media.deleteFile)

module.exports = loginRouter;

//   .patch('/account/role/:searchString/:role', AccountCtrl.role)