//alert ("Hello dirty cat");

//$("h1").css("color", "limegreen");

alert("Hello");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var usedClickPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
$("#level-text").text("Level" + level);
nextSequence();
started = true;

}

});



$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  usedClickPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(usedClickPattern.length-1);



});

function checkAnswer(currentLevel) {

if (gamePattern[currentLevel] === usedClickPattern[currentLevel]) {

  console.log("success");

    if (gamePattern.length  === usedClickPattern.length)

    {
      setTimeout (function()
      {
      nextSequence();}, 1000);
    }
  }

  else {console.log("wrong");
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function ()
  { $("body").removeClass("game-over");}, 200);
  $("#level-text").text("Game Over, Press Any Key to Restart");
  startOver();

}

}


function nextSequence() {

  usedClickPattern = [];
  level++;

  $("#level-text").text("Level" + level);

var randomNumber = Math.floor(Math.random()*4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

}

function playSound(name) {
var sound = new Audio("sounds/" + name + ".mp3");
sound.play();

}

function animatePress(currentColour) {
$("#" + currentColour).addClass("pressed");
setTimeout(function() {
$("#" + currentColour).removeClass("pressed");
}, 100);

}

function startOver () {

level = 0;
gamePattern = [];
started = false;

}

//function Keys() {
  //  var n = Math.random();
  //  return n;
//}
