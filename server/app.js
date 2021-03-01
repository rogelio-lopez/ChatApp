const Message = require('./models/message');

const express = require('express');
const { isBlockScopedBindingElement } = require('tslint');
const app = express();

app.get('/', (req, res) => {
  res.send('Im in the app!');
});

app.get('/add-message', (req, res) => {
  const msg = new Message({
    username: 'Rogelio',
    message: "Whats up chat!",
  });

  msg.save()
  .then((response) => {
    res.send(response);
  })
  .catch(err => {
    console.log(err);
  })
});

app.get('/single-message', (req, res) => {
  Message.findById('603d29bc7c8fdc1af01bd354')
  .then(result => [
    res.send(result)
  ])
  .catch(err => {
    console.log(err);
  })
})

app.get('/all-messages', (req, res) => {
  Message.find()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  })
})

// Login / Home

// Live Chat


// Message History

// 404
app.use((req, res) => {
  res.status(404).send('404 GTFO')
})

module.exports = app;
