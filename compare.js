function select(team, enemy, role) {
  return matchups.filter(x=>x.filter(team, enemy, role));
}

function matchup(team, enemy, role) {
  const rules = {};
  for (const rule of select(team.composition, enemy.composition, role)) {
    rules[rule.group] = rules[rule.group] || [];
    rules[rule.group].push(rule);
  }

  const result = [];
  for (const [group, details] of Object.entries(rules)) {
    result.push({
      name: group,
      details: details.map(x=>x.details).flat(),
    })
  }

  return result;
}

function compareTeamsOrdered(angles, frontline) {
  return [
    {
      team: angles,
      matchupRole: 'Angles',
      plays: matchup(angles, frontline, 'angles'),
    },
    {
      team: frontline,
      matchupRole: 'Frontline',
      plays: matchup(frontline, angles, 'frontline'),
    }
  ];
}

function mirrorMatchup(team1, team2) {
  throw 'mirror';
}

function symetricalMatchup(team1, team2) {
  throw 'sym';
}

function analyzeMatchup(team1, team2) {
  if (team1.equals(team2)) return mirrorMatchup(team1, team2);
  if (util.is.approximately.equal(team1.mobility, team2.mobility)) return symetricalMatchup(team1, team2);

  if (team1.mobility > team2.mobility) {
    return compareTeamsOrdered(team1, team2);
  } else {
    return compareTeamsOrdered(team2, team1).reverse();
  }
}
