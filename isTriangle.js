var angles = document.querySelectorAll(".angles");
var btn = document.querySelector("#btn-check");
var outputMsg = document.querySelector("#output-div");

function sumOfAngles(angle1,angle2,angle3) {
  var sum = angle1+angle2+angle3;
  return sum;
}

function clickHandler() {
  hideMessage();
  if (Number(angles[0].value)>0 && Number(angles[1].value)>0 && Number(angles[2].value)>0) {
    var angleSum = sumOfAngles( Number(angles[1].value),Number(angles[2].value),Number(angles[0].value));
  if (angleSum === 180) {
    showMessage("Yayy, the angles form a triangle");
  } else {
    showMessage("Oh Oh!, the angles do not form a triangle");
  }
  } else {
    showMessage("Invalid Input")
  }
}

function hideMessage() {
  outputMsg.style.display = "none";
}

function showMessage(msg) {
  outputMsg.style.display = "block";
  outputMsg.innerText = msg;
}

btn.addEventListener("click", clickHandler);