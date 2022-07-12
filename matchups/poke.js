matchups.push(new Rule(
  'Poke vs Brawl',
  'Win Condition',
  (team, enemy, role) => rules.range(team) && rules.sustain(enemy) && role === 'angles',
  [
    'Prolong poke and engagement to wear out enemy resources.',
    'Counter rotate: aggression targets kite while other lanes trade aggression.',
  ],
))

matchups.push(new Rule(
  'Poke vs Dive',
  'Win Condition',
  (team, enemy, role) => rules.range(team) && rules.pure.brawl(enemy) && role === 'angles',
  [
    'Play spread out to poke out dives during staging and prevent a clean engage.',
  ],
))

matchups.push(new Rule(
  'Poke vs Brawl',
  'Positioning',
  (team, enemy, role) => rules.range(team) && rules.sustain(enemy) && role === 'angles',
  [
    'Use map control by setting up in multiple lanes.',
    'Crossfire: Use multiple angles to circumvent damage mitigation and natural cover.',
  ],
))

matchups.push(new Rule(
  'Poke vs Brawl',
  'Positioning',
  (team, enemy, role) => rules.range(team) && rules.pure.brawl(enemy) && role === 'angles',
  [
    'Take safe, ranged flanks to get more value, brawl team has low ability to punish.',
  ],
))

matchups.push(new Rule(
  'Poke vs Dive',
  'Peel',
  (team, enemy, role) => rules.range(team) && rules.mobile(enemy) && role === 'frontline',
  [
    'Dive targets should stay in line of sight and the effective range of allies. (i.e. snipers should not be close to eachother)',
  ],
))

matchups.push(new Rule(
  'Poke Mirror',
  'Deny Angles',
  (team, enemy, role) => rules.sustain(team) && rules.sustain(enemy) && role === 'frontline',
  [
    'Deny flanks and angles, then win with superior sustain.',
  ],
))

matchups.push(new Rule(
  'Poke Mirror',
  'Poke Angles',
  (team, enemy, role) => rules.poke(team) && rules.poke(enemy) && role === 'angles',
  [
    'Flank and take angles. Use extra range and mobility to take and abuse angles.',
  ],
))
