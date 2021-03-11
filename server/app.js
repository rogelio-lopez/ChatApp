const Message = require('./models/message');

const express = require('express');
const app = express();


const messageDB = [
  {user: 'rogelio', message: 'hello there', date: 'today at 9'},
  {user: 'rogelio', message: 'hiii', date: 'today at 9:05'},
  {user: 'cel', message: 'hello', date: 'today at 9:05'},
  {user: 'rogelio', message: 'whats up', date: 'today at 9:06'},
  {user: 'celeste', message: 'not much', date: 'today at 9:07'},
  {user: 'rogelio', message: 'cool', date: 'today at 9:08'}
];


// My message history
app.get('/message-history', (req, res) => {

  const myMessages = [];
  for (let message of messageDB){
    if(message.user === 'rogelio'){
      myMessages.push(message);
    }
  }

  res.send(myMessages);
});

// Messages in chat
app.get('/all-messages', (req, res) => {

});

// 404
app.use((req, res) => {
  res.status(404).send('404 GTFO')
})

module.exports = app;
