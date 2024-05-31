// backend/utils/randomizer.js
function randomizeTeams(players) {
  let shuffled = players.sort(() => 0.5 - Math.random());
  let teams = [];
  for (let i = 0; i < shuffled.length; i += 2) {
    teams.push([shuffled[i], shuffled[i + 1]]);
  }
  return teams;
}

function generateTeamNames(teams) {
  const teamNames = ["Team One", "Team Two", "Team Three", "Team Four"]; // Add more names as needed
  return teams.map((team, index) => ({
    name: teamNames[index % teamNames.length],
    players: team
  }));
}

module.exports = { randomizeTeams, generateTeamNames };


  