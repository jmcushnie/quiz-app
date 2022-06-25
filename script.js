
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const questionEl = document.getElementById("question")


// quiz questions
const quizQuestions = [
    {
        question: "What is the largest country in the world?",
        answers: {
            a: "China",
            b: "USA",
            c: "Russia",
        },
        correctAnswer: "c",
    },
    {
        question: "What is a baby rabbit called?",
        answers: {
            a: "A kit",
            b: "A foal",
            c: "A cook",
        },
        correctAnswer: "a",
    },
    {
        question: "What is Scooby Doo's full name?",
        answers: {
            a: "Scoobert Doo",
            b: "Scoobley Doobley",
            c: "Scoobo Doo Doo",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the biggest animal in the world?",
        answers: {
            a: "Elephant",
            b: "Blue Whale",
            c: "Hippo",
        },
        correctAnswer: "b",
    },
    {
        question: "What relationship are Monica and Ross in Friends?",
        answers: {
            a: "Siblings",
            b: "Spouses",
            c: "Cousins",
        },
        correctAnswer: "a",
    },
];

let currentQuestion = 0;
let score = 0;

loadQuiz();

// load quiz questions and answers
function loadQuiz() {
    deselectAnswer();

    const currentQuiz = quizQuestions[currentQuestion];
    
    questionEl.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.answers.a;
    b_text.innerHTML = currentQuiz.answers.b;
    c_text.innerHTML = currentQuiz.answers.c; 
    
}

function getSelected(){
    

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        } 
    });

    return answer
    
} 

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

const submitBtn = document.getElementById("submit")
submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();

    console.log(answer);
    
    if (answer) {
        //correct answer
        if(answer === quizQuestions[currentQuestion].correctAnswer) {
            score++;
        }
    currentQuestion++;
    if(currentQuestion < quizQuestions.length) {
        loadQuiz();
    } else {
        //show results
        const quizContainer = document.getElementById("quiz-container")
        quizContainer.innerHTML = `<h2 style = 'color:white' > You answered ${score} out of ${quizQuestions.length}
        correctly! </h2>`
    }
}

});

