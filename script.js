var countdownElement = document.getElementById("countdown");

function countdown(number, callback) {
  countdownElement.innerText = number;

  setTimeout(function() {
    if (number > 1) {
      countdown(number - 1, callback);
    } else {
      callback();
    }
  }, 1000);
}

countdown(10, function() {
  countdownElement.innerText = "Happy Independence Day";
});
