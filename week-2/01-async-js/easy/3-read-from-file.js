const fs = require('fs');

fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
let sum = 0;
for (let index = 0; index < 1000000000; index++) {
  {
    sum += index;
  }
}
console.log(sum);
