// Befor 2-promises.js - If i would want to perform agin two file read and eventually wirte asynchronosly 
// - technically painful, but it's written in a more modern way thats a solution.

//Since we are returing a promise if i use async/await , i can wait till the promise is resolved and then we will decide what to do next.

const { readFile } = require('fs');

const getText = ((path) => {
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })

    })
})

const start = async () =>{
    try{
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first);
        console.log(second);
    }catch{
        console.log(err);
    }
    
}

start();

//In previous 2-prmises.js we nest everything inside the promise, but here we are using async/await for promise to resolved.
//and using try/catch block to wrapp it for if there is any wrong we will have little bit of control.