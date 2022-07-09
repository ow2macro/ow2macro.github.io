const epsilon = 0.1;

const matchups = {
  'angles':
    ['map_control', 'kite', 'disrupt'],

  'frontline':
    ['objective', 'peel', 'poke', 'kite', 'path', 'deny_angles'],
}


const playNames = {
  'map_control': 'Map Control',
  'deny_angles': 'Deny Angles',
  'objective': 'Force Objective',
  'kite': 'Kite Aggression',
  'peel': 'Peel',
  'poke': 'Poke',
  'path': 'Path',
  'disrupt': 'Disrupt',
}

const compositionPlays = {
  'Brawl': {
    'win_condition': {
      'objective': 'Force a brawl and win it. This is often accomplished by "turtling" on the objective until the enemy contests it.',
    },

    'Dive': {
      'peel': 'Focus pressure and abilities on threatened allies. Save Anti Dive cooldowns to aid in punishing dive attempts. Avoid demanding resources while an ally is threatened by a dive.',
      'kite': 'Back up when backline is threatened to further isolate the enemy dive, allowing the use of nataral cover and distance to make peeling safer.',
    },

    'Poke': {
      'kite': 'Use natural cover and strong resource regeneration to recover before pushing.',
      'path': 'Use natural cover to avoid long sight lines and aid shields in blocking off angles.',
    },
  },

  'Poke': {
    'win_condition': {
      'kite': 'Maintain distance to wear out enemy resources and get picks before and during engagement to win the fight before it starts.',
    },

    'Brawl': {
      // 'counter': 'Poke tradtionally wins this matchup by default.',
    },

    'Dive': {
      'poke': 'Force out enemy dives during staging, preventing them from getting a clean engage.',
      'peel': 'Focus pressure and abilities on threatened allies. Save Anti Dive cooldowns to punish dive attempts.',
    },
  },

  'Dive': {
    'win_condition': {
      'map_control': 'Win map control by setting up multiple angles to circumvent damage mitigation and cover.',
    },

    'Brawl': {
      'disrupt': 'Disrupt aggression by splitting attention (ie. diving supports while tanks push) and using cooldowns like hack or boop.',
      'kite': 'Agression targets should maintain distance from aggression while the rest of the team disrupts.',
    },

    'Poke': {
      // 'counter': 'Dive tradtionally wins this matchup by default.',
    },
  },

  'Mirror': {
    'map_control': 'Utilize range and mobility. Win map control by setting up multiple angles to circumvent damage mitigation and cover.',
    'deny_angles': 'Utilize sustain. Deny angles, flanks, and map control, and then win the frontline fight by default.',
  }
}

function getMatchupPlays(a, b) {
  if (a === b) return compositionPlays.Mirror;
  return compositionPlays[a][b];
}

function selectPlays(pool, team, enemy) {
  const result = [];
  const validMatchups = [];

  // select options based on team comps
  validMatchups.push(compositionPlays[team.primary].win_condition);

  validMatchups.push(getMatchupPlays(team.primary, enemy.primary));

  if (enemy.hybrid) validMatchups.push(getMatchupPlays(team.primary, enemy.hybrid));

  if (team.hybrid) {
    validMatchups.push(compositionPlays[team.hybrid].win_condition);
    if (enemy.hybrid) validMatchups.push(getMatchupPlays(team.hybrid, enemy.hybrid));
  }

  // select the intersection of options and pool
  for (const x of pool) {
    for (const options of validMatchups) {
      if (options.hasOwnProperty(x)) result.push({
        name: playNames[x],
        details: options[x]
      });
    }
  }

  return result;
}

function compareTeamsOrdered(angles, frontline) {
  return [
    {
      team: angles,
      matchupRole: 'angles',
      plays: selectPlays(matchups.angles, angles, frontline),
    },
    {
      team: frontline,
      matchupRole: 'frontline',
      plays: selectPlays(matchups.frontline, frontline, angles),
    }
  ];
}

function mirrorMatchup(team1, team2) {
  const mirror = [matchups.angles, matchups.frontline].flat();
  return [
    {
      team: team1,
      matchupRole: 'mirror',
      plays: selectPlays(mirror, team1, team2),
    },
    {
      team: team2,
      matchupRole: 'mirror',
      plays: selectPlays(mirror, team2, team1),
    }
  ];
}

function compareTeams(team1, team2) {

  if (team1.mobility - team2.mobility < epsilon) return mirrorMatchup(team1, team2);

  if (team1.mobility > team2.mobility) {
    return compareTeamsOrdered(team1, team2);
  } else {
    return compareTeamsOrdered(team2, team1).reverse();
  }
}
