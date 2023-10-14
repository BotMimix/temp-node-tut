const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

  // the optional third value in writeFileSync is an options object. if you set flag to a, node will know that it needs to append the second value to the file, instead of overwriting it.
writeFileSync('./content/result-sync.txt', `\nHere is the result: ${first}, ${second}`, {flag: 'a'});

console.log('done with this task');
console.log('starting next one');