const operators = document.querySelectorAll(".operators");
const display = document.querySelector("#calc");
const numkeys = document.querySelectorAll(".numbers");
const percentile = document.querySelector(".percentile");
const signChange = document.querySelector(".alter-PN");
const clearAll = document.querySelector(".clear_all");

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
    if(btn.textContent === "."){
        if(display.value.includes(".")){
            return;
        }
    }

    if(operandOne && activeOperator){
        currentValue += btn.textContent;
        operandTwo = parseFloat(currentValue);
        display.value = currentValue;
    }else {
        currentValue+= btn.textContent;
        display.value = currentValue;
    }
  });
});

operators.forEach(btn => {
    if (btn.textContent !== "=") {
        btn.addEventListener("click", () => {
            if(operandOne && activeOperator && currentValue !== ""){
                operandTwo = parseFloat(currentValue);
                const newResult = allOperations(operandOne, activeOperator, operandTwo);
                display.value = newResult;
                operandOne = newResult;
                activeOperator = btn.textContent;
                operandTwo = undefined;
                currentValue = "";
            }else {
                operandOne = parseFloat(display.value); // Ensure operandOne is a number
                activeOperator = btn.textContent; // Capture operator
                currentValue = ""; // Reset current value for next input
                display.value = ""; // Clear the display
            }
        });
    }else {
        btn.addEventListener("click", () => {
            const currentResult = allOperations(operandOne, activeOperator, operandTwo);
            display.value = currentResult; // shows current result on display
            // Reset values for new operations 
            operandOne = currentResult;
            activeOperator = undefined;
            operandTwo = undefined; 
            currentValue = "";
        });
    }
});

percentile.addEventListener("click", () => {
    currentValue = (parseFloat(display.value) / 100).toString();
    display.value = currentValue;
});

signChange.addEventListener("click", () => {
    if(display.value !== "0"){
        currentValue = (parseFloat(display.value) * -1).toString();
        display.value = currentValue;
    }
});

clearAll.addEventListener("click", () => {
    operandOne = undefined;
    operandTwo = undefined; 
    activeOperator = undefined; 
    currentValue = ""; 
    display.value = "";
});