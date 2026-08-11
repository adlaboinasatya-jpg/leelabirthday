const fs = require('fs');
const filePath = 'assets/index-Bhv0silO.js';
let content = fs.readFileSync(filePath, 'utf8');

const updatedContent = content.replace(/\/images\/photo/g, './images/photo');

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("SUCCESSFULLY UPDATED IMAGE PATHS TO ./images/photo");
