const fs = require('fs');
const path = require('path');

let data = '';

//путь к файлу
let filePath = path.join(__dirname, 'text.txt');

const readableStream = fs.createReadStream(filePath, 'utf-8');
//частями (чанками) chunk 64KB
readableStream.on('data', chunk => console.log(chunk.length));

readableStream.on('data', chunk => data += chunk);

//завершение потока - событие 'end'
readableStream.on('data', () => console.log(data));
readableStream.on('data', () => console.log('End', data.length));
readableStream.on('error', error => console.log('Error', error.message));

console.log(filePath);