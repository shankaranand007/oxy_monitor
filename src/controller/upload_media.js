const output = require('../helper/api');
var fs = require('fs');
const path = require('path');
const upload = require('../helper/uploder');

var mongoose = require('mongoose');



const dir = './storage';
const multer = require('multer');
var time;
var time2;


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storage')
    },
    filename: function (req, file, cb) {
        time = file.fieldname + '-' + Date.now() + '.png';
        cb(null, time)
        time2 = "http://3.6.144.94/chewy-media_storage/storage/" + time
        console.log("http://3.6.144.94/chewy-media_storage/storage/" + time)

    }
});

const upload_profile = multer({ storage: storage }).single('profile');


class file_uploadController {

    videoUpload(req, res) {
        return new Promise(function (resolve, reject) {
            upload(req, res, function (err,data) {
                if (err !== null) {return reject(output.invalid(req, res, err));}
                else {console.log(data);resolve(output.ok(req, res, data, "uploaded", 0))}
            });
        });
    }

    // profile_upload(req, res) {
    //     return new Promise(function (resolve, reject) {
    //         upload_profile(req, res, function (err,data) {
    //             console.log(req.params.phone_number,time2)
    //             loginModel.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.phone_number)
    //             },{$set:{'profile_pic':time2}})
    //             .exec((err,data)=>{
    //                 console.log(err,'scsdfksdbfisdbfbfisdbsdb')
    //                 data['profile_pic'] = time2;
    //             if (err) return reject(output.invalid(req, res, err));
    //             resolve(output.ok(req, res, data, "uploaded", 0))
    //             })
    //         });
    //     });
    // }

    listOfvideo(req,res){
        fs.readdir(dir, (error, fileNames) => {
            if (error) output.invalid(req, res, error);
            else if(fileNames){
            fileNames.forEach(filename => {
              // get current file name
              const name = path.parse(filename).name;
              // get current file extension
              const ext = path.parse(filename).ext;
              // get current file path
              const filepath = path.resolve(dir, filename);
        
              // get information about the file
              fs.stat(filepath, function(error, stat) {
                if (error) throw error;
        
                // check if the current path is a file or a folder
                const isFile = stat.isFile();
        
                // exclude folders
                if (isFile) {
                  // callback, do something with the file
                  let data = {
                      "filepath":filepath,
                      "name":name,
                      "ext":ext,
                      "stat":stat
                  }
                  
                }
              });
            });
            output.ok(req, res, fileNames, "file list", 0)
        }else{
            // output.ok(req, res, [], "sub catagory", 0)
        }
        })
    }

    deleteFile(req,res){
        let path = dir+'/'+req.params.filename;
        fs.unlink(path, (err,data) => {
            if (err) output.invalid(req, res, err);
            else output.ok(req, res, [], "file deleted", 0)
          });
          
    }
}

module.exports =  new file_uploadController();
