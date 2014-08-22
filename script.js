request = new XMLHttpRequest();
request.open('GET', 'README.md', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
      // Success!
      var content  = document.getElementById('content');
      content.innerHTML = (marked(request.responseText));
      content.style.display = 'block'
  } else {
      // We reached our target server, but it returned an error
      displayError('Whoops! We said hi to the server, but it didn\'t say hi back.');
      
  }
};

request.onerror = function () {
  // There was a connection error of some sort
  displayError('Whoops! We couldn\'t get ahold of the server.');
};

function displayError(msg) {
  var errorElement = document.getElementById('error');
  errorElement.style.display = 'block'
  errorElement.innerHTML = msg;
}

request.send();