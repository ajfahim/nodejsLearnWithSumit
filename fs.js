const fs = require('fs');

// fs.writeFileSync('fileFromFsModule.txt', "This file is generated from node core module 'fs'");
// fs.appendFileSync('fileFromFsModule.txt', ' And this is cool!!');
// const data = fs.readFileSync('fileFromFsModule.txt');
// console.log(data.toString());

// fs.writeFile(
//     'writeFile.txt',
//     'Whats the diffrence between writeFile and WriteFileSync??',
//     (err) => {
//         console.log(err);
//     }
// );
fs.readFile('fileFromFsModule.txt', (err, data2) => {
    console.log(data2.toString());
});

console.log(
    'this supposed to come 2nd.But fs.readFile is asyncronus.Thats why it is printed first'
);
