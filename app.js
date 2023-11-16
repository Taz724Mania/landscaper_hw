// You are starting a landscaping business, but all you have are your teeth.
// Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.

let money = 0;
let currentTool = 'teeth';

function cutLawns() {
  if (currentTool === 'teeth') {
    money += 1;
  } else if (currentTool === 'rustyScissors') {
    money += 5;
  } else if (currentTool === 'oldTimeyPushLawnmower') {
    money += 50;
  } else if (currentTool === 'fancyBatteryPoweredLawnmower') {
    money += 100;
  } else if (currentTool === 'teamOfStarvingStudents') {
    money += 250;
  }

  updateDisplay();
}