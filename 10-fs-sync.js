const {readFileSync, writeFileSync}=require('fs');
//alternative
//const fs = require('fs');
//fs.readFileSync
console.log('start');
const first =readFileSync('./content/first.txt','utf8');
const second =readFileSync('./content/second.txt','utf8');


writeFileSync(
    './content/result-sync.text',
    `Here is the result : ${first},${second}`,
    {flag:'a'}
)
console.log('done with this task')
console.log('starting the next task')