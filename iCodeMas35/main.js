document.addEventListener('DOMContentLoaded', function () {
  const calculatorButtons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      '←', 'C'
  ];

  let displayValue = '';
  const displayElement = document.getElementById('display'); // input box

  function appendToDisplay(value) {
      if (value === '←') {
          displayValue = displayValue.slice(0, -1);
      } else if (value === 'C') {
          displayValue = '';
      } else if (calculatorButtons.includes(value)) {
          displayValue += value;
      }
      displayElement.value = displayValue;
  }

  function calculate() {
      try {
          const result = Function('"use strict";return (' + displayValue + ')')();
          displayElement.value = result;
          displayValue = result.toString();
      } catch (error) {
          displayElement.value = 'Error';
      }
  }
      //diffrent version of calculate function
  // function calculate() {
  //     try {
  //         const result = eval(displayValue);
  //         displayElement.value = result;
  //         displayValue = result.toString();
  //     } catch (error) {
  //        
  //         displayElement.value = 'Error';
  //     }
  // }

  function handleKeyboardInput(event) {
      const key = event.key;

      if (key === 'Enter') {
          calculate();
      } else if (calculatorButtons.includes(key)) {
          appendToDisplay(key);
      }
  }

  const buttonsDiv = document.getElementById("buttons");
  let currentRow;
  calculatorButtons.forEach((buttonValue, index) => {
      if (index % 4 === 0) {
          currentRow = document.createElement('div');
          buttonsDiv.appendChild(currentRow);
      }

      const button = document.createElement('button');
      button.textContent = buttonValue;
      button.classList = `bg-black text-white py-4 px-10  m-2 rounded-md pt-5`;
      if (buttonValue === '=') {
          button.addEventListener('click', calculate);
      } else {
          button.addEventListener('click', () => appendToDisplay(buttonValue));
      }
      function handleBackspace() {
          displayValue = displayValue.slice(0, -1);
          displayElement.value = displayValue;
      }
      document.addEventListener('keydown', function (event) {
          if (event.key === 'Backspace') {
              handleBackspace();
          }
      });
      currentRow.appendChild(button);
  });
  document.addEventListener('keydown', handleKeyboardInput);
});
// button.classList = `bg-black text-white py-4 px-10  m-2 rounded-md pt-5`9