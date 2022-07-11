matchups.push(new Rule(
  'Pathing vs Dive',
  'Pathing',
  (team, enemy, role) => rules.mobile(enemy) && role === 'frontline',
  [
    'Prefer pathing through rooms to force divers through doors and limit angles.',
  ],
))
