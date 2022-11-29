// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var possiblespecial = "!#$%&()*+,-./:;<=>?@[]^_`{|}~"
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0293428294308723";
  var upLetters = letters.toUpperCase();
  var chooseFrom = "";
  // YOUR CODE GOES HERE
  var isUppercase = confirm("Would you like to use uppercase?");
  var isLowercase = false;
  var isSpecial = false;
  var isNumber = false;
}

  if (isUppercase) {
    // use uppercase letters 
    console.log("uppercase");
    chooseFrom += upLetters;
  }
  if (isLowercase) {
    // use lowercase letters 
    console.log("lowercase");
  }

  if (isSpeical) {
    // use special characters
    console.log("speical"); 
  }
  if (isNumber) {
    // use numbers
    console.log("numbers");
  }

// grab random letters 
console.log(chooseFrom);

  return "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
