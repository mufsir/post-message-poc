const iframe2 = document.getElementById('iframe-id')
window.frames.hello.postMessage({
  action: 'get',
  key: 'keyForData'
}, '*')
window.addEventListener("message", messageHandler, false);
function messageHandler(event) {
  const { action, key, value } = event.data
  if (action == 'returnData'){
    console.log(key, value);
  }
}