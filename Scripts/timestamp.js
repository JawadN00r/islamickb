function my_function(timestamp) {
  var aud = document.getElementById("myAudio");
  this.addEventListener("click", function () {
    aud.currentTime = timestamp;
    aud.play();
  });
  return;
}
module.exports = my_function;
