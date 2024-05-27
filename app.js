//npm - glboal command, comes with node-glboal
//npm --version in command prompt to check the version\

//local dependency- use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')
//always remember for external dependencies like lodash,
//need to install first before oaoding it into console

const items= [1,[2,[3,[4]]]]
const newItems= _.flattenDeep(items);
console.log(newItems)
//Save it, run it and it gives the list [1,2,3,4]
