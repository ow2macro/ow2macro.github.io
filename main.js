class TeamView {
  name;
  enable;
  data;
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
    if (this.roster.length > 2) {
      this.data = team.inspect();
      this.enable = true;
    }
  }

  render(result, enemy) {
    if (this.name !== result.team.full) throw `wrong team data, ${this.name} ${result.team.full}`;

    this.renderTeam(result.team);

    this.matchupRole = result.matchupRole;
    this.enemyComp = enemy.team.composition;

    this.playstyle = result.plays;
  }

  resetView() {
    this.enable = false;
    this.matchupRole = '...';
    this.enemyComp = '...';
    this.data = {};
    this.data.scores = {};
    this.data.composition = '...';
    this.data.mobility = 0;
    this.data.scores.mobility = 0;
    this.data.scores.power = 0;
    this.data.brawl = 0;
    this.data.poke = 0;
    this.data.dive = 0;
    this.data.sustain = 0;
    this.data.range = 0;
    this.data.mobile = 0;
    this.playstyle = [];

    this.renderTeam(this.build());
  }
}

function render() {
  team1.resetView();
  team2.resetView();
  
  if (team1.roster.length > 1 && team2.roster.length > 1) {
    const result = analyzeMatchup(team1.build(), team2.build());
    team1.render(result[0], result[1]);
    team2.render(result[1], result[0]);
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
