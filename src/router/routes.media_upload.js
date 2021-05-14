'use strict';

const express = require('express');
const media = require('../controller/upload_media');
const upload = express.Router();

upload
  .post('/',media.videoUpload)
  .get('/getFiles',media.listOfvideo)
  // .post('/upload_profile/:phone_number',media.profil÷e_upload)
  .delete('/remove/:filename',media.deleteFile)

module.exports = upload;

//   .patch('/account/role/:searchString/:role', AccountCtrl.role)