function selectors(selectors, team) {
  for (const selector of selectors)
    if (selector === true || selector.test(team))
      return true;

  return false;
}

function selectRules(team, enemy, role) {
  const roleSelector =
    rule => rule.role === role
      || rule.role === 'any';

  return _.filter(matchups,
    rule => roleSelector(rule)
      && selectors(rule.team, team)
      && selectors(rule.enemy, enemy)
  );
}

function sortRules(rules, team) {
  const order = playbook.order;

  const setPlay = focus => play => _.set({}, `${play.group}.${focus}`, [play]);
  const getPlay = group => focus => _.get(bins, `${group}.${focus}`, []);

  const bins = _.mergeWith({}, ...rules.map(
    rule => rule.plays.map(setPlay(rule.focus))
  ).flat(), util.arrayMerge);

  return _.merge({}, ...order.map(
    group => ({
      [group]: _.uniq(team.composition.map(getPlay(group)).flat()),
    })
  ));
}

function matchup(team, enemy, role) {
  return _.pickBy(sortRules(selectRules(team, enemy, role), team), x=>x.length);
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
