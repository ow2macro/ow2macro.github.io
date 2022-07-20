matchups.push(new Rule({
  name: 'range',
  focus: 'range',
  role: 'any',
  team: TeamCompositionSelector.range,
  enemy: [
    TeamCompositionSelector.sustain,
    TeamCompositionSelector.mobile,
  ],
  plays: playbook.get('Continous Pressure'),
}));

matchups.push(new Rule({
  name: 'range v dive',
  focus: 'range',
  role: 'frontline',
  team: TeamCompositionSelector.range,
  enemy: TeamCompositionSelector.dive,
  plays: [
    playbook.get('Peel'),
  ],
}));

matchups.push(new Rule({
  name: 'range v sustain',
  focus: 'range',
  role: 'angles',
  team: TeamCompositionSelector.range,
  enemy: TeamCompositionSelector.sustain,
  plays: [
    playbook.get('Crossfire'),
    playbook.get('Counter Rotate'),
  ],
}));

matchups.push(new Rule({
  name: 'range v range',
  focus: 'range',
  role: 'frontline',
  team: TeamCompositionSelector.range,
  enemy: TeamCompositionSelector.range,
  plays: [
    playbook.get('Continous Pressure'),
  ],
}));

matchups.push(new Rule({
  name: 'range v range',
  focus: 'range',
  role: 'angles',
  team: TeamCompositionSelector.range,
  enemy: TeamCompositionSelector.range,
  plays: [
    playbook.get('Burst Targets'),
    playbook.get('Soft Flank'),
  ],
}));