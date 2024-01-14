let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

document.addEventListener('DOMContentLoaded', function () {
    let screen = document.getElementById('calcScreen');  
    let currentInput = '';
    let ans = 0;
    let isRadians = true;
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        handleButtonClick(button.id);
      });
    });
  
    function handleButtonClick(value) {
      switch (value) {
        case 'clr':
          currentInput = '';
          break;
        case 'equals':
          try {
            ans = eval(currentInput);
            currentInput = ans.toString();
          } catch (error) {
            currentInput = 'Error';
          }
          break;
        case 'angleUnit':
          isRadians = !isRadians;
          break;
        case 'factorial':
          try {
            ans = factorial(parseFloat(currentInput));
            currentInput = ans.toString();
          } catch (error) {
            currentInput = 'Error';
          }
          break;
        case 'percentage':
          try {
            ans = eval(currentInput + '*0.01');
            currentInput = ans.toString();
          } catch (error) {
            currentInput = 'Error';
          }
          break;
        case 'inverse':
          try {
            ans = 1 / parseFloat(currentInput);
            currentInput = ans.toString();
          } catch (error) {
            currentInput = 'Error';
          }
          break;
        case 'sine':
        case 'cosine':
        case 'tangent':
          handleTrigonometricFunction(value);
          break;
        case 'naturalLog':
        case 'log':
          handleLogarithmicFunction(value);
          break;
        default:
          currentInput += value;
      }
  
      updateScreen();
    }
  
    function updateScreen() {
      screen.innerText = currentInput;
    }
  
    function factorial(num) {
      if (num === 0 || num === 1) return 1;
      return num * factorial(num - 1);
    }
  
    // Additional functions for trigonometric and logarithmic operations
    function toRadians(degrees) {
      return degrees * (Math.PI / 180);
    }
  
    function handleTrigonometricFunction(func) {
      try {
        let value = parseFloat(currentInput);
        if (!isRadians) {
          value = toRadians(value);
        }
        ans = Math[func](value);
        currentInput = ans.toString();
      } catch (error) {
        currentInput = 'Error';
      }
    }
  
    function handleLogarithmicFunction(func) {
      try {
        ans = Math[func](parseFloat(currentInput));
        currentInput = ans.toString();
      } catch (error) {
        currentInput = 'Error';
      }
    }
  });
  