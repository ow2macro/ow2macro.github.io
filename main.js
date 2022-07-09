class TeamView {
  name;
  data = {};
  matchupRole;
  enemyComp;

  playstyle = [];

  members = new Set();
  roster = [];

  opponent;

  constructor(name) {
    this.name = name;
    this.resetView();
  }

  toggle(hero) {
    if (this.members.has(hero)) this.remove(hero);
    else this.add(hero);
  }

  add(hero) {
    this.members.add(hero);
    this.updateRoster();
  }

  remove(hero) {
    this.members.delete(hero);
    this.updateRoster();
  }

  reset() {
    this.members.clear();
    this.updateRoster();
  }

  updateRoster() {
    const roles = herosByRole(this.members);
    this.roster = [roles.Tank, roles.Damage, roles.Support].flat();
    render();
  }

  build() {
    return new TeamComposition(this.name, this.roster);
  }

  renderTeam(team) {
    this.data = team.inspect();
  }

  render(result, enemy) {
    if (this.name !== result.team.full) throw `wrong team data, ${this.name} ${result.team.full}`;

    this.renderTeam(result.team);

    this.matchupRole = result.matchupRole;
    this.enemyComp = enemy.team.composition;

    this.playstyle = result.plays;
  }

  resetView() {
    this.matchupRole = '...';
    this.enemyComp = '...';
    this.data = {};
    this.data.composition = '...';
    this.data.mobility = 0;
    this.playstyle = [];

    if (this.roster.length > 2) this.renderTeam(this.build());
  }
}

function render() {
  if (team1.roster.length > 2 && team2.roster.length > 2) {
    const result = analyzeMatchup(team1.build(), team2.build());
    team1.render(result[0], result[1]);
    team2.render(result[1], result[0]);
  } else {
    team1.resetView();
    team2.resetView();
  }
}

const team1 =  new TeamView('Team 1');
const team2 = new TeamView('Team 2');

team1.opponent = team2;
team2.opponent = team1;

const teams = [team1, team2];

const data = {
  teams,
  roles: herosByRole(),
};

var app = new Vue({
  el: '#teams',
  data,
});
