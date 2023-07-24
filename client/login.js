// Resize browser to replicate phone screen
window.resizeTo(600, 852);

// Enter username 
const user_name = document.querySelector('#Username');
const login_form = document.querySelector('#LoginForm');

login_form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  // Websocket functions
  const port = 8000;
  const ws = new WebSocket(`ws://localhost:${port}`);

  if (user_name.value) {
    ws.onopen = function() {
      console.log("Connection with server established");
      ws.send(user_name);
    }
  }

  user_name.value = '';
  //add classes to form so it disappears and shows messenger
});


/*TO DO
* login functionality
*   pass username (maybe connect to ID)
*   login effect
*/
