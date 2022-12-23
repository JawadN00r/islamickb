function my_function(timestamp) {
  var aud = document.getElementById("myAudio");
  self.addEventListener("click", function () {
    aud.currentTime = timestamp;
    aud.play();
  });
  return;
}
module.exports = my_function;
