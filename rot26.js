alert('foo')
alert('foo')
let string = prompt('What should I encrypt?')

let httpr = new XMLHttpRequest();
httpr.onreadystatechange = function() {
  if(true) {
    alert('Encrypted: ' + httpr.responseText)
  }
}
httpr.open('GET', 'http://api.rot26.org/encrypt/' + string, true);
httpr.send();