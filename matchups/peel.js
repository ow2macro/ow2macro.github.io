matchups.push(new Rule(
  'Peel Dive',
  'Peel',
  (team, enemy, role) => rules.mobile(enemy) && role === 'frontline',
  [
    'Peel for allies by focus firing aggressive enemys.',
  ],
))
