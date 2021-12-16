var quizArray = [
    {
        question : 'HTML stand for.....?',
        answer : 'Hyper text markup Language',
        options : [
            'Hyper text programming Language',
            'Hyper text markup Language',
            'Hyper text styling language',
            'Hyper text scripting Language',
        ]
    },
    {
        question : 'Which type of JavaScript Languages is',
        answer : 'Object-Base',
        options : [
            'Object-Oriented',
            'Object-Base',
            'Assembly Languages',
            'Assembly Languages',
        ]
    },
    {
        question : "The 'function' and  'var' are known as:",
        answer : 'Declaration statements',
        options : [
            'Keywords',
            'Data types',
            'Prototypes',
            'Declaration statements',
        ]
    },
    {
        question : 'who is the present president of pakistan',
        answer : 'Arif Alvi',
        options : [
            'Imran Khan',
            'Arif Alvi',
            'Nawaz Sharif',
            'Zardari',
        ]
    },{
        question : 'How many prayers in a day:',
        answer : '5',
        options : [
            '6',
            '5',
            '3',
            'none',
        ]
    },
];

var questionCount = 0;
var score = 0;
var wrongCounter = 0;
var nextBtn = document.getElementById('nextBtn');
var quizOptions = document.getElementsByClassName('quizOptions');
var userInput = document.getElementById('userInput');

document.getElementById('mainBox').style.display = "none";
document.getElementById('mainBox').style.height = 0;

document.getElementById('resultBox').style.display = "none";
document.getElementById('resultBox').style.height = 0;


function showQues(e){
    document.getElementById('userName').innerHTML = userInput.value;
    var questions = document.getElementById('questions');
    document.getElementById('quesCount').innerHTML = (questionCount + 1) + " / " + quizArray.length;
    questions.innerHTML = quizArray[e].question;

    for(var i = 0; i < quizOptions.length; i++){
        quizOptions[i].innerHTML = quizArray[e].options[i];
        quizOptions[i].setAttribute("onclick","checkAnswer(this)");
        quizOptions[i].style.pointerEvents = "visible";
        quizOptions[i].style.backgroundColor = "transparent";
    }
    nextBtn.style.display = "none";
}


function nextQuestion(){
    questionCount++;
    if(questionCount == quizArray.length){
        var resultBox = document.getElementById('resultBox');
        resultBox.style.display = "flex";
        resultBox.style.height = "80vh";
        var mainBox = document.getElementById('mainBox');
        mainBox.style.display = "none";
        document.getElementById('showName').innerHTML = userInput.value;
        document.getElementById('userScore').innerHTML = score;
        document.getElementById('totalQues').innerHTML = quizArray.length;
        document.getElementById('wrongAns').innerHTML = wrongCounter;
    }
    showQues(questionCount);
}

function checkAnswer(check){
    if(check.innerHTML == quizArray[questionCount].answer){
        console.log("true");
        score++;
        check.style.backgroundColor = "green";
    }else{
        wrongCounter++;
        check.style.backgroundColor = "red";
    }

    for(var i = 0; i < quizOptions.length; i++){
        quizOptions[i].style.pointerEvents = "none";
    }

    nextBtn.style.display = "block"
}

function userSubmit(e){
    if(userInput.value.length > 3){
        document.getElementById('userName').innerHTML = userInput.value;
        document.getElementById('userMainBox').style.display = "none";
        document.getElementById('mainBox').style.display = "flex";
        document.getElementById('mainBox').style.minHeight = "100vh";
    }
}

function backBtn(){
    window.location.href= "";
}