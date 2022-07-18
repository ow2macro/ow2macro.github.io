class TeamVue {
  name;
  enable;
  data = {};
  heroButtonStyles = {};

  datapool;

  matchupRole;
  enemyComp;

  playstyle = [];

  members = new Set();
  roster = [];

  opponent;

  stats = [];

  constructor(name, id, datapool) {
    this.name = name;
    this.defaultName = name;
    this.id = id;
    this.datapool = datapool;
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
    return new TeamComposition(this.name, this.roster, this.datapool);
  }

  renderTeam(team) {
    this.genHeroStyles(team, this.datapool.heros);
    const n = team.normalizedMetrics();

    this.stats = [{name: 'Cohesion', value: 0}, {name: 'Balance', value: 0}];

    if (this.roster.length > 2) {
      this.stats = [
        {
          name: 'Cohesion',
          value: team.measurePool(team.members),
        },
        {
          name: 'Balance',
          value: util.unlinear(1/2, 1, util.rms([n.sustain, n.range, n.mobile])),
        }
      ];

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
    this.data = {
      mobile: 0,
      sustain: 0,
      range: 0,
      interactionBins: {},
    }
    this.playstyle = [];
    this.heroButtonStyles = {};

    this.renderTeam(this.build());
  }
}
