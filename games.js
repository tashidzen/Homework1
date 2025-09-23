function firstGame(){
    let num = Math.ceil(Math.random() * 100);
    // console.log(num); // раскомментировать эту строку для проверки
    let userNum = prompt(`Введите целое число от 1 до 100`);
    if (userNum === null) {
        return; // При нажатии на "Отмена", игра завершится
    } else {
        userNum = Number(userNum);
        if (isNaN(userNum)) {
            alert(`Вы ввели нечисловое значение`);
        } else {
            while (userNum != num || userNum === num){
                if (userNum > num) {
                    alert(`Загаданное число меньше введенного Вами`);
                 } else if (userNum < num) {
                     alert(`Загаданное число больше введенного Вами`);
                } else {
                    alert(`Вы угадали!`);
                    break;
                }
                userNum = prompt(`Введите целое число от 1 до 100`);
                if (userNum === null) {
                    return; // При нажатии на "Отмена", игра завершится
                } else {
                    userNum = Number(userNum);
                }
            }
        }
    }
}

function secondGame(){
    let countOfRounds = Number(prompt(`Введите количество раундов:`));
    for (let j = 0; j < countOfRounds; j++){
        let num1 = Math.ceil(Math.random() * 100);
        let num2 = Math.ceil(Math.random() * 100);
        const signs = ['+', '-', '*', '/'];
        let i = Math.floor(Math.random()*4);
        let result = 0;
        switch (i){
            case 0: 
                result = num1 + num2; 
                break;
            case 1: 
                result = num1 - num2; 
                break;
            case 2: 
                result = num1 * num2; 
                break;
            case 3:
                while (num1 % num2 !== 0){
                    num1 = Math.ceil(Math.random() * 100);
                    num2 = Math.ceil(Math.random() * 100);
                    if (num1 % num2 === 0){
                        result = num1 / num2; 
                        break;
                    }
                }
        }
        let userResult = Number(prompt(`Сколько будет ${num1} ${signs[i]} ${num2} ? Введите ответ:`));
        if (userResult === result){
            alert(`Верно!`);
        } else {
            alert(`Неверно! Правильный ответ ${result}.`);
        }
    }
}

function thirdGame(){
    let userStr = prompt(`Введите текст:`);
    const arr = userStr.split('');
    arr.reverse();
    let reverseStr = arr.join('');
    alert(`Перевёрнутый текст: ${reverseStr}.`);
}

function fourthGame(){
    let userChoice = prompt("Введите свой выбор: камень, ножницы или бумага?");
    if (userChoice === null) return;
    userChoice = userChoice.toLowerCase();
    while (userChoice !== null && userChoice !== "камень" && userChoice !== "ножницы" && userChoice !== "бумага"){
        const wantContinue = confirm("Введено отличное от предложенного выбора значение. Повторим игру?");
        if (!wantContinue) {
            return;
        }
        userChoice = prompt("Введите свой выбор: камень, ножницы или бумага?");
        userChoice = userChoice.toLowerCase();
    }
    const array = ["камень", "ножницы", "бумага"];
    let index = Math.floor(Math.random() * 3);
    let computerChoice = array[index];
    if (userChoice === computerChoice){
        alert(`Ваш выбор: ${userChoice}, выбор соперника: ${computerChoice}. У вас ничья!`)
    } else if ((userChoice === "камень" && computerChoice === "ножницы") || 
               (userChoice === "ножницы" && computerChoice === "бумага") ||
               (userChoice === "бумага" && computerChoice === "камень")) {
        alert(`Ваш выбор: ${userChoice}, выбор соперника: ${computerChoice}. Вы выиграли!`)
    } else {
        alert(`Ваш выбор: ${userChoice}, выбор соперника: ${computerChoice}. Вы проиграли :(`)
    }
}

function fifthGame(){
// Массив вопросов и правильных ответов
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let correct = 0;
    for (i  = 0; i < quiz.length; i++){
        let userAnswer = Number(prompt(`Введите номер (цифрой) правильного ответа на вопрос "${quiz[i].question}". Варианты ответов: ${quiz[i].options}`));
        if(userAnswer === quiz[i].correctAnswer){
            correct++;
        }
    }
    alert(`Количество правильных ответов = ${correct}`);
}

function sixthGame(){
    const backgroundAbout = document.querySelector('.about');
    const backgroundMiniGames = document.querySelector('.mini-games');
    const btn = document.querySelector('.game__btn--six');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    backgroundAbout.style.backgroundColor = randomColor;
    backgroundMiniGames.style.backgroundColor = randomColor;
}