const operators = document.querySelectorAll(".operators");
const display = document.querySelector("#calc");
const numkeys = document.querySelectorAll(".numbers");

function allOperations(num1, operator, num2){
    let currentOperator = operator;
    let result;

    switch (currentOperator) {
        case "+": 
            result = num1 + num2;
            return result;
            break;
        case "-":
            result = num1 - num2; 
            return result;
            break;
        case "÷":
            result = num1 / num2;
            return result;
            break;
        case "×":
            result = num1 * num2;
            return result;
            break;
        default: 
            return result;
    }
}

let currentValue = "";
let operandOne, activeOperator, operandTwo;

numkeys.forEach(btn => {
  btn.addEventListener("click", () => {
    currentValue+= btn.textContent;
    display.value = currentValue;

    if(operandOne && activeOperator){
        currentValue += btn.textContent;
        display.value = currentValue;
        operandTwo = parseFloat(currentValue);
        console.log("operandTwo:", operandTwo);
    }
  });
});

operators.forEach(btn => {
    if (btn.textContent !== "=") {
        btn.addEventListener("click", () => {
            operandOne = parseFloat(display.value); // Ensure operandOne is a number
            activeOperator = btn.textContent; // Capture operator
            currentValue = ""; // Reset current value for next input
            display.value = ""; // Clear the display
            console.log("operandOne:", operandOne); // Debug log
            console.log("activeOperator:", activeOperator); // Debug log
        });
    }
});
