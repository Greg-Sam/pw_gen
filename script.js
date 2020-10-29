const special_array = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '{', '}', ']', '[', '|', '?']

const num_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const cap_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const pw_base = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



// function generatePassword(length) {}
function generatePassword() {

  let length = parseInt(prompt("How many characters do you want your password to be?  You must select a length of between 8 and 128 characters."))

  if ((length < 8) || (length > 128)) {
    alert("Please enter a number between 8 and 128")
    window.location.reload()
  } else {
    let special = confirm(`Would you like to use special characters in your password?  
    Select 'OK' for Yes, and 'Cancel' to continue without special characters.`)

    let numbers = confirm(`Would you like to use numbers in your password?
    Select 'OK' for Yes, and 'Cancel' to continue without numbers.`)

    let caps = confirm(`Would you lie to use capital letters in your password?
    Select 'OK' for Yes, and 'Cancel' to continue without capital letters.`)

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

    // console.log(all_char)


    let myPassword = ''
    for (let i = 0; i < length; i++) {
      let pw_char = all_char[Math.floor(Math.random() * all_char.length)]
      myPassword += pw_char
    }
    // console.log(myPassword)


    document.getElementById('password').textContent = myPassword
  }
}

document.getElementById('generate').addEventListener("click", generatePassword);