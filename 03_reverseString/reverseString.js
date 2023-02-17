let lastLetter 
let reversedString = ""


const reverseString = function(inputString) {

  for (let i = 1; i < inputString.length +1; i++) {
  lastLetter = inputString.charAt(inputString.length - i);
  reversedString += lastLetter;
}

return reversedString;

};

// Do not edit below this line
module.exports = reverseString;

