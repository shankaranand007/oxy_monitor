'use strict';
var async = require('async');
const util = require("util");
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
        time2 = "http://127.0.0.1/storage/" + time
        console.log("http://127.0.0.1/storage/" + time)

    }
});

const upload = multer({ storage: storage }).single('item_img');


function uploadAsync(req, res) {
    return new Promise(function (resolve, reject) {
        upload(req, res, function (err) {
            if (err !== null) return reject(err);
            resolve();
        });
    });
}

class CatagoryController {
    constructor(con) {
        this.config = con;
        // this.test()
    }

    test(req, res, callback) {
        console.log("test")
        return "dt"
    }

     multer_testing(req, res) {
        // try{
        // output.ok(req, res, "result2", "catagory added", 0)
        upload(req, res, function (err) { console.log(req.body); output.ok(req, res, time2, "catagory added", 0) })
        // var resp = await Uploader(req, res);
        // dd = this.test();
        //  let data = upload(req,res);
        //  console.log(data)
        //  output.ok(req, res, "time2", "catagory added", 0)
        // } catch(ex){
        //     output.serverError(req, res, ex)
        // }
    }
    search(req, res) {
        try {
            if (req.params.search) {
                let search_key = req.params.search + '%';
                db.query(select.search_name, search_key, (err, result) => {
                    if (err) console.log(err)
                    output.ok(req, res, result, "search name", 0)
                })
            } else { output.ok(req, res, [], "invalid values", 1) }
        } catch (ex) { output.serverError(req, res, ex) }
    }
    get_catagory2(req, res) {
        new Promise((resolve, reject) => {
            db.query(select.get_catagory_all, (err, result2) => {
                console.log(result2)
                resolve(output.ok(req, res, result2, "catagory", 0))
            })
        })
    }



    catagory(req, res) {
        upload(req, res, (err) => {
        if (Object.keys(req.body).length) {
            (req.file) ? req.body['catagory_image'] = time2 : "no file";
            new Promise((resolve, reject) => {
                db.query(insert.catagory, req.body, (err, result) => {
                    if (err) {
                        reject(output.invalid(req, res, err))
                    } else {
                        db.query(select.get_catagory_all, (err, result2) => {
                            resolve(output.ok(req, res, result2, "catagory added", 0))
                        })
                    }
                })
            })
        } else {
            output.ok(req, res, [], "No Data found", 1)
        }
    });
    }

    get_sub_catagory(req, res) {
        
        new Promise((resolve, reject) => {
            db.query(select.get_sub_catagory, (err, result2) => {
                resolve(output.ok(req, res, result2, "sub catagory", 0))
            })
        })
    }

    sub_catagory(req, res) {
        upload(req, res, (err) => {
            if (err) output.invalid(req, res, err)
           
        if (Object.keys(req.body).length) {
            // console.log(time2,'time2')
            (req.file) ? req.body['sub_catagory_image'] = time2 : "no file";
            new Promise((resolve, reject) => {
                db.query(insert.sub_catagory, req.body, (err, result) => {
                    if (err) {
                        reject(output.invalid(req, res, err))
                    } else {
                        db.query(select.sub_catagory, (err, result2) => {
                            resolve(output.ok(req, res, result2, "sub catagory added", 0))
                        })
                    }
                })
            })
        }
        else {
            output.ok(req, res, [], "No Data found", 1)
        }
    });
    }
    get_offer(req, res) {
        new Promise((resolve, reject) => {
            db.query(select.get_offer, (err, result2) => {
                resolve(output.ok(req, res, result2, "offer", 0))
            })
        })
    }
    delete_sub_catogory(req,res){
        console.log(req.params.sub_id,'sub_id')
        db.query(dele.del_sub_catagory,req.params.sub_id,(err,result)=>{
            output.ok(req, res, result, "delete sub catogory", 0)
        })
    }
    offer(req, res) {
        upload(req, res, (err) => {
        if (Object.keys(req.body).length) {
            (req.file) ? req.body['image'] = time2 : "no file";
            new Promise((resolve, reject) => {
                db.query(insert.offer, req.body, (err, result) => {
                    if (err) {
                        reject(output.invalid(req, res, err))
                    } else {
                        db.query(select.offer, (err, result2) => {
                            resolve(output.ok(req, res, result2, "sub offer added", 0))
                        })
                    }
                })
            })
        }
        else {
            output.ok(req, res, [], "No Data found", 1)
        }
    })
    }

