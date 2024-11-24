var myInput = document.getElementById("new_password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    document.getElementById("valid-icon-letter").style.display = "inline-block";
    document.getElementById("invalid-icon-letter").style.display = "none";
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    document.getElementById("valid-icon-letter").style.display = "none";
    document.getElementById("invalid-icon-letter").style.display = "inline-block";
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    document.getElementById("valid-icon-capital").style.display = "inline-block";
    document.getElementById("invalid-icon-capital").style.display = "none";
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    document.getElementById("valid-icon-capital").style.display = "none";
    document.getElementById("invalid-icon-capital").style.display = "inline-block";
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    document.getElementById("valid-icon-number").style.display = "inline-block";
    document.getElementById("invalid-icon-number").style.display = "none";
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    document.getElementById("valid-icon-number").style.display = "none";
    document.getElementById("invalid-icon-number").style.display = "inline-block";
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    document.getElementById("valid-icon-length").style.display = "inline-block";
    document.getElementById("invalid-icon-length").style.display = "none";
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    document.getElementById("valid-icon-length").style.display = "none";
    document.getElementById("invalid-icon-length").style.display = "inline-block";
  }
}