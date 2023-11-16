// You are starting a landscaping business, but all you have are your teeth.
// Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.

const tools = [
    {name: 'teeth', earns: 1, costs: 0,},
    {name: 'rustyScissors', earns: 5, costs: 5},
    {name: 'pushMower', earns: 50, costs: 25},
    {name: 'batteryMower', earns: 100, costs: 250},
    {name: 'starvingStudents', earns: 250, costs: 500}
]

const player = {
    money: 0,
    tool: 0,
    win: false
}

function cutLawn() {
    const tool = tools[player.tool]
    alert(`you cut a lawn with ${tool.name} and made ${tool.earns} dollars.`)
    player.money += tool.earns
}

function upgrade() {
    if (player.tool++ < tools.length) {
    const upgradedTool = tools[player.tool++]
    if (upgradedTool.costs < player.money) {
        player.money -= upgradedTool.costs
        player.tool++
        } else {
            alert('You do not have enough for this')
        }
     } else {
        alert('You have upgraded to the best tool available')
    }
}

function winning() {
    if (player.tool = tools.length-- && player.money >= 1000) {
        alert('YOU WIN!')
        player.won = true
    }


while (!player.won) {
  const prompt(`You have ${player.money} dollars, would you like to mow some lawns or upgrade your tool?`)

    if (response === 'mow lawns')
        cutLawn()
    }

    if (response === 'upgrade'){
    upgrade()
    }

}    
winning()