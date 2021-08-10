const submitBtn = document.querySelector(".submit");
const textInput = document.querySelector("#original-string");
const cipherIndex = document.querySelector("#cipher-number");
const bottom = document.querySelector(".bottom");

const caesar = function (string, n) {
  let arrayCharCode = [];
  let arrayStrings = [];
  let enteredArray = string.split("");
  // check for wrap around numbers
  let nN = n;
  if (n > 26) {
    nN = n % 26;
  }
  enteredArray.forEach((letter) => {
    let charCode = letter.charCodeAt(0);
    let shiftCode;
    // check if lowercase
    if (charCode >= 97 && charCode <= 122) {
      shiftCode = charCode + nN;
      if (shiftCode > 122) {
        // adjustments to wrap around from a
        let num = shiftCode - 122;
        let newNum = 96 + num;
        arrayCharCode.push(newNum);
      } else if (shiftCode < 97) {
        // adjustments to wrap around from z
        let num = 97 - shiftCode;
        let newNum = 123 - num;
        arrayCharCode.push(newNum);
      } else {
        arrayCharCode.push(shiftCode);
      }
    } // check if uppercase
    else if (charCode >= 65 && charCode <= 90) {
      shiftCode = charCode + nN;
      if (shiftCode > 90) {
        // adjustments to wrap around from A
        let num = shiftCode - 90;
        let newNum = 64 + num;
        arrayCharCode.push(newNum);
      } else if (shiftCode < 65) {
        // adjustments to wrap around from Z
        let num = 65 - shiftCode;
        let newNum = 91 - num;
        arrayCharCode.push(newNum);
      } else {
        arrayCharCode.push(shiftCode);
      }
    } else {
      // punctuation
      arrayCharCode.push(charCode);
    }
  });
  arrayCharCode.forEach((code) => {
    let letter = String.fromCharCode(code);
    arrayStrings.push(letter);
  });
  let returnString = arrayStrings.join("");
  return returnString;
};

//module.exports = caesar;
