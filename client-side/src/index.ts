import WebSocket from 'ws';

interface Messages {
  msg: string;
  mine: boolean;
  username?: string;
}

const PORT: number = 8080;
const ws = new WebSocket(`ws://localhost:${PORT}`);

// When receiving message from server/other users, add to feed
ws.on('message', (msg) => {
  add_msg_to_feed({ msg: msg.toString(), mine: false });
});

const input: HTMLInputElement | null = document.querySelector('#Input');
const submit = document.querySelector('#Submit');
const feed: HTMLElement = document.querySelector('#Feed')!;

// On submit - send to server as { mine: true } to diff from other users
submit?.addEventListener('click', (e) => {
  e.preventDefault();

  if (input !== null) {
    ws.send(input.value);
    add_msg_to_feed({ msg: input.value, mine: true });
    input.value = '';
  }
});

// Adds a new message to the message feed
function add_msg_to_feed(msg: Messages, mine?: boolean): void {
  //display html in message feed div
  if (feed !== null) {
    feed.innerHTML += `<div class="msg ${mine ? 'mine' : 'not-mine'}"><span>${msg}</span></div>`;
  }
}
