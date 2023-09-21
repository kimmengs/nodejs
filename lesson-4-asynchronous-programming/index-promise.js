const fs = require('fs/promises');

fs.readFile('example.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
