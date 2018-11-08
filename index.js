function greet(time) {
  var greet;

  if (time < 12) {
      greet = 'Good Morning';
  } else if (time >= 12 && time <= 17) {
      greet = 'Good Afternoon';
  } else if (time >= 17 && time <= 24) {
      greet = 'Good Evening';
  } else {
    greet = 'Hello';
  }
  document.getElementById("greeting").innerHTML = greet;
  return greet;
}

