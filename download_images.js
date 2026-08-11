const https = require('https');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

[1, 2, 3, 4].forEach(num => {
  const url = `https://leelabirthday.surge.sh/images/photo${num}.jpg`;
  const dest = path.join(imgDir, `photo${num}.jpg`);
  const file = fs.createWriteStream(dest);
  
  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        console.log(`Downloaded photo${num}.jpg - Status: ${response.statusCode}, Size: ${fs.statSync(dest).size} bytes`);
      });
    });
  }).on('error', err => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading photo${num}.jpg:`, err.message);
  });
});
