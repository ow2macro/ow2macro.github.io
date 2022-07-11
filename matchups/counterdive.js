matchups.push(new Rule(
  'Counter Dive',
  'Counter Dive',
  (team, enemy, role) => rules.mobile (team) && rules.mobile(enemy) && role === 'frontline',
  [
    'Bait enemy into investing resources diving allied tanks, then dive the enemy dive and win with resource advantage.',
  ],
))
