matchups.push(new Rule({
  name: 'sustain',
  focus: 'sustain',
  role: 'frontline',
  team: TeamCompositionSelector.sustain,
  enemy: [
    TeamCompositionSelector.range,
    TeamCompositionSelector.mobile,
  ],
  plays: playbook.get('Force Midfight'),
}));

matchups.push(new Rule({
  name: 'sustain v range',
  focus: 'sustain',
  role: 'frontline',
  team: TeamCompositionSelector.sustain,
  enemy: [
    TeamCompositionSelector.range,
    TeamCompositionSelector.sustain,
  ],
  plays: [
    playbook.get('Force Objective'),
    playbook.get('Killbox Objectives or Chokes'),
  ],
}));

matchups.push(new Rule({
  name: 'sustain v dive',
  focus: 'sustain',
  role: 'frontline',
  team: TeamCompositionSelector.sustain,
  enemy: TeamCompositionSelector.dive,
  plays: [
    playbook.get('Peel'),
  ],
}));

matchups.push(new Rule({
  name: 'sustain v sustain',
  focus: 'sustain',
  role: 'angles',
  team: TeamCompositionSelector.sustain,
  enemy: TeamCompositionSelector.sustain,
  plays: [
    playbook.get('Continous Pressure'),
    playbook.get('Soft Flank'),
  ],
}));
