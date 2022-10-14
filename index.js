function scuberGreetingForFeet(someValue){

let result

if (someValue <= 400) {
  result = "This one is on me!";

} else if (someValue > 400 && someValue < 2000) {
  result = "That will be twenty bucks.";

} else if (someValue > 2000 && someValue < 2500) {
  result = "I will gladly take your thirty bucks.";

} else if (someValue > 2500) {
  result = "No can do.";
}

return result
}





function ternaryCheckCity(someCity){
const message = (someCity = NYC) ? "Ok, sounds good." : "No go.";

return message;
}

function switchOnCharmFromTip(){
  // Write your code here!
}