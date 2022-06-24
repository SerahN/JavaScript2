alert("Hello there, this is Serah's calculator.");

var operation = prompt(
  "What operation do you want to run? Pick any of (+,-,*,/)"
);
var firstNumber = parseInt(prompt("Enter the First Figure: "));
var secondNumber = parseInt(prompt("Enter the Second Figure: "));

if (operation == "+") {
  var result = firstNumber + secondNumber;
} else if (operation == "-") {
  var result = firstNumber - secondNumber;
} else if (operation == "*") {
  var result = firstNumber * secondNumber;
} else if (operation == "/") {
  var result = firstNumber / secondNumber;
} else {
  alert("Invalid Operation");
}

alert("Your result is: " + result);

let anotherOperation = alert(
  "If you would like to run another operation refresh this page, else close. "
);
