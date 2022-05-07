// Assignment code here
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var special = "!@#$%^&*()[]{}<>,.?/";

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

// Add functions 
function generatePassword() {
  passwordLength = prompt("How many characters would you like your password to be? Passwords must be between 8 and 128 characters.");
  console.log("Password Length" + passwordLength);

  if(!passwordLength) {
    alert("Value Required");
  
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password must be at least 8 characters, but no more than 128.");
    console.log("Password Length" + passwordLength);

  } else { 
    confirmLower = confirm("Would you like to use lower case letters in your password?");
    console.log(confirmLower);
    confirmUpper = confirm("Would you like upper case letters in your password?");
    console.log(confirmUpper);
    confirmNumber = confirm("Would you like numbers in your password?");
    console.log(confirmNumber);
    confirmSpecial = confirm("Would you like special characters in your password?");
    console.log(confirmSpecial);
  }

// If select cancel then...

  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("You must choose at least one criteria.");
  console.log(userChoices);

// 4 true options 
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, number, special);
  console.log(userChoices);

// 3 true options 
  } else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, number);
    console.log(userChoices);

  } else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat (upperCase, special);
    console.log(userChoices);

  } else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat (number, special);
    console.log(userChoices);

  } else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = upperCase.concat (number, special);
    console.log(userChoices);
  }
};
