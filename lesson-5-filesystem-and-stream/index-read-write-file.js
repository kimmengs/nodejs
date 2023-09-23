const fs = require('fs');


fs.writeFile('output.txt', 'Hello World 1', (err) => {
    console.log('start write file');
    if (err) {
        console.log(err);
        return;
    }
    console.log('write successful');
});


fs.readFile('output.txt', 'utf-8', (data, err) => {
    console.log('start read file');
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log('successful read');
});
