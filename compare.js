const epsilon = 1;

const matchups = {
  'angles':
    ['map_control', 'kite', 'disrupt', 'utilize_angles'],

  'frontline':
    ['objective', 'deny_angles', 'path', 'pokedives', 'peel', 'utilize_frontline'],

  'mirror':
    ['objective', 'map_control', 'kite', 'path', 'peel', 'deny_angles', 'pokedives'],
}


const playNames = {
  'utilize_frontline': 'Utilize Sustain',
  'utilize_angles': 'Utilize Mobility and Range',
  'map_control': 'Map Control',
  'deny_angles': 'Deny Angles',
  'objective': 'Force Objective',
  'kite': 'Kite Aggression',
  'peel': 'Peel',
  'pokedives': 'Poke Staging',
  'path': 'Path',
  'disrupt': 'Disrupt',
}

const compositionPlays = {
  'Brawl': {
    'win_condition': {
      'objective': 'Force a brawl and win it. This is often accomplished by "turtling" on the objective until the enemy contests it.',
    },

    'Dive': {
      'peel': 'Focus pressure and abilities on threatened allies. Save antidive cooldowns to aid in punishing dive attempts.',
      'kite': 'Back up when backline is threatened to further isolate the enemy dive, allowing the use of nataral cover and distance to make peeling safer.',
    },

    'Poke': {
      'path': 'Use natural cover to avoid long sight lines and aid shields in blocking off angles.',
    },

    'Hybrid': {
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
      'pokedives': 'Force out enemy dives during staging, preventing them from getting a clean engage.',
      'peel': 'Focus pressure and abilities on threatened allies. Save antidive cooldowns to punish dive attempts.',
    },

    'Hybrid': {
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

    'Hybrid': {
    },
  },

  'Hybrid': {
    'win_condition': {
      'utilize_angles': 'Utilize range and mobility. Win map control by setting up multiple angles to circumvent damage mitigation and cover.',
      'utilize_frontline': 'Utilize sustain. Deny angles, flanks, and map control, and then win the frontline fight by default.',
    },

    'Brawl': {
    },

    'Poke': {
    },

    'Dive': {
    },
  },

  'Mirror': {
    'utilize_angles': 'Utilize range and mobility. Win map control by setting up multiple angles to circumvent damage mitigation and cover.',
    'utilize_frontline': 'Utilize sustain. Deny angles, flanks, and map control, and then win the frontline fight by default.',
  },
}

function getMatchupPlays(a, b) {
  if (a === b) return createMatchupPlays(compositionPlays.Mirror, a, b, false, true);
  return createMatchupPlays(compositionPlays[a][b], a, b);
}

function getWinCondition(a) {
  return createMatchupPlays(compositionPlays[a].win_condition, a, 'Win Condition', true);
}

function createMatchupPlays(plays, src, dst, isWinCondition=false, isMirror=false) {
  return {
    plays,
    src,
    dst,
    isWinCondition,
    isMirror,
  };
}

function renderMatchupPlay(set, x) {
  return {
    name: playNames[x],
    details: set.plays[x],
    rule:
      set.isMirror
      ? `Mirror (${set.src} vs ${set.dst})`
      : (
        set.isWinCondition
        ? `${set.src} Win Condtion`
        : `${set.src} vs ${set.dst}`
      ),
  }
}

function selectPlays(pool, team, enemy) {
  const result = [];
  const resultAlt = [];
  const validMatchups = [];

  // select options based on team comps (in order of importance)
  validMatchups.push(getWinCondition(team.primary));
  validMatchups.push(getMatchupPlays(team.primary, enemy.primary));

  if (team.hybrid) validMatchups.push(getWinCondition(team.hybrid));
  if (enemy.hybrid) validMatchups.push(getMatchupPlays(team.primary, enemy.hybrid));
  if (team.hybrid) validMatchups.push(getMatchupPlays(team.hybrid, enemy.primary));
  if (team.hybrid && enemy.hybrid) validMatchups.push(getMatchupPlays(team.hybrid, enemy.hybrid));

  // select the intersection of options and pool
  let target;
  for (const x of pool) {
    target = result;
    for (const set of validMatchups) {
      if (set.plays.hasOwnProperty(x)) {
        target.push(renderMatchupPlay(set, x, !!team.hybrid));
        target = resultAlt;
      }
    }
  }

  return [result, resultAlt].flat();
}

function compareTeamsOrdered(angles, frontline) {
  return [
    {
      team: angles,
      matchupRole: 'Angles',
      plays: selectPlays(matchups.angles, angles, frontline),
    },
    {
      team: frontline,
      matchupRole: 'Frontline',
      plays: selectPlays(matchups.frontline, frontline, angles),
    }
  ];
}

function mirrorMatchup(team1, team2) {
  return [
    {
      team: team1,
      matchupRole: 'Mirror',
      plays: selectPlays(matchups.mirror, team1, team2),
    },
    {
      team: team2,
      matchupRole: 'Mirror',
      plays: selectPlays(matchups.mirror, team2, team1),
    }
  ];
}

function analyzeMatchup(team1, team2) {

  if (team1.equals(team2)) return mirrorMatchup(team1, team2);

  if (Math.abs(team1.mobility - team2.mobility) < epsilon) return mirrorMatchup(team1, team2);

  if (team1.mobility > team2.mobility) {
    return compareTeamsOrdered(team1, team2);
  } else {
    return compareTeamsOrdered(team2, team1).reverse();
  }
}
