import * as http from 'http';
import { WebSocketServer } from 'ws';

const port = 8000;
const server = http.createServer();
const wss = new WebSocketServer({ server });

server.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

wss.on('connection', (ws, req) => {

  let username = req.url.split('=')[1];

  console.log(`Connection established with user: ${username}`);

  // Send notification that use connected
  [...wss.clients].filter(c => c != ws)
    .forEach(cl => cl.send(JSON.stringify({
      type: "connection",
      data: `${username}`
    })));

  // Sending object with username and message... Check it it goes through?
  ws.on('message', (msg) => {

    let msg_object = {
      type: "message",
      name: username,
      data: msg.toString()
    };

    [...wss.clients].filter(c => c != ws)
      .forEach(cl => cl.send(JSON.stringify(msg_object)));
  });

  //How to tell which user closed? 
});


