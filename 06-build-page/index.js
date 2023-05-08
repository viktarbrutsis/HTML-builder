const fs = require('fs');
const path = require('path');

const projectDist  = path.join(__dirname, 'project-dist');

const allStylesTogether = path.join(__dirname, 'project-dist', 'style.css');
console.log(allStylesTogether);

fs.access(projectDist, err => {
    if(err) {
        fs.mkdir(projectDist, { recursive: true }, err => {
            if(err) throw err; // не удалось создать папку
            console.log('Папка projectDist успешно создана');
        });
        } else {
        fs.rm(projectDist, { recursive: true }, err => {
            if(err) throw err;
            console.log('Папка projectDist успешно удалена');
            fs.mkdir(projectDist, { recursive: true }, err => {
                if(err) throw err; // не удалось создать папку
                console.log('Папка projectDist успешно создана');
            });
        })
    }
})