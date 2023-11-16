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

function buyRustyScissors() {
    if (money >= 5) {
        alert('You have enough money to upgrade your tool.')
        prompt('Would you like to upgrade your tool?')
            if (response === 'yes'){
                money -= 5;
                currentTool = 'rustyScissors';
            }
      
      updateDisplay();
    }
  }

  function buyOldTimeyPushLawnmower() {
    if (money >= 25 && currentTool === 'rustyScissors') {
        alert('You have enough money to upgrade your tool.')
        prompt('Would you like to upgrade your tool?')  
            if (response === 'yes'){
            money -= 25;
            currentTool = 'OldTimeyPushLawnmower';
        }
      updateDisplay();
    }
  }

  function buyFancyBatteryPoweredLawnmower() {
    if (money >= 250 && currentTool === 'oldTimeyPushLawnmower') {
        alert('You have enough money to upgrade your tool.')
        prompt('Would you like to upgrade your tool?')  
            if (response === 'yes'){
                money -= 250;
                currentTool = 'fancyBatteryPoweredLawnmower';

      updateDisplay();
    }
  }
}

function hireTeamOfStarvingStudents() {
    if (money >= 500 && currentTool === 'fancyBatteryPoweredLawnmower') {
        alert('You have enough money to upgrade your tool.')
        prompt('Would you like to upgrade your tool?')  
            if (response === 'yes'){
                money -= 500;
                currentTool = 'teamOfStarvingStudents';
      updateDisplay();
    }
  }
}
  
  function checkWinCondition() {
    if (currentTool === 'teamOfStarvingStudents' && money >= 1000) {
      alert('Congratulations! You have won the game!');
    }
  }