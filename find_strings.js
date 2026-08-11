const fs = require('fs');
const content = fs.readFileSync('assets/index-Bhv0silO.js', 'utf8');

const matches = content.match(/["'](https?:\/\/[^"']+|\/[^"']+\.(png|jpg|jpeg|webp|gif|svg)|\.\/[^"']+)["']/gi) || [];

console.log("ALL URL MATCHES:");
console.log(Array.from(new Set(matches)));