    get_flavoure(req, res) {
        new Promise((resolve, reject) => {
            db.query(select.get_flavoure, (err, result2) => {
                resolve(output.ok(req, res, result2, "flavoure", 0))
            })
        })
    }

    flavoure(req, res) {
        if (Object.keys(req.body).length) {
            new Promise((resolve, reject) => {
                db.query(insert.flavoure, req.body, (err, result) => {
                    if (err) {
                        reject(output.invalid(req, res, err))
                    } else {
                        db.query(select.flavoure, (err, result2) => {
                            resolve(output.ok(req, res, result2, "sub flavoure added", 0))
                        })
                    }
                })
            })
        }
        else {
            output.ok(req, res, [], "No Data found", 1)
        }
    }
    get_discount(req, res) {
        new Promise((resolve, reject) => {
            db.query(select.get_discount, (err, result2) => {
                resolve(output.ok(req, res, result2, "discount", 0))
            })
        })
    }

    discount(req, res) {
        upload(req, res, (err) => {
        if (Object.keys(req.body).length) {
            (req.file) ? req.body['image'] = time2 : "no file";
            new Promise((resolve, reject) => {
                db.query(insert.discount, req.body, (err, result) => {
                    if (err) {
                        reject(output.invalid(req, res, err))
                    } else {
                        db.query(select.discount, (err, result2) => {
                            resolve(output.ok(req, res, result2, "sub discount added", 0))
                        })
                    }
                })
            })
        }
        else {
            output.ok(req, res, [], "No Data found", 1)
        }
    })
    }
    
    get_ingredients(req, res) {
        new Promise((resolve, reject) => {
            db.query(select.get_ingredients, (err, result2) => {
                resolve(output.ok(req, res, result2, "ngredients", 0))
            })
        })
    }

    ingredients(req, res) {
        if (Object.keys(req.body).length) {
            new Promise((resolve, reject) => {
                db.query(insert.ingredients, req.body, (err, result) => {
                    if (err) {
                        reject(output.invalid(req, res, err))
                    } else {
                        db.query(select.ingredients, (err, result2) => {
                            resolve(output.ok(req, res, result2, "sub ingredients added", 0))
                        })
                    }
                })
            })
        }
        else {
            output.ok(req, res, [], "No Data found", 1)
        }
    }


    add_catagory(req, res) {
        try {
            upload(req, res, (err) => {
                if (err) output.invalid(req, res, err)
                if (Object.keys(req.body).length) {
                    (req.file) ? req.body['img_url'] = time2 : console.log("no file");
                    new Promise((resolve, reject) => {
                        // req.body['offer'] = JSON.stringify(req.body['offer'])
                        // req.body['ingredients'] = JSON.stringify(req.body['ingredients'])
                        // req.body['flavoured'] = JSON.stringify(req.body['flavoured'])
                        db.query(insert.add_catagory, req.body, (err, result) => {
                            if (err) {
                                reject(output.invalid(req, res, err))
                            } else {
                                db.query(select.get_catagory_all, (err, result2) => {
                                    resolve(output.ok(req, res, result2, "Dish added", 0))
                                })
                            }
                        })
                    })
                        .catch(err => {
                            output.serverError(req, res, err)
                        });
                } else {
                    output.ok(req, res, [], "invalid values", 1)
                }
            })
        } catch (ex) {
            output.serverError(req, res, ex)
        }
    }
    

    updateCatagory(req, res) {
        try {
            upload(req, res, (err) => {
                if (err) output.invalid(req, res, err)
                if (Object.keys(req.body).length) {
                    (req.file) ? req.body['img_url'] = time2 : console.log("no file");
                    new Promise((resolve, reject) => {
                        // req.body['offer'] = JSON.stringify(req.body['offer'])
                        // req.body['ingredients'] = JSON.stringify(req.body['ingredients'])
                        // req.body['flavoured'] = JSON.stringify(req.body['flavoured'])
                        db.query(update.update_catagory, [req.body,req.params.dish_id], (err, result) => {
                            if (err) {
                                reject(output.invalid(req, res, err))
                            } else {
                                db.query(select.get_catagory_all, (err, result2) => {
                                    resolve(output.ok(req, res, result2, "Dish update", 0))
                                })
                            }
                        })
                    })
                        .catch(err => {
                            output.serverError(req, res, err)
                        });
                } else {
                    output.ok(req, res, [], "invalid values", 1)
                }
            })
        } catch (ex) {
            output.serverError(req, res, ex)
        }
    }


