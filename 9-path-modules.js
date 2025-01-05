const path = require('path');

console.log(path.sep);

const absolute = path.resolve(__dirname,'content','subfolder','text.txt');

console.log(absolute);

console.log(path.basename(absolute));
console.log(path.dirname(absolute));
console.log(path.extname(absolute));    
