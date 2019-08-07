function populate() {
    if (quiz.isEnded()) {
        ShowScores();
    } else {
        // Show question 
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of" + quiz.questions.length;
}

function ShowScores() {
    let gomeOverHTML = "<h1>Result</h1>"
    gomeOverHTML += "<h2 id='score'> Your Score:" + quiz.score + "</h2>";
    let element = document.getElementById("quiz");
    element.innerHTML = gomeOverHTML;
}


var questions = [
    new Question("Which one is not a object oriented pragraming language?", ["Java", "c#", "c++", "c"], "c"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are _____ main components at object oriented programing", ["1", "6", "2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ______", ["Language", "Libary", "Framework", "All"], "Framework")
];

let quiz = new Quiz(questions);

populate();