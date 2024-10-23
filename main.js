const operators = document.querySelectorAll(".operators");

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