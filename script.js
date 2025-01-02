// Список предустановленных ответов
const predefinedAnswers = [
    "Yes", "No", "Maybe", "Ask again later", "Definitely", "Absolutely not", "It is certain", "Very doubtful",
    "Outlook good", "My sources say no", "You may rely on it", "Cannot predict now", "Most likely", "Don't count on it",
    "Signs point to yes", "Better not tell you now", "Concentrate and ask again", "Reply hazy, try again", "Without a doubt", "As I see it, yes"
];

const magicBall = document.getElementById("magicBall");
const answerBox = document.getElementById("answer");
const userQuestionInput = document.getElementById("userQuestion");
const shakeAgainButton = document.getElementById("shakeAgain");

// Генерация случайного ответа
function getRandomAnswer() {
    return predefinedAnswers[Math.floor(Math.random() * predefinedAnswers.length)];
}

// Анимация и вывод ответа
function shakeBall() {
    const userQuestion = userQuestionInput.value.trim();
    if (!userQuestion) {
        answerBox.textContent = "Please enter a question.";
        return;
    }
    // Анимация шара
    magicBall.style.animation = "shake 0.5s";
    setTimeout(() => {
        magicBall.style.animation = ""; // Убираем анимацию
        answerBox.textContent = getRandomAnswer();
    }, 500);
}

// Обработчик кнопки
shakeAgainButton.addEventListener("click", shakeBall);

// Анимация для тряски
magicBall.addEventListener("click", shakeBall);

