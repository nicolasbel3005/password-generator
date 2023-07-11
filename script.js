// Assignment code here

function getRandomInt(min,max) {
  return Math.floor(Math.random() * max)+min;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordlength = prompt("Enter the length of the password (between 8 and 128):")
  console.log(passwordlength)
  if(passwordlength >= 8){
    console.log("valid password length")
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numericChars = "0123456789";
      var specialChars = "!@#$%^&*()-=_+[]{}|;':,.<>?";
      var includeLowercase = confirm("Include lowercase characters?");
      var includeUppercase = confirm("Include uppercase characters?");
      var includeNumeric = confirm("Include numeric characters?");
      var includeSpecial = confirm("Include special characters?");
      if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("You must select at least one character type.");
        return;
      }
  } else {
    console.log("invalid")
    return;
    // generatePassword()
  }
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }
  
  
  var password = "";
  var availableChars = "";

  if (includeLowercase) {
    availableChars += lowercaseChars;
   // password += lowercaseChars.charAt(getRandomInt(0, lowercaseChars.length - 1));
  }
  
  if (includeUppercase) {
    availableChars += uppercaseChars;
    // password += uppercaseChars.charAt(getRandomInt(0, uppercaseChars.length - 1));
  }

  if (includeNumeric) {
    availableChars += numericChars;
    // password += numericChars.charAt(getRandomInt(0, numericChars.length - 1));
  }

  if (includeSpecial) {
    availableChars += specialChars;
    // password += specialChars.charAt(getRandomInt(0, specialChars.length - 1));
  }
  


  for(let i = 0;i <passwordlength;i++){
    let randomchar  =availableChars.charAt(getRandomInt(0,availableChars.length-1))
    // console.log(randomchar)
    password += randomchar
    // i = i+1 => i += 1 => i++
    console.log(password)
    // console.log(getRandomInt(0,availableChars.length-1))
  }
  // for (var i = password.length; i < length; i++) {
  //   password += availableChars.charAt(getRandomInt(0, availableChars.length - 1));
  // }
console.log(availableChars)


return password

}
// Write password to the #password input
function writePassword() {
  var password = "";
  var availableChars = "";
  var password = generatePassword("#password");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
