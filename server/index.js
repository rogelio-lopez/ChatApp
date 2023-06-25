import * as http from 'http';
import { WebSocketServer } from 'ws';
import { v4 as uuidv4 } from 'uuid';

const port = 8000;
const server = http.createServer();

const wss = new WebSocketServer({ server });

server.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});


const users = {};

wss.on('connection', (ws) => {

  let userId = uuidv4();
  users[userId] = ws;

  console.log(`Connection established with users: ${userId}`);

  ws.on('message', (msg) => {
    console.log(`msg: ${msg}`);
  });

  console.log("wss.client:");
  console.log([...wss.clients]);
  console.log("Users arr:")
  console.log(users[userId]);
  //How to tell which user closed? 
});


