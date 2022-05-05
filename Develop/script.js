// Assignment code here
const specialCharacters = "!@#$%^&*(){}[]<>/?"
const generateButton = document.getElementById('generateBtn')

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts that display after you click 'Generate Password'
function generatePassword() {
  var passwordLength = prompt ("Enter number of characters for your new password. It must be at least 8 characters, but no more than 128 characters.");
  
  var numbers = confirm ("Would you like numbers in your password?");

  var lowerCase = confirm ("Would you like lower case letters in you password?");

  var upperCase = confirm ("Would you like upper case letters in your password?");

  var special = confirm ("Would you like special characters in your password?");

  var minimumCount = 0;

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    }

  function getLowerCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    }

  function getUpperCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    }

  function getSpecialCharacters() {
    const specialCharacters = "!@#$%^&*()[]{}<>?"
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

    console.log(getNumbers());
    console.log(getLowerCase());
    console.log(getUpperCase());
    console.log(getSpecialCharacters());
}