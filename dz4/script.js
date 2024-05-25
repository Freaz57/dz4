//Задание 1
let num1 = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");

if (num1 <= 1 && num2 >= 3) {
    console.log('Переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.');
} else {
    console.log('Условие не выполнено.');
}

//Заадание 2

let test = true;
console.log(test === true ? '+++' : '---');

//Задание 3
let day = prompt("Введите число от 1 до 31:");
day = Number(day);

if (day >= 1 && day <= 10) {
    console.log('Первая декада месяца');
} else if (day > 10 && day <= 20) {
    console.log('Вторая декада месяца');
} else if (day > 20 && day <= 31) {
    console.log('Третья декада месяца');
} else {
    console.log('Некорректный ввод. Введите число от 1 до 31.');
}
