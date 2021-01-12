/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// 1) Returns Good Morning before 12pm
// 2) Returns Good Afternoon between 12pm and 5pm
// 3) Returns Good Evening after 5pm
function greet(timeHhMm) {
  let i = parseInt(timeHhMm, 10)
  if (i < 12) return 'Good Morning'
  else if (i > 17) return 'Good Evening'
  else return 'Good Afternoon'
}

/* Write your implementation of displayMessage() */
// updates the DOM with an appropriate message

function displayMessage(text){
  document.getElementById('greeting').innerText = text
}