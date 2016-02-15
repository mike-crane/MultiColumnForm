//Problem: user interaction doesn't provide desired results
//Solution: add interactivity so the data input by the user is recorded
var div = document.getElementById( 'btn' );
div.onmouseover = function() {
  this.style.backgroundColor = '#257daf';
  var h2s = this.getElementsByClassName( 'button' );
  h2s[0].style.backgroundColor = '#257daf';
};
div.onmouseout = function() {
  this.style.backgroundColor = '#09689e';
  var h2s = this.getElementsByClassName( 'button' );
  h2s[0].style.backgroundColor = '#09689e';
};


//record form input
  // var captureInput = document.getElementsByClassName("inBox");

//send input through console
  // var formSubmit = document.getElementsByID("outputData");
