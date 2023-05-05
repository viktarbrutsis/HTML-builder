const fs = require('fs');
const readdir = require('node:fs/promises');
const path = require('path');
const {stdin, stdout} = require('process');

const filePath = path.join(__dirname, 'secret-folder');


const array = [];

fs.readdir(filePath, {withFileTypes: true }, (err, files) => {//проверяем папку 'secret-folder'
    for (let file of files) {
        fs.stat(path.join(filePath, file.name), (err, stats) => {
            if (stats.isFile()) {
                stdout.write(`${file.name} -- ${path.extname(file.name)} -- ${stats.size}\n`)
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

