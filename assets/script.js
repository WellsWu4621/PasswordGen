// Variable Declaration
let length = 0
let lowerCase = false
let upperCase = false
let nums = false
let specChars = false
let lowerArray = "abcdefghijklmnopqrstuvwxyz"
let upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numArray = "0123456789"
let specArray = "!@#$%^&*()"
let chosenArray = ""
let password = ""
let prequisite = 0

// click listener
document.getElementById('generate').addEventListener('click', () => {

  // variable reset
  length = parseInt(prompt('Please Enter a Character length for your Password'))
  lowerCase = confirm('Do you need Lower Case letters?')
  upperCase = confirm('Do you need Upper Case letters?')
  nums = confirm('Do you need numbers?')
  specChars = confirm('Do you need special characters?')
  lowerArray = "abcdefghijklmnopqrstuvwxyz"
  upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  numArray = "0123456789"
  specArray = "!@#$%^&*()"
  chosenArray = ""
  password = ""
  prequisite = 0

  // Checks includes adding array to chosen array and adding prequisite characters
  // lowerCase check
  if (lowerCase) {
    prequisite++
    chosenArray += lowerArray
    console.log(chosenArray)
    password += lowerArray[Math.floor(Math.random() * lowerArray.length)]
  }
  // upper check
  if (upperCase) {
    prequisite++
    chosenArray += upperArray
    console.log(chosenArray)
    password += upperArray[Math.floor(Math.random() * upperArray.length)]
  }
  // number check
  if (nums) {
    prequisite++
    chosenArray += numArray
    console.log(chosenArray)
    password += numArray[Math.floor(Math.random() * numArray.length)]
  }
  // spec check
  if (specChars) {
    prequisite++
    chosenArray += specArray
    console.log(chosenArray)
    password += specArray[Math.floor(Math.random() * specArray.length)]
  }

  // removing prereq length from total length to not overcap char limit
  length -= prequisite

  // password generation loop, based on user input length and the user input requirements
  for (let i = 0; i < length; i++) {
    password += chosenArray[Math.floor(Math.random() * chosenArray.length)]
    console.log(password)
  }
  document.getElementById('password').innerHTML = password
})