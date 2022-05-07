// Assignment code here
var characterLength = 8;
var choiceArr = [];

var lowerCase = ["a", "b", "c", "d", "e", "f" ,"g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "[", "]", "{", "}", "<", ">", ".", "?", "/"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

// Add functions 
function generatePassword() {
  //generate password based on the prompts
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomletter = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomletter];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters would you like in your password? (Must be between 8-128 characters.)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number between 8-128 digits. Please try again.");
    return false;
  }

  if (confirm("Would you like lower case letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCase);
  }

  if (confirm("Would you like upper case letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase);

  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numbers);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(special);
  }

  return true;
}








