var length = document.querySelectorAll(".length");
var btnCheck = document.querySelector("#btn-check");
var outputMsg = document.querySelector("#output-div");

function clickHandler() {
 var result = 0.5*(Number(length[0].value)*Number(length[1].value));
 outputMsg.innerText = `The area of the triangle is ${result} cm²`;
}

btnCheck.addEventListener("click",clickHandler);