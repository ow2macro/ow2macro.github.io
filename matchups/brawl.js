matchups.push(new Rule(
  'Brawl vs Dive',
  'Win Condition',
  (team, enemy, role) => rules.sustain(team) && rules.mobile(enemy) && role === 'frontline',
  [
    'Sustain enemy burts to force a mid-fight.',
  ],
))

matchups.push(new Rule(
  'Brawl vs Poke',
  'Win Condition',
  (team, enemy, role) => rules.sustain(team) && rules.range(enemy) && role === 'frontline',
  [
    '"Turtle" on an objective to force a brawl.',
    'Force the enemy to come to you by appling objective pressure.',
    'Take map control by pushing bunkers off of high grounds when possible.',
  ],
))

matchups.push(new Rule(
  'Brawl Positioning',
  'Positioning',
  (team, enemy, role) => rules.sustain(team) && role === 'frontline',
  [
    'Use natural cover to limit enemy angles.',
    'Defend close to point to limit time in the open.',
    'Attack from lanes on either side of the map, avoiding main when possible to reduce angles.',
  ],
))

matchups.push(new Rule(
  'Brawl vs Poke',
  'Positioning',
  (team, enemy, role) => rules.sustain(team) && rules.range(enemy) && role === 'frontline',
  [
    'Idealy enemy team can attack from one direction only making shields more effective.',
  ],
))

matchups.push(new Rule(
  'Brawl vs Dive',
  'Positioning',
  (team, enemy, role) => rules.sustain(team) && rules.mobile(enemy) && role === 'frontline',
  [
    'Idealy enemy team can dive from one direction only making peel easier.',
  ],
))

matchups.push(new Rule(
  'Brawl vs Dive',
  'Peel',
  (team, enemy, role) => rules.sustain(team) && rules.mobile(enemy) && role === 'frontline',
  [
    'Dive targets should stay in range of anti dive heros.',
  ],
))

matchups.push(new Rule(
  'Brawl Mirror',
  'Deny Angles',
  (team, enemy, role) => rules.sustain(team) && rules.sustain(enemy) && role === 'frontline',
  [
    'Deny flanks and angles, then win with superior sustain.',
  ],
))

matchups.push(new Rule(
  'Brawl Mirror',
  'Play Angles',
  (team, enemy, role) => rules.brawl(team) && rules.brawl(enemy) && role === 'angles',
  [
    'Flank and take angles. Use range and mobility advantage to circumvent damage mitigation and cover.',
  ],
))
