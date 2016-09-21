let fs = require('fs');
let fse = require('fs-extra');

function CreateFolder(path) {
    //let fse = require('fs-extra');
    fse.mkdirs(path, (err) => {
        console.log(err)
    })
}

function CreateJson(path) {
    let jsonDefault = '{"Hello":"node"}';

    var exjson = { 'key': '...abc...', 'key2': '...xyz...' };
    console.log(JSON.stringify(exjson));
    fs.writeFile('message.json', exjson, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
}
CreateJson(__dirname)

module.exports.CreateFolder = CreateFolder;
module.exports.CreateJson = CreateJson;