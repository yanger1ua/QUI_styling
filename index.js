
let container_main = document.querySelector('.main')
let container_start = document.querySelector('.start')

let start_button = document.querySelector('.start-btn');
let question_field = document.querySelector('.question');
let answer_buttons = document.querySelectorAll('.answer');
let countQuestion = 0;

container_main.style.display = 'none'
container_start.style.display = 'flex'


class Question {
    constructor(question, answer_1, answer_2, correct, answer_4, answer_5) {
        this.question = question;
        this.correct = correct;
        this.answers = [
            answer_1,
            answer_2,
            this.correct,
            answer_4,
            answer_5,
        ];
    }
    
    display() {
        // Для перемішування запитань
        const shuffledAnswers = this.answers.slice().sort(() => Math.random() - 0.5);
        
        // показуємо запитання + відповіді
        question_field.innerHTML = this.question;
        for (let i = 0; i < shuffledAnswers.length; i += 1) {
            answer_buttons[i].innerHTML = shuffledAnswers[i];
            console.log(shuffledAnswers[i]);
        }
    }
}

let spisok_questions = [
    new Question("хто придумав бокс  ", "Ілля Бришон", "Джоні філіпін", "Джек Бротон", "Норал Джинполан", "Роман Сільсим"),
    new Question("в якому році появився бокс", "1488", "1265", "668 до н.е", "1080", "367 до н.e"),
    new Question("хто виграв чемпіонат по боксу ", "Майк Тайсон", "Фюрі Тайсон", "Олександир Усик", "Джозеф Паркер", "Філіп Хргович"),
    new Question("скільки провів Майк Тайсон боїв ", "23", "46", "58", "55", "54"),
    new Question("скільки провів боїв Олександр Усик", "60", "23", "22", "55", "34"),
    new Question("скільки провів боїв Вітальй кличко", "34", "55", "69", "79", "32"),
    new Question("коли буде чемпіонат світу по боксу", "2027", "2025", "2026", "2028", "2029"),
    new Question("що буде якщо в боксі вдарити ногою", "попередження", "нічо", "вижинуть з змагань", "штраф", "закінчення карєри"),
    
    ];

let total_answers_given = 0;

let current_question;
let container_end = document.querySelector('.end');
let restart_button = document.querySelector('.restart-btn');

start_button.addEventListener('click', function() {
    container_main.style.display = 'flex';
    container_start.style.display = 'none';

    current_question = spisok_questions[total_answers_given];
    current_question.display();
});

for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            console.log("Правильно");
            answer_buttons[i].classList.add('right');
            setTimeout(function() {
                answer_buttons[i].classList.remove('right');
            }, 100); // видаляємо клас 
        } else {
            console.log("Неправильно");
            answer_buttons[i].classList.add('wrong');
            setTimeout(function() {
                answer_buttons[i].classList.remove('wrong');
            }, 100); // видаляємо клас 
        }

        total_answers_given += 1;
        if (total_answers_given === spisok_questions.length) {
            container_main.style.display = 'none';
            container_end.style.display = 'flex'; // Показати екран завершення гри
        } else {
            current_question = spisok_questions[total_answers_given];
            current_question.display();
        }
    });
}

restart_button.addEventListener('click', function() {
    container_end.style.display = 'none';
    container_start.style.display = 'flex';
    total_answers_given = 0;
});
