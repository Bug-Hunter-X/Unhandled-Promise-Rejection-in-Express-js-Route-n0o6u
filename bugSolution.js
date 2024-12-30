const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 1000);
  });
}