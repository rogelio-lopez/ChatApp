const port = 8000;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.onopen = function() {
  console.log("Connection with server established");
}

/* Form submit to server */
const feed = document.querySelector('#Feed');
const input = document.querySelector('#Input');
const form = document.querySelector('#Form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  ws.send(input.value);
  input.value = '';
});;
