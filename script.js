let length = prompt("How many characters do you want your password to be?")

length = parseInt(length)

let special = confirm(`Would you like to use special characters in your password?  
Select 'OK' for Yes, and 'Cancel' to continue without special characters.`)

let numbers = confirm(`Would you like to use numbers in your password?
Select 'OK' for Yes, and 'Cancel' to continue without numbers.`)

let caps = confirm(`Would you lie to use capital letters in your password?
Select 'OK' for Yes, and 'Cancel' to continue without capital letters.`)

let special_array = ['!', '@', '#', '$']

let num_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let cap_array = ['A', 'B', 'C', 'D']

let pw_base = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let w_special = []

if (special === true) {
  w_special = pw_base.concat(special_array)
} else {
  w_special = pw_base
}

let w_numbers = []

if (numbers === true) {
  w_numbers = w_special.concat(num_array)
} else {
  w_numbers = w_special
}

let all_char = []

if (caps === true) {
  all_char = w_numbers.concat(cap_array)
} else {
  all_char = w_numbers
}

console.log(all_char)




let password = ''
for (let i = 0; i < length; i++){
  let pw_char = all_char[Math.floor(Math.random() * all_char.length)]
  password += pw_char
}
console.log(password)

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
