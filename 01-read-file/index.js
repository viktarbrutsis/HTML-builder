const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream('text222.txt', 'utf-8');
let data = '';
//частями (чанками) chunk 64KB
//readableStream.on('data', chunk => console.log(chunk.length));

readableStream.on('data', chunk => data += chunk);

//завершение потока - событие 'end'
readableStream.on('data', () => console.log('End', data.length));
readableStream.on('error', error => console.log('Error', error.message));