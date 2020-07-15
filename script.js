//describe variables

var userCriteria = [];
var criteria = ["numbers", "letters", "symbols"];
var passwordLength = 0;
var pass = "";
var numbers = "0123456789";
var letters = "abcdefghijklmnopqrstuvwxyz";
var symbols = "@#$%^&*()!";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var userPass = "";
var userChar = "";
var password = "";
var eRror = 1;
var countUpper = 0;

function validateParameters() {}

console.log(validateParameters());
//  put password elements and validate ===============

function generatepassword() {
  var criteriaNumbers = document.getElementById("Numbers");
  var criteriaLetters = document.getElementById("Letters");
  var criteriaSymbols = document.getElementById("Symbols");
  var x = document.getElementById("length").value;
  var y = 0;
  var z = 0;

  if (
    criteriaNumbers.checked == false &&
    criteriaLetters.checked == false &&
    criteriaSymbols.checked == false
  ) {
    alert("Please, choose at least one criteria");
  } else y = 1;

  if (x <= 7 || x >= 129) {
    alert("Password must be beetwen 8 and 128");
  } else z = 1;

  while (countUpper === 0 && y === 1 && z === 1) {
    while (userPass.length < x) {
      var userChar = prompt("put password");

      if (
        criteriaNumbers.checked == false &&
        numbers.indexOf(userChar) >= 0 &&
        userChar.length > 0
      ) {
        alert("do not put number!!!");
      } else if (
        criteriaLetters.checked == false &&
        letters.indexOf(userChar) >= 0 &&
        userChar.length > 0
      ) {
        alert("do not put letters!!!");
      } else if (
        criteriaSymbols.checked == false &&
        symbols.indexOf(userChar) >= 0 &&
        userChar.length > 0
      ) {
        alert("do not put symbols!!!");
      } else if (userChar === "" || userChar.length >= 2) {
        alert(
          "choosen character doesnot allow empty or choose only one character!"
        );
      } else if (upperCases.indexOf(userChar) >= 0) {
        countUpper = countUpper + 1;
        userPass = userPass + userChar;
      } else userPass = userPass + userChar;
    }

    if (userPass.length >= passwordLength && countUpper === 0) {
      alert("Password must includes at least one Upper case character!");
      userPass = "";
    }
  }
  return userPass;
}

// create write password function
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// add event listener to generate button
generateBtn = document.addEventListener("click", writePassword);
