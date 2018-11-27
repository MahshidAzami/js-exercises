/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const x = document.getElementById("bgrChangeBtn");
x.addEventListener("click", changeColour);
function changeColour() {
  document.body.style.backgroundColor = "blue";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function popUp() {
  alert("Thanks for visiting Bikes for Refugees!");
}
const y = document.getElementById("alertBtn");
y.addEventListener("click", popUp);

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

const someText = document.getElementById("addTextBtn");
someText.addEventListener("click", addSomeText);
function addSomeText() {
  const newPar = document.createElement("p");
  const button = document.querySelector(".buttons");
  button.appendChild(newPar);
  newPar.innerText = "Read more below.";
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.*/
const largerBotton = document.getElementById("largerLinksBtn");
largerBotton.addEventListener("click", largerLink);
function largerLink() {
  const links = document.querySelectorAll("a");
  links.forEach(item => (item.style.fontSize = "2em"));
}
