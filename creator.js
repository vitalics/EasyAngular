let fs = require('fs');
let fse = require('fs-extra');

function CreateFolder(path) {
    //let fse = require('fs-extra');
    fse.mkdirs(path, (err) => {
        console.log(err)
    })
}

module.exports.CreateFolder = CreateFolder;