// JavaScript for the calculator
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');
  
    // Add a click event listener to each button
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (this.value === '=') {
          // Evaluate and display the result
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else if (this.value === 'C') {
          // Clear the display
          display.value = '';
        } else {
          // Append the button value to the display
          display.value += this.value;
        }
      });
    });
  });
  