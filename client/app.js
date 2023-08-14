const main_feed = document.querySelector('#MainFeed');
const main_input = document.querySelector('#MainInput');
const main_form = document.querySelector('#MainForm');

// Messenger input
function load_messeger(ws) {
  main_form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    if (ws) {
      ws.send(main_input.value);
    }

    display_msg(main_input.value, true);
    main_input.value = '';
  });
}

// WS on message
function load_onmessage(ws) {
  ws.onmessage = function(msg) {

    let msg_obj = JSON.parse(msg.data);
    console.log(msg_obj);

    (msg_obj.type == "message") ?
      display_msg(msg_obj.data) :
      display_connecttion(msg_obj.data);
  }
}

// Display users connection
function display_connecttion(username) {
  main_feed.innerHTML += `
    <div class="user_connection flx-centered">
      <p>${username} has connected</p>
    </div>
  `;
}

// Display messages
function display_msg(msg, my_msg = false) {
  main_feed.innerHTML += `
    <div class="${my_msg ? 'mine' : 'others'}">
      <div><p>${msg}</p></div>
    </div>
  `;

  // Scroll to latest msg
  main_feed.scrollTo(0, main_feed.scrollHeight);
}

/* TO DO
* Work on styles for new message data being passed 
* Login animation
*/
