// Задание №1
'use strict';

let input;
const numbers = [];
let total = 0;
do {
    input = Number(prompt('Введите число'));
    if (Number.isNaN(input) === true) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        numbers.push(input);
    }
} while (input !== 0) 
    let startNum = 0;
    for (let key of numbers){
        total = startNum += key;
    }
console.log(`Общая сумма чисел равна ${total}`);

// Задание №2

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let inputOfSecondTask;
let count = 0;
let numberOfTry;

while (true) {
    inputOfSecondTask = prompt('Введите свой пароль');
    count += 1;
    numberOfTry = attemptsLeft - count;
    if (inputOfSecondTask === null) {
        break;
    } else
    if (passwords.includes(inputOfSecondTask) === true){
        alert('Добро пожаловать!');
        break;
    } else 
    if (numberOfTry < 1) {
        alert('У вас закончились попытки, аккаунт заблокирован!');
        break;
    }
    else {
        alert(`Неверный пароль, у вас осталось ${numberOfTry} попыток`);
    }
}
