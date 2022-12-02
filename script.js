// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var possiblespecial = "!#$%&()*+,-./:;<=>?@[]^_`{|}~"
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0293428294308723";
  var upLetters = letters.toUpperCase();
  var chooseFrom = "";
  var password = "";
  // YOUR CODE GOES HERE
  var passwordLength = prompt("How long do you want your password to be? Between 8 and 128 characters.")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length invalid.")
    return generatePassword() 
  }
  console.log(passwordLength)
  var isUppercase = confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");

  if (isUppercase) {
    chooseFrom += upLetters;
  }
  if (isLowercase) {
    chooseFrom += letters;
  }

  if (isSpecial) {
    chooseFrom += possiblespecial;
  }
  if (isNumber) {
    chooseFrom += numbers;
  }

  if (isUppercase || isLowercase || isSpecial || isNumber) {
    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * chooseFrom.length);
      password += chooseFrom[random];
    }
    return password
  }
  else {
    alert ("Please select at least one option.");
    return generatePassword()
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
