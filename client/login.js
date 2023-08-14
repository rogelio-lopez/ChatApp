// Resize browser to replicate phone screen
window.resizeTo(600, 852);

// Enter username 
const login_username = document.querySelector('#LoginUsername');
const login_btn = document.querySelector('#LoginSubmitBtn');
const login_form = document.querySelector('#LoginForm');

// Control login animation
const login_anim = document.querySelector('body.no-login');

login_form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  // Change input permissions for login & main
  login_username.disabled = true;
  login_btn.disabled = true;
  main_input.disabled = false;

  login_anim.classList.remove('no-login');

  // Websocket functions
  const port = 8000;
  // Passing username as parameter
  const ws = new WebSocket(`ws://localhost:${port}?username=${login_username.value}`);

  ws.onopen = function() {
    console.log("Connection with server established");
  }

  load_messeger(ws);
  load_onmessage(ws);
});
