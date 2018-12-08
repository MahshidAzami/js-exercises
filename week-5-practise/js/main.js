const jumbotron = document.getElementsByClassName("jumbotron")[0];
const donation = document.getElementsByClassName("btn btn-primary btn-lrg")[0];
const VolunteerBtn = document.getElementsByClassName(
  "btn btn-secondary btn-lrg"
)[0];

const blueBotton = document.getElementById("blueBtn");
blueBotton.addEventListener("click", newThemeBlue);
function newThemeBlue() {
  jumbotron.style.backgroundColor = `#588fbd`;
  donation.style.backgroundColor = `#ffa500`;
  VolunteerBtn.style.backgroundColor = `black`;
  VolunteerBtn.style.color = `white`;
}

const orangeBotton = document.getElementById("orangeBtn");
orangeBotton.addEventListener("click", newThemeOrange);
function newThemeOrange() {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donation.style.backgroundColor = `#5751fd`;
  VolunteerBtn.style.backgroundColor = `#31b0d5`;
  VolunteerBtn.style.color = `white`;
}

const greenBotton = document.getElementById("greenBtn");
greenBotton.addEventListener("click", newThemeGreen);
function newThemeGreen() {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donation.style.backgroundColor = `black`;
  VolunteerBtn.style.backgroundColor = `#8c9c08`;
}

const discripeInput = document.getElementById("exampleTextarea");
const nameInput = document.getElementById("example-text-input");
const emailInput = document.getElementById("exampleInputEmail1");
const submitBtn = document.getElementsByClassName("btn-primary")[5];
submitBtn.addEventListener("click", check);
function check() {
  if (
    emailInput.value.length > 0 &&
    nameInput.value.length > 0 &&
    discripeInput.value.length > 0
  ) {
    alert("thank you for filling out the form");
  }
}
