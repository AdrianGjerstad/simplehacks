let string = prompt('What should I encrypt?')

let httpr = new XMLHttpRequest();
httpr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    alert('Encrypted: ' + httpr.responseText)
  }
}
httpr.open('GET', 'http://api.rot26.org/encrypt/' + string, true);
httpr.send();
