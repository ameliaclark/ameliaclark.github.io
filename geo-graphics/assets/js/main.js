setTimeout(function() { // 
  var fade = document.getElementById("fade"); // 
  fade.style.opacity = 1; // 
  var timerId = setInterval(function() { // 
    var opacity = fade.style.opacity; // 
    if (opacity == 0) { // 
      clearInterval(timerId); // 
    } else {
      fade.style.opacity = opacity - 0.05; // 
    }
  }, 100); // 
}, 3000); // 