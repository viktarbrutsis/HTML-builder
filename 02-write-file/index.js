const fs = require('fs');
const {stdin, stdout} = require('process');
const path = require('path');
// const readline = require('node:readline/promises');

filePath = path.join(__dirname, 'draft.txt');

//const output = fs.createWriteStream('destination.txt');

//Если не создать файл, который указан в качестве пункта назначения наших данных, destination.txt, перед началом записи он будет создан автоматически.
//Поток чтения назовём input и каждую часть данных, которую он отдает, будем записывать в файл при помощи метода output.write()

const ws = fs.createWriteStream(filePath);

stdout.write('Enter the word and press Enter\n');

// Запись данных производится с помощью метода write(), в который передаются данные. Для окончания записи вызывается метод end().

stdin.on('data', data => {
   if (data.toString().trim() === 'exit') {
      stdout.write('Thank you and goodbye\n');
      process.exit();
   } else {
      ws.write(data);
   }
});

//Событие: 'SIGINT'

// Событие 'SIGINT' генерируется всякий раз, когда поток ввода получает ввод Ctrl+C, известный обычно как SIGINT.
//Если нет зарегистрированных слушателей события 'SIGINT', когда поток ввода получает SIGINT, будет выдано событие 'pause'.


process.on('SIGINT', () => {
   stdout.write('\nThank you and goodbye\n');
   process.exit();
});


//r: открыть файл для чтения
//r+: открыть файл для чтения и записи
//rs: открыть файл для чтения в синхронном режиме
//w: открыть файл для записи
//a: открыть файл для записи данных в конец файла
//a+: открыть файл для чтения и для записи данных в конец файла


// fs.open(path.join(filePath, 'draft.txt'), 'w', (err) => {
//    if (err) throw err;
//    stdout.write('File created');
// });
