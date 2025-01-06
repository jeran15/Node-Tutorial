//npm - globel command, comes with code when you download node.js
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//3 ways to create package.json

//1. npm init (step by step, press enter to skip)
//2. npm init -y (everything default)
//3. manual aproch (create package.json in the root, create properties etc)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);