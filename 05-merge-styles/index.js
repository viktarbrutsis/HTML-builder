const fs = require('fs');
const path = require('path');

const pathToFiles = path.join(__dirname, 'styles');
const destination = path.join(__dirname, 'project-dist', 'bundle.css');
const writeStream = fs.createWriteStream(destination);

fs.readdir(pathToFiles, {withFileTypes: true }, (err, items) => {
    items.forEach(item => {
        if (err) throw err;
        //all files
        //need to exclude .txt
        //console.log(path.extname(item.name));
        if (item.isFile() && path.extname(item.name) === '.css') {
            const readStream = fs.createReadStream(path.join(pathToFiles, item.name), 'utf-8');
            readStream.on('data', data => {
                writeStream.write(data);
            });
        }
    })
    console.log(items);
})

