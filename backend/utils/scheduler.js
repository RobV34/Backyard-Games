// backend/utils/scheduler.js
function generateSchedule(teams) {
    let schedule = [];
    let rounds = teams.length - 1;
    for (let round = 0; round < rounds; round++) {
      let matches = [];
      for (let i = 0; i < teams.length / 2; i++) {
        matches.push([teams[i], teams[teams.length - 1 - i]]);
      }
      teams.splice(1, 0, teams.pop());
      schedule.push(matches);
    }
    return schedule;
  }
  
  module.exports = { generateSchedule };
  