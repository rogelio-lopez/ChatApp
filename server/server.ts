import { WebSocketServer } from "ws";

const port: number = 8080;
const ws = new WebSocketServer({ port });

ws.on('connection', (w) => {
  console.log("User has connected");

  w.on('message', (msg) => {
    console.log(msg);
  });

  w.send("you are connected to the sever.. congrats ma boy");
});

console.log(`Listening at port:${port}`);
