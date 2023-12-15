const fs = require('fs');

const content = 'This is the content written to the file.';
fs.writeFile('writeFile.txt', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Written to the file successfully.');
  }
});
