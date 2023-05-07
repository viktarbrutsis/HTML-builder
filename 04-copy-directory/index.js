const fs = require('fs');
const path = require('path');

const toCopyFolder = path.join(__dirname, 'files');

console.log(toCopyFolder);

fs.mkdir('copy-folder', err => {
    if(err) throw err; // не удалось создать папку
    console.log('Папка успешно создана');
 });

 const copyFolder = path.join(__dirname, 'copy-folder');

fs.readdir(toCopyFolder, {withFileTypes: true }, (err, items) => {
    console.log(items);
    items.forEach(item => {
        console.log(item);
        console.log(path.join(toCopyFolder, item));
        fs.copyFile(path.join(toCopyFolder, item.name), path.join(copyFolder, item.name));
    })
});
