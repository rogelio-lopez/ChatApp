const port = 8000;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.onopen = function() {
  console.log("Connection with server established");
}

ws.onmessage = function(msg) {
  msg.data.text().then(txt => display_new_messages(txt));
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



function display_new_messages(msg) {
  feed.innerHTML += `<div class="others">${msg}</div>`;
}
