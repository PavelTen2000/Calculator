const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function (a, operator, b) {
    return operator(a, b);
};
let operator = 'multiply';
let a = 1;
let b = 1;
secondScreen = document.querySelector('#second-screen');
firstScreen = document.querySelector('#first-screen');
buttons = document.querySelectorAll('button:not(#del):not(#AC)');
buttons.forEach((button) =>
    button.addEventListener('click', () => {
        if (secondScreen.textContent.length < 7) {
            if (secondScreen.textContent == '0') {
                secondScreen.textContent = '';
            }
            secondScreen.textContent += button.textContent;
        }
        if (button.className.includes('attribute')) {
            if (button.id == 'divide') {
                operator = divide;
            }
            if (button.id == 'multiply') {
                operator = multiply;
            }
            if (button.id == 'subtract') {
                operator = subtract;
            }
            if (button.id == 'add') {
                operator = add;
            }
            a = parseFloat(secondScreen.textContent);
            firstScreen.textContent = secondScreen.textContent;
            secondScreen.textContent = '0';
        }
        if (button.id == 'equal') {
            b = parseFloat(secondScreen.textContent);
            firstScreen.textContent += secondScreen.textContent;
            secondScreen.textContent = operate(a, operator, b);
        }
    })
);

let del = document.querySelector('button#del');
del.addEventListener('click', () => {
    if (secondScreen.textContent.length == 1) {
        secondScreen.textContent = 0;
    } else {
        secondScreen.textContent = secondScreen.textContent.slice(0, -1);
    }
    if (secondScreen.textContent == 0) {
        secondScreen.textContent = firstScreen.textContent;
        firstScreen.textContent = '';
    }
});

let AC = document.querySelector('button#AC');
AC.addEventListener('click', () => {
    if (secondScreen.textContent == '0') {
        secondScreen.textContent = '';
        firstScreen.textContent = '';
    } else {
        secondScreen.textContent = '0';
    }
});
