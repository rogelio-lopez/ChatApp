// Form submit to server 
const feed = document.querySelector('#Feed');
const input = document.querySelector('#Input');
const form = document.querySelector('#Form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  //SWitch this to use cookie or session storage to confirm that youre logged in not ws
  if (ws) {
    ws.send(input.value);
  }
  display_new_messages(input.value, true);
  input.value = '';
});

ws.onmessage = function(msg) {
  msg.data.text().then(txt => display_new_messages(txt));
}

function display_new_messages(msg, my_msg = false) {
  feed.innerHTML += `
    <div class="${my_msg ? 'mine' : 'others'}">
      <div><p>${msg}</p></div>
    </div>
  `;

  // Scroll to latest msg
  feed.scrollTo(0, feed.scrollHeight);
}

/* TO DO
*  only be able to submit messages if logged in (some sort of check)
*   if not then disable msg input
*/
