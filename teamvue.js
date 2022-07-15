class TeamVue {
  name;
  enable;
  data = {};
  heroButtonStyles = {};

  matchupRole;
  enemyComp;

  playstyle = [];

  members = new Set();
  roster = [];

  opponent;

  constructor(name, id) {
    this.name = name;
    this.defaultName = name;
    this.resetView();
    this.id = id;
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
    this.name = this.defaultName;
    this.updateRoster();
  }

  preset(team) {
    this.members.clear();
    this.name = this.defaultName;
    this.name = team.full;
    for (const hero of team.members) {
      this.members.add(hero);
    }
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
    this.genHeroStyles(team, window.appData? window.appData.heros : []);

    if (this.roster.length > 2) {
      this.data = team;
      this.enable = true;
    }
  }

  genHeroStyles(team, heros) {
    const primary = 255;
    const secondary = 120;
    const tertiary = 42;

    const value = 66;
    const grey = (primary+secondary+tertiary)/3 - value;
    const shade = 3;

    for (const hero of heros) {

      let r = tertiary;
      let g = secondary;
      let b = primary;

      if (this.roster.length >= 1) {
        const x = team.measureHeroOption(hero);

        if (x === true) {
          r = tertiary;
          g = primary - value;
          b = primary - value;
        } else {
          r = util.linear(grey, tertiary, x);
          g = util.linear(grey, secondary, x);
          b = util.linear(grey, primary, x);
        }
      }

      const color = `rgb(${r}, ${g}, ${b})`;

      this.heroButtonStyles[hero.id] = {
        color: 'white',
        backgroundColor: color,
        borderColor: color,
        fontWeight: 600,
      }
    }
  }

  render(result, enemy) {
    if (this.name !== result.team.full) throw `wrong team data, ${this.name} ${result.team.full}`;

    this.renderTeam(result.team);

    this.matchupRole = result.matchupRole;
    this.enemyComp = enemy.team.compositionName;

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
    this.data.heroWeights = {};
    this.data.brawl = 0;
    this.data.poke = 0;
    this.data.dive = 0;
    this.data.sustain = 0;
    this.data.range = 0;
    this.data.mobile = 0;
    this.playstyle = [];
    this.heroButtonStyles = {};

    this.renderTeam(this.build());
  }
}
