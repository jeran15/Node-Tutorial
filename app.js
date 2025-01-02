// setInterval(() =>{
//     console.log("Hello World");
// },1000);

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-aulternative-flavour')
require('./7-mine-grenade')

console.log(names);

sayHi('Miranda');
sayHi(names.john);
sayHi(names.peter);

console.log(data);