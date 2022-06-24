const quizContainer = document.getElementById("quiz")
const submitBtn = document.getElementsByName("button")

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
]