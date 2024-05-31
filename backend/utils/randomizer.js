// backend/utils/randomizer.js
function randomizeTeams(players) {
    let shuffled = players.sort(() => 0.5 - Math.random());
    let teams = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      teams.push([shuffled[i], shuffled[i + 1]]);
    }
    return teams;
  }
  
  module.exports = { randomizeTeams };
  