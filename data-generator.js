let values = []
let count = 1;
while(count <= 50){
  let time = (Math.random(1) * 100000).toFixed(0); 
  let obj = {
    task: `Task ${(Math.random() * 50).toFixed(0)}`,
    time: time,
    project: `Project ${(Math.random() * 50).toFixed(0)}`,
    billable:  (count % 3 == 0),
    startTime:  Date.now(),
    endTime:  Number(Date.now()) + Number(time),
    tags: `Tagger ${(Math.random() * 50).toFixed(0)}, Tagger ${(Math.random() * 50).toFixed(0)}`,
  }
  values.push(obj)
  count++; 
}

// Import the 'fs' module
const fs = require('fs');

// The content you want to write to the file
const content = 'Hello, this is the content written to the file.';

// Write to the file
fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully!');
  }
});
