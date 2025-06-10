let display = document.getElementById('display');

function appendNumber(number) {
  if (display.textContent === '0' || display.textContent === 'Error') {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.textContent.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    display.textContent = display.textContent.slice(0, -1) + operator;
  } else {
    display.textContent += operator;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    let result = eval(display.textContent);
    display.textContent = result;
  } catch {
    display.textContent = 'Error';
  }
}
