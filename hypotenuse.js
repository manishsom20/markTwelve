var length = document.querySelectorAll(".length");
var btnCheck = document.querySelector("#btn-check");
var outputMsg = document.querySelector("#output-div");

function squareOfLength(a,b) {
  var result = a*a+b*b;
  return result;
}

function clickHandler() {
  var sum = squareOfLength(Number(length[0].value),Number(length[1].value));
  var answer = Math.sqrt(sum);
  outputMsg.innerText = "The length of the hypotenuse is " + answer + " cm²";
}

btnCheck.addEventListener("click",clickHandler);