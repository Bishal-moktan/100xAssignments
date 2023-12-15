const fs = require('fs');

const PATH = './myFile.txt';
fs.readFile(PATH, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The content from the file is: ');
    console.log(data);
    data = data.replace(/\s+/g, ' ').trim();
    fs.writeFile(PATH, data, (err) => {
      if (!err) {
        console.log('Successfully, removed the whitespaces.');
        console.log(data);
      }
    });
  }
});
