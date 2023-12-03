// Get references to the calculator elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let currentOperator = '';
let firstOperand = null;

// Function to update the display
function updateDisplay() {
    display.value = currentInput || '0';
}

// Add click event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonValue = button.textContent;

        if (buttonValue === 'C') {
            // Clear the calculator
            currentInput = '';
            currentOperator = '';
            firstOperand = null;
        } else if (!isNaN(buttonValue) || buttonValue === '.') {
            // Handle number input and decimal point
            currentInput += buttonValue;
        } else if ('+-*/'.includes(buttonValue)) {
            // Handle operator input
            if (currentOperator && currentInput) {
                // Calculate the result when there's a previous operator and an input
                firstOperand = calculate(firstOperand, currentInput, currentOperator);
                currentInput = '';
            }
            currentOperator = buttonValue;
        } else if (buttonValue === '=') {
            // Calculate the result when the equals button is pressed
            if (currentOperator && currentInput) {
                firstOperand = calculate(firstOperand, currentInput, currentOperator);
                currentInput = String(firstOperand);
                currentOperator = '';
            }
        }

        updateDisplay();
    });
});

// Function to perform calculations
function calculate(firstOperand, secondOperand, operator) {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}
