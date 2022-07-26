matchups.push(new Rule({
  name: 'mobile',
  focus: 'mobile',
  role: 'angles',
  team: TeamCompositionSelector.mobile,
  enemy: [
    TeamCompositionSelector.sustain,
    TeamCompositionSelector.range,
    TeamCompositionSelector.mobile,
  ],
  plays: [
    playbook.get('Burst Targets'),
    playbook.get('Disrupt Rotations'),
  ],
}));

matchups.push(new Rule({
  name: 'dive v sustain',
  focus: 'mobile',
  role: 'angles',
  team: TeamCompositionSelector.dive,
  enemy: TeamCompositionSelector.sustain,
  plays: [
    playbook.get('Soft Dive'),
  ],
}));

matchups.push(new Rule({
  name: 'flank v sustain',
  focus: 'mobile',
  role: 'angles',
  team: TeamCompositionSelector.flank,
  enemy: TeamCompositionSelector.sustain,
  plays: [
    playbook.get('Soft Flank'),
  ],
}));

matchups.push(new Rule({
  name: 'mobile v sustain',
  focus: 'mobile',
  role: 'angles',
  team: TeamCompositionSelector.mobile,
  enemy: TeamCompositionSelector.sustain,
  plays: [
    playbook.get('Disrupt Aggression'),
    playbook.get('Kite Aggression'),
  ],
}));

matchups.push(new Rule({
  name: 'mobile v range',
  focus: 'range',
  role: 'angles',
  team: TeamCompositionSelector.mobile,
  enemy: TeamCompositionSelector.range,
  plays: [
    playbook.get('Scout & Stage'),
  ],
}));

matchups.push(new Rule({
  name: 'mobile v mobile',
  focus: 'mobile',
  role: 'frontline',
  team: TeamCompositionSelector.mobile,
  enemy: TeamCompositionSelector.mobile,
  plays: [
    playbook.get('Continous Pressure'),
    playbook.get('Force Midfight'),
  ],
}));
