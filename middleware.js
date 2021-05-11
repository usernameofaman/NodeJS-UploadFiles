const util = require('util');
const multer = require('multer');
const maxSize = 10 * 1021 * 1024; //As provided in Task

let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, __basedir + "/uploads/");
    },
    filename: (req,file,cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize},
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;