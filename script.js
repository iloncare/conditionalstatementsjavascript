var oneDiv = document.body.querySelector(".partOne");
var twoDiv = document.body.querySelector(".partTwo");
var threeDiv = document.body.querySelector(".partThree");

var inputOne = Number(prompt("What is your first number?"));
var operator = prompt("What operation do you want to use?");
var inputTwo = Number(prompt("What is your second number?"));

if (isNaN(inputOne)) {
  oneDiv.innerHTML =
    "The entry of the first number you put wasn't a number. Restart the program, and enter an actual number.";
} else if (
  operator != "+" &&
  operator != "-" &&
  operator != "*" &&
  operator != "/"
) {
  twoDiv.innerHTML =
    "You didn't include a specific operator sign. Restart the program, and include an operator sign.";
} else if (isNaN(inputTwo)) {
  threeDiv.innerHTML =
    "The entry of the second number you put wasn't a number. Restart the program, and enter an actual number.";
} else {
  switch (operator) {
    case "+":
      oneDiv.innerHTML = inputOne + inputTwo;
      break;
    case "-":
      oneDiv.innerHTML = inputOne - inputTwo;
      break;
    case "*":
      oneDiv.innerHTML = inputOne * inputTwo;
      break;
    case "/":
      oneDiv.innerHTML = inputOne / inputTwo;
      break;
  }
}