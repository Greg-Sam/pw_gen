let length = prompt("How many characters do you want your password to be?")

let special = confirm("Would you like to use special characters?")

let numbers = confirm("Would you like to use numbers?")

let caps = confirm("Would you lie to use capital letters")

let special_set = []



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
