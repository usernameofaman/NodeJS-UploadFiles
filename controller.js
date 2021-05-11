const uploadFile = require("./middleware");
const fs = require('fs');
const baseUrl = "http://localhost:8080/files/";

const upload = async (req, res)=> {
    await uploadFile(req,res);
    res.status(200).send({
        message: "Uploaded Complete" + req.file.originalname,
        url: __basedir + "/uploads/"
    });
}

const deleteFile = (req,res) => {
    
}

const getListFiles = (req, res) =>{
    const directoryPath = __basedir + "/uploads/";
    fs.readdir(directoryPath, function(err, files){
        let fileInfos = [];
        files.forEach((file) => {
            fileInfos.push({
                name:file,
                url: baseUrl +file,
            });
        });
        res.status(200).send(fileInfos);
    });
};


module.exports = {
    upload,
    getListFiles,
}