    catagory_delete(req,res){
        if(req.params.cat_id){
            db.query(dele.delete_catagory,req.params.cat_id,(err,result)=>{
                if (err) {
                    output.invalid(req, res, err)
                } else {
                    output.ok(req, res, result, "catagory deleted successfully", 0)
                }
            })
        }
    }
    del_catagory(req, res) {
        try {
            // if (req.params.item_id) {
            if (req.params.item_id) {
                db.query(dele.semi_del_catagory, req.params.item_id, (err, result) => {
                    if (err) {
                        output.invalid(req, res, err)
                    } else {
                        output.ok(req, res, result, "catagory deleted successfully", 0)
                    }
                })
            } else {
                output.ok(req, res, [], "invalid values", 1)
            }
            //} 
            // else {
            //     output.ok(req, res, [], "invalid values", 1)
            // }

        } catch (ex) { output.serverError(req, res, ex) }
    }

    async get_catagory(req, res) {
        try {
            if (req.params.seprate) {

                async.parallel({
                    item: (callback) => {
                        db.query((req.params.seprate == 0 ) ? select.get_Catagory_no : select.get_Catagory_yes, (err, result) => {
                            if (err) {
                                callback(err, [])
                            } else {
                                callback(null, result)
                            }
                        })
                    },
                    discount: (callback) => {
                        db.query(select.get_discount, (err, result) => {
                            if (err) {
                                callback(err, [])
                            } else {
                                callback(null, result)
                            }
                        })
                    },
                    offer: (callback) => {
                        db.query(select.get_offer, (err, result) => {
                            if (err) {
                                callback(err, [])
                            } else {
                                callback(null, result)
                            }
                        })
                    },
                    ingredients: (callback) => {
                        db.query(select.get_ingredients, (err, result) => {
                            if (err) {
                                callback(err, [])
                            } else {
                                callback(null, result)
                            }
                        })
                    },
                    catagory: (callback) => {
                        db.query(select.get_catagory_all, (err, result) => {
                            if (err) {
                                callback(err, [])
                            } else {
                                callback(null, result)
                            }
                        })
                    },
                    sub_catagory: (callback) => {
                        db.query(select.get_sub_catagory, (err, result) => {
                            if (err) {
                                callback(err, [])
                            } else {
                                callback(null, result)
                            }
                        })
                    },
                    flavoured: (callback) => {
                        db.query(select.get_flavoure, (err, result) => {
                            if (err) {
                                output.invalid(req, res, err)
                                callback(err, [])
                            } else {
                                callback(null, result)
                            }
                        })
                    }
                },
                    (err, result) => {
                        if (err) output.invalid(req, res, err)
                        // let result = []
                        output.ok(req, res, result, "catagory list", 0)
                    }
                )

            } else {
                output.ok(req, res, [], "invalid values", 1)
            }

        } catch (ex) { output.serverError(req, res, ex) }
    }

