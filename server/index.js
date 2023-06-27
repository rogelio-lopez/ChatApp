import * as http from 'http';
import { WebSocketServer } from 'ws';
import { v4 as uuidv4 } from 'uuid';

const port = 8000;
const server = http.createServer();

const wss = new WebSocketServer({ server });

server.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

wss.on('connection', (ws) => {

  console.log(`Connection established with users: ${ws}`);

  ws.on('message', (msg, isBinary) => {
    [...wss.clients].filter(c => c != ws).forEach(cl => cl.send(isBinary ? msg.toString() : msg));
  });

  //How to tell which user closed? 
});


