const fs = require('fs');

console.log('start write file');
const writeAbleStream = fs.createWriteStream('output-stream.txt');
for (let i = 0; i <= 10; i++) {
    const random = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2);
    writeAbleStream.write(`Hello world ${i} WE WILL RANDOM DATETIME HERE: ${random} \n`);
}

writeAbleStream.end();

const readAbleStream = fs.createReadStream('output-stream.txt', 'utf-8');

let s = 0;
readAbleStream.on('data', (chunk) => {
    s += 1;
    console.log(chunk);
})


readAbleStream.on('end', () => {
    console.log(s);
    console.log(new Date(Date.now()));
    console.log('successful read');
})