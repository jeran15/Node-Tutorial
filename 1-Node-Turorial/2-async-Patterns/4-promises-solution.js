//In 3-promises.js we are using async/await to resolve the promise and using try/catch block to wrap it for error handling.
//In above code problem is that we will make write file wrapping function to set it as promise.
// now we will make without wrapping function to set it as promise.

const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () =>{
    const first = await readFilePromise('./content/first.txt','utf8');
    const second = await readFilePromise('./content/second.txt','utf8');
    console.log(first,second);

    const result = await writeFilePromise('./content/result-mind-grenade.txt',`This is awesome : ${first} ${second}`);
}
start();