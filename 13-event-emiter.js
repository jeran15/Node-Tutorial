const Eventemitter = require('events');

const customEmitter = new Eventemitter();

customEmitter.on('response',(name,id)=>{
    console.log(`Data received ${name} with id: ${id}`);
})
customEmitter.on('response',(name)=>{
    console.log('some outher logic');
})

customEmitter.emit('response','john',34)