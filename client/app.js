// Resize browser to replicate phone screen
window.resizeTo(450, 800);

// Websocket functions
const port = 8000;
const ws = new WebSocket(`ws://localhost:${port}`);

if (ws) {
  ws.onopen = function() {
    console.log("Connection with server established");
  }

  ws.onmessage = function(msg) {
    msg.data.text().then(txt => display_new_messages(txt));
  }
}

// Form submit to server 
const feed = document.querySelector('#Feed');
const input = document.querySelector('#Input');
const form = document.querySelector('#Form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  if (ws) {
    ws.send(input.value);
  }
  display_new_messages(input.value, true);
  input.value = '';
});


function display_new_messages(msg, my_msg = false) {
  feed.innerHTML += `
    <div class="${my_msg ? 'mine' : 'others'}">
      <div><p>${msg}</p></div>
    </div>
  `;
}
