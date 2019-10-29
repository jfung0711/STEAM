// Getting which element in which to display the answer.
var fortuneDisplayElem = document.getElementById("fortuneDisplay");
var questions = document.getElementById("questions");

var bigplaceElem = document.getElementById("bigplace");
var outsidewalkElem = document.getElementById("outsidewalk");
var playElem = document.getElementById("play");
var meatElem = document.getElementById("meat");
var ssnElem = document.getElementById("ssn");
var petElem = document.getElementById("pet");

function readFortune() {


  // Creating the "fortune" variable.
  var fortune;

  if (ssnElem.value == "")
  {fortune += "<br>Why don't you want to give me your money?!";}

  if (petElem.value == "dog")
  {fortune += "<br>I have a pet dog, he's name is Andy.";}

  if (petElem.value == "cat")
  {fortune += "<br>I love cats, meow.";}

  if (petElem.value == "panda")
  {fortune += "<br>You got to take care of the state-level protected animal.";}

  if (petElem.value == "unicorn")
  {fortune += "<br>I have always dreamed to have an unicorn as a pet when I was little.";}

  if (bigplaceElem.value == "yes")
  {fortune += "<br>If you live in a big place, you are more likely to get a bigger animal as a pet.";}

  if(bigplaceElem.value =="no")
  {fortune += "<br>If you live in a small place, you are more likely to get a smaller animal as a pet.";}

  if(outsidewalkElem.value =="yes")
  {fortune += "<br>If you like to take a outside walk, you should have an energetic pet animal.";}

  if(outsidewalkElem.value =="no")
  {fortune += "<br>If you doesn't like to take a outside walk, you should have a more quite animal, such as a pet cat.";}
 
 if(playElem.value == "yes")
  {fortune += "<br>If you like to play with children, you should have a pet that likes to play with children.";}

  if(playElem.value == "no")
  {fortune += "<br>If you don't like to play with children, you should have a pet that likes to stay alone by themselves";}


  

  
  // Combining our variables into a single message.
  
    fortune += " " + "Thank you for playing!"
    
  



  // You can check the user's input, and adjust variables accordingly.
  
  // Updating the html of our "fortuneDisplayElem" to show our fortune message.
  fortuneDisplayElem.innerHTML = fortune;
  
  // Hiding the element that holds all our questions.
  questions.style.display = "none";
    
}        