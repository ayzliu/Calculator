function add(x, y){
  return x + y;
}

function subtract(x, y){
  return x - y;
}

function multiply(x, y){
  return x * y;
}

function divide(x, y){
  if(y === 0) throw new Error('Cannot divide by zero'); // Handle division by zero
  return x / y;
}


function operate (operator, num1, num2){
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  switch(operator){
    case '+':
    return add(num1, num2);

    case '-':
      return subtract(num1, num2);

    case '*':
      return multiply(num1,num2);

    case '/':
      return divide(num1, num2)

    // handel unexpected operators
    default:
      throw new Error('Invalid operator');
  }
}


let num1 = undefined;
let operator = undefined;
let displayValue = '0';

const display = document.querySelector("#display");
function updateDisplay(value){
  display.textContent=value;

}

const numberButtons = document.querySelectorAll('.buttonNumber');
numberButtons.forEach(button => {
  button.addEventListener('click', event =>{
    if(displayValue === '0' || displayValue ===0){
      displayValue = event.target.value;
    }else{
      displayValue += event.target.value;
    }
    updateDisplay(displayValue);
  });
});

const operateButtons = document.querySelectorAll(".buttonOperation");
operateButtons.forEach(button => {
  button.addEventListener('click', event => {
    if(num1 !==undefined && displayValue !== '' && operator){
      const result = operate(operator, num1, parseFloat(displayValue));
      displayValue = String(result);
      updateDisplay(displayValue)
    }
    num1 = parseFloat(displayValue);
    operator = event.target.value;
    displayValue = '';
  })
})

const equalButton = document.querySelector(".buttonEqual");
equalButton.addEventListener('click', () => {
   if (num1 !== undefined && operator && displayValue !== ''){
    const result = operate(operator, num1, parseFloat(displayValue));
    displayValue = String(result);
    num1 = undefined;
    updateDisplay(displayValue)
   }
  })

const clearButton = document.querySelector(".buttonClear");
clearButton.addEventListener('click', () => {
   
   displayValue = '0';
   num1=undefined;
   operator=undefined;
   updateDisplay(displayValue)

  });
