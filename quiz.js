var quizForm = document.querySelector(".quiz-form");
var btnCheck = document.querySelector("#btn-check");
var outputMsg = document.querySelector("#output-div");

var correctAnswers = ['90', 'right angled'];

function calculateScore() {
  var score = 0;
  var index = 0;
  const quizData = new FormData(quizForm);
  for (var value of quizData.values()){
    console.log(typeof value);
    if(value === correctAnswers[index]){
      score++;
    }
    index++;
  }
  outputMsg.innerText = "Your score is " + score;
}

function clickHandler() {
  calculateScore();
}

btnCheck.addEventListener("click",clickHandler);