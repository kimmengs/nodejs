const fs = require('fs/promises');

const readFun = async() => {
    try {
        const data = await fs.readFile('example.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFun();