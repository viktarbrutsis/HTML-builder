const fs = require('fs');
const path = require('path');
let { COPYFILE_EXCL } = fs.constants;

const toCopyFolder = path.join(__dirname, 'files');
const copyFolder = path.join(__dirname, 'files-copy');

fs.mkdir(copyFolder, { recursive: true }, err => {
    if(err) throw err; // не удалось создать папку
    console.log('Папка успешно создана');
 });

fs.readdir(toCopyFolder, {withFileTypes: true }, (err, items) => {
    console.log(items);
    for (let item of items) {
        console.log(item);
        console.log(path.join(toCopyFolder, item.name));
        fs.copyFile(path.join(toCopyFolder, item.name), path.join(copyFolder, item.name),  COPYFILE_EXCL, err => {
            if(err) throw err;
            console.log('Файл успешно скопирован');
        });
    }
});
