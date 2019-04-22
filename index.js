/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  if(parseInt(time.substring(0,2)) <= 12){
    return "Good Morning"
  }else if(parseInt(time.substring(0,2)) <= 17){
    return "Good Afternoon"
  }else{
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.querySelector("#greeting").innerHTML = string
}
