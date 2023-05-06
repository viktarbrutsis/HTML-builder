const fs = require('fs');
const readdir = require('node:fs/promises');
const path = require('path');
const {stdin, stdout} = require('process');

const filePath = path.join(__dirname, 'secret-folder');


const array = [];

// Sometimes you want to retrieve the file name without the extension. You may use the built-in Node.js path module to do that. You can use the Path.parse method to parse a given file path into the individual parts. Then, retrieve the file name without the extension:

fs.readdir(filePath, {withFileTypes: true }, (err, files) => {//проверяем папку 'secret-folder'
    for (let file of files) {
        fs.stat(path.join(filePath, file.name), (err, stats) => {
            if (stats.isFile()) {
                stdout.write(`${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - ${stats.size / 1024}kb\n`)
                // console.log(filePath);
                // console.log(path.join(filePath, file.name));
                // console.log(file.name);
                // console.log(path.extname(file.name));
                // console.log(file.name);
                // console.log(stats.size);
                }
        })
    }
})

