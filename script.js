let display = document.getElementById('display');
let operand1 = '';
let operator = '';
let operand2 = '';

function appendToDisplay(value) {
    if (operator === '') {
        operand1 += value;
        display.value = operand1;
    } else {
        operand2 += value;
        display.value = operand2;
    }
}

function clearDisplay() {
    operand1 = '';
    operator = '';
    operand2 = '';
    display.value = '';
}

function calculateResult() {
    if (operand1 !== '' && operator !== '' && operand2 !== '') {
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);

        switch (operator) {
            case '+':
                display.value = operand1 + operand2;
                break;
            case '-':
                display.value = operand1 - operand2;
                break;
            case '*':
                display.value = operand1 * operand2;
                break;
            case '/':
                if (operand2 === 0) {
                    display.value = 'Error';
                } else {
                    display.value = operand1 / operand2;
                }
                break;

        }

        operator = '';
        operand1 = display.value;
        operand2 = '';
        appendToDisplay(display.value);
    }
}
