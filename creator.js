let fs = require('fs');
let fse = require('fs-extra');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function CreateFolder(path) {
    //let fse = require('fs-extra');
    fse.mkdirs(path, (err) => {
        console.log(err)
    })
}

function CreateJson(path) {
    let jsonDefault = '{"main":"index.js"}';

    var exjson = { 'key': '...abc...', 'key2': '...xyz...' };

    fs.writeFile('message.json', jsonDefault, (err) => {
        Asker();
        if (err) throw err;
        console.log('It\'s saved!');
    });
}

function Asker() {
    rl.question('What is your favorite food?', (answer) => {
        console.log(`Oh, so your favorite food is ${answer}`);
    });
}
function Writer() {
    rl.write('Delete me!');
    // Simulate ctrl+u to delete the line written previously

}

// function Promter() {
//     rl.setPrompt('OHAI> ');
//     rl.prompt();

//     rl.on('line', (line) => {
//         switch (line.trim()) {
//             case 'hello':
//                 console.log('world!');
//                 break;
//             default:
//                 console.log('Say what? I might have heard `' + line.trim() + '');
//                 break;
//         }
//         rl.prompt();
//     }
// }
//Writer();
 CreateJson(__dirname);

module.exports.CreateFolder = CreateFolder;
module.exports.CreateJson = CreateJson;