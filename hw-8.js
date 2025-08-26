// Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

// Задание 2
function isPositive(x) {
    if (x > 0) {
        return x;
    }
}

function isMale(obj) {
    if (obj.gender ===  'male') {
        return obj;
    }
}

function filter(arr, ruleFunction) {
    const newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));

// Задание 3
let timerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => {clearInterval(timerId); console.log(`30 секунд прошло.`);}, 30000);

// Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
    // callback();
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond_5(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond_5(() => sayHi(`Глеб`));