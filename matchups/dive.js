matchups.push(new Rule(
  'Dive vs Brawl',
  'Kite',
  (team, enemy, role) => rules.mobile(team) && rules.sustain(enemy) && role === 'angles',
  [
    'Aggression targets should back up while allies disrupt push.',
  ],
))

matchups.push(new Rule(
  'Dive vs Brawl',
  'Disrupt',
  (team, enemy, role) => rules.mobile(team) && role === 'angles',
  [
    'Disrupt enemy engagement attempts.',
    'Dive supports while tanks engage.',
    'Pressure tanks before they engage.',
    'Use disruptive abilities like hack and boop to disrupt engagements.',
  ],
))

matchups.push(new Rule(
  'Dive vs Brawl',
  'Soft Dive',
  (team, enemy, role) => rules.mobile(team) && rules.sustain(enemy) && role === 'angles',
  [
    'Take low commitment dives for advantages rather than picks, force resources and cooldowns.',
    'Regroup and utilize advantage in a more committed hard dive to get kills.',
    'Retreat quicky, do not attempt to hold space. Instead dismantle the less mobile enemy bit by bit.',
  ],
))

matchups.push(new Rule(
  'Dive vs Poke',
  'Stage Dives',
  (team, enemy, role) => rules.mobile(team) && rules.range(enemy) && role === 'angles',
  [
    'Use map control to scout for easy, isolated dive targets.',
    'Prepare and coordinate committed burst dives to get kills, and get out alive.',
    'Tanks force antidive resources so DPS can safely follow up with burst damage.',
    'Lower value from forcing resources than getting kills.',
  ],
))