    update_features(req, res) {
        try {
            // console.log("array", req.params.seprate)
            upload(req, res, (err) => {
                (req.file) ? req.body['image'] = time2 : console.log("no file");
            db.query((req.params.seprate == 'discount') ? update.discount_update : (req.params.seprate == 'flavoure') ? update.flavoure_update : (req.params.seprate == 'ingredients') ? update.ingredients_update : (req.params.seprate == 'offer') ? update.offer_update : "", [req.body, req.body.id], (err, result) => {
                if (err) {
                    // reject()
                    output.invalid(req, res, err)
                } else {
                    // db.query(select.get_Catagory, (err, result2) => {
                    // resolve()
                    output.ok(req, res, result, "catagory updated", 0)
                    // })
                }
            })
        })
        } catch (ex) {
            output.serverError(req, res, ex)
        }
    }
    delete_features(req, res) {
        try {
            db.query((req.params.seprate == 'discount') ? dele.discount : (req.params.seprate == 'flavoure') ? dele.flavoure : (req.params.seprate == 'ingredients') ? dele.ingredients : (req.params.seprate == 'offer') ? dele.offer : '', req.params.delete_id, (err, result) => {
                if (err) {
                    // reject()
                    output.invalid(req, res, err)
                } else {
                    // db.query(select.get_Catagory, (err, result2) => {
                    // resolve()
                    output.ok(req, res, result, "catagory deleted", 0)
                    // })
                }
            })
        } catch (ex) {
            output.serverError(req, res, ex)
        }
    }
    update_catagory_id(req,res){
        upload(req, res, (err) => {
        if(Object.keys(req.body).length){
            (req.file) ? req.body['catagory_image'] = time2 : console.log("no file");
            new Promise((resolve, reject) => {
                // let data = {
                //     "item_name": req.body.item_name,
                //     "item_type": req.body.item_type,
                //     "item_price": req.body.item_price,
                //     "is_discount": req.body.is_discount,
                //     "rating": req.body.rating,
                //     "status": req.body.status,
                //     "item_desc": req.body.item_desc,
                //     "is_popular": req.body.is_popular,
                //     "item_category": req.body.item_category

                // }
                // (req.file) ? req.body['img_url'] = time2 : console.log("no file");
                // req.body['offer'] = JSON.stringify(req.body['offer'])
                // req.body['ingredients'] = JSON.stringify(req.body['ingredients'])
                // req.body['flavoured'] = JSON.stringify(req.body['flavoured'])
                db.query(update.update_catagory_id, [req.body, req.body.cat_id], (err, result) => {
                    if (err) {
                        reject(output.invalid(req, res, err))
                    } else {
                        db.query(select.get_catagory_all, (err, result2) => {
                            resolve(output.ok(req, res, result2, "catagory updated", 0))
                        })
                    }
                })
            })
                .catch(err => {
                    output.serverError(req, res, err)
                });
        }
    });
    }
    update_sub_catagory(req,res){
        upload(req, res, (err) => {
        if(Object.keys(req.body).length){
            (req.file) ? req.body['sub_catagory_image'] = time2 : console.log("no file");
            new Promise((resolve, reject) => {
                // let data = {
                //     "item_name": req.body.item_name,
                //     "item_type": req.body.item_type,
                //     "item_price": req.body.item_price,
                //     "is_discount": req.body.is_discount,
                //     "rating": req.body.rating,
                //     "status": req.body.status,
                //     "item_desc": req.body.item_desc,
                //     "is_popular": req.body.is_popular,
                //     "item_category": req.body.item_category

                // }
                // (req.file) ? req.body['img_url'] = time2 : console.log("no file");
                // req.body['offer'] = JSON.stringify(req.body['offer'])
                // req.body['ingredients'] = JSON.stringify(req.body['ingredients'])
                // req.body['flavoured'] = JSON.stringify(req.body['flavoured'])
                db.query(update.update_sub_catagory, [req.body, req.body.sub_catagory_id], (err, result) => {
                    if (err) {
                        reject(output.invalid(req, res, err))
                    } else {
                        db.query(select.sub_catagory, (err, result2) => {
                            resolve(output.ok(req, res, result2, "sub catagory updated", 0))
                        })
                    }
                })
            })
                .catch(err => {
                    output.serverError(req, res, err)
                });
        }
    })
    }
    // }
    update_catagory(req, res) {
        try {
            upload(req, res, (err) => {
                if (err) output.invalid(req, res, err)
                if (Object.keys(req.body).length && req.body.dish_id) {
                    new Promise((resolve, reject) => {
                        // let data = {
                        //     "item_name": req.body.item_name,
                        //     "item_type": req.body.item_type,
                        //     "item_price": req.body.item_price,
                        //     "is_discount": req.body.is_discount,
                        //     "rating": req.body.rating,
                        //     "status": req.body.status,
                        //     "item_desc": req.body.item_desc,
                        //     "is_popular": req.body.is_popular,
                        //     "item_category": req.body.item_category

                        // }
                        (req.file) ? req.body['img_url'] = time2 : console.log("no file");
                        // req.body['offer'] = JSON.stringify(req.body['offer'])
                        // req.body['ingredients'] = JSON.stringify(req.body['ingredients'])
                        // req.body['flavoured'] = JSON.stringify(req.body['flavoured'])
                        db.query(update.update_catagory, [req.body, req.body.dish_id], (err, result) => {
                            if (err) {
                                reject(output.invalid(req, res, err))
                            } else {
                                db.query(select.get_catagory_all, (err, result2) => {
                                    resolve(output.ok(req, res, result2, "catagory updated", 0))
                                })
                            }
                        })
                    })
                        .catch(err => {
                            output.serverError(req, res, err)
                        });
                } else {
                    output.ok(req, res, [], "invalid values", 1)
                }
            })
        } catch (ex) {
            output.serverError(req, res, ex)
        }
    }
}
module.exports = new CatagoryController();