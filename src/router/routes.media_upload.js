'use strict';

const express = require('express');
const media = require('../controller/upload_media');
const upload = express.Router();

upload
  .post('/',media.videoUpload)
  .get('/getFiles',media.listOfvideo)
  .delete('/remove/:filename',media.deleteFile)

module.exports = upload;