import WebSocket from 'ws';

interface Messages {
  msg: string;
  mine: boolean;
}

const PORT: number = 8080;
const ws = new WebSocket(`ws://localhost:${PORT}`);

ws.on('message', (msg) => {
  display_message({ msg: msg.toString(), mine: false });
});

const input: HTMLInputElement | null = document.querySelector('#Input');
const submit = document.querySelector('#Submit');

submit?.addEventListener('click', (e) => {
  e.preventDefault();

  if (input !== null) {
    ws.send(input.value);
    display_message({ msg: input.value, mine: true });
    input.value = '';
  }
});

function display_message(msg: Messages): void {
  //display html in message feed div
}
