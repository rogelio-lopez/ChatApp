const http = require('http');
const { env } = require('process');
const mongoose = require('mongoose');
const app = require('./server/app');

const PORT =  process.env.PORT || 3000;

http.createServer(app);

// connect to mongoDB
//had to replace username, password, and db name
const dbURI = 'mongodb+srv://rogeliolopz:Chimichurri1@chatcluster.51vrm.mongodb.net/chat-db?retryWrites=true&w=majority';

// async function
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
  // listen to requests after connection is complete
  app.listen(PORT);
})
.catch((err) => {
  console.error(err);
})
