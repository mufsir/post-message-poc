const iframe = document.getElementById('iframe-id')
window.frames.hello.postMessage({
  action: 'save',
  key: 'keyForData',
  value: 'geeee'
}, '*')
