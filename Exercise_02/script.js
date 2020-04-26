"use strict";


document.getElementById("arithmetic_button").addEventListener("click", executeArithmeticOperation);
document.getElementById("arithmetic_operation").addEventListener("change", onArithmeticOperationChange);

function executeArithmeticOperation() {
  let arithmeticOperations = document.getElementById("arithmetic_operation");
  let selectedArithmeticOperation = arithmeticOperations.options[arithmeticOperations.selectedIndex].value;

  let x = parseInt(document.getElementById("x").value, 10);
  let y = parseInt(document.getElementById("y").value, 10);

  let arithmeticOuput = document.getElementById("arithmetic_ouput");
  switch (selectedArithmeticOperation) {
    case "addition":
      arithmeticOuput.innerText = x + y;
      break;
    case "subtraction":
      arithmeticOuput.innerText = x - y;
      break;
    case "multiplication":
      arithmeticOuput.innerText = x * y;
      break;
    case "division":
      arithmeticOuput.innerText = x / y;
      break;
    case "modulus":
      arithmeticOuput.innerText = x % y;
      break;
    case "increment":
      arithmeticOuput.innerText = ++x;
      break;
    case "decrement":
      arithmeticOuput.innerText = --x;
      break;

    // default:
    //   text = "I have never heard of that fruit...";
  }
}


function onArithmeticOperationChange() {
  let arithmeticOperations = document.getElementById("arithmetic_operation");
  let selectedArithmeticOperation = arithmeticOperations.options[arithmeticOperations.selectedIndex].value;

  let y = document.getElementById("y");
  let yLabel = document.getElementById("y_label");
  if (selectedArithmeticOperation == "increment"
    || selectedArithmeticOperation == "decrement") {
    y.setAttribute("style", "display:none");
    yLabel.setAttribute("style", "display:none");
  } else {
    y.setAttribute("style", "display:inline");
    yLabel.setAttribute("style", "display:inline");
  }

}


document.getElementById("comparison_button").addEventListener("click", executeComparisonOperation);

function executeComparisonOperation() {
  console.log("executeComparisonOperation()");
  let comparisonOperations = document.getElementById("comparison_operation");
  let selectedComparisonOperation = comparisonOperations.options[comparisonOperations.selectedIndex].value;

  let x = document.getElementById("comp_x").value;
  let y = document.getElementById("comp_y").value;

  if (!isNaN(x)) {
    x = parseInt(x, 10);
  }

  if (!isNaN(y)) {
    y = parseInt(y, 10);
  }

  let comparisonOuput = document.getElementById("comparison_ouput");
  switch (selectedComparisonOperation) {
    case "==":
      comparisonOuput.innerText = (x == y);
      break;
    case "===":
      comparisonOuput.innerText = (x === y);
      break;
    case "!=":
      comparisonOuput.innerText = (x != y);
      break;
    case "!==":
      comparisonOuput.innerText = (x !== y);
      break;
    case ">":
      comparisonOuput.innerText = (x > y);
      break;
    case "<":
      comparisonOuput.innerText = (x < y);
      break;
    case ">=":
      comparisonOuput.innerText = (x >= y);
      break;
    case "<=":
      comparisonOuput.innerText = (x <= y);
      break;

    // default:
    //   text = "I have never heard of that fruit...";
  }

  console.log(comparisonOuput.innerText);
}