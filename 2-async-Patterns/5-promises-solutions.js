//In this file using more cool and techinical way to read and write file using promises.

const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () =>{
    const first = await readFile('./content/first.txt','utf8');
    const second = await readFile('./content/second.txt','utf8');
    console.log(first,second);

    await writeFile(
        './content/result-mind-grenade.txt',
        `This is awesome : ${first} ${second}`,
        {flag: 'a'});
}
start();

//It's a more modern way to write the code.
//Easier to read and wrap your header on.
