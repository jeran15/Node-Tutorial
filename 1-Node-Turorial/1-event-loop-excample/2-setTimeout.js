//Started operation system progress
console.log('First');
//asynchronous function so offloaded to the node API
setTimeout(() => {
    console.log('Second');
}, 0);  

console.log('Third');