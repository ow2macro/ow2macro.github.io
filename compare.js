const epsilon = 0.1;

function compareTeamcomps(team1, team2) {
  const deltaScore = team1.score - team2.score;
  const deltaRange = team1.range - team2.range;

  if (Math.abs(deltaScore) < epsilon) {
    if (Math.abs(deltaRange) < epsilon) return {
      mirror: true,
      angles: null,
      frontline: null,
    };
    if (team1.range > team2.range) return {
      similarity: 1 - Math.abs(deltaRange)*epsilon,
      angles: team1,
      frontline: team2,
    }
    return {
      similarity: 1 - Math.abs(deltaRange)*epsilon,
      frontline: team2,
      angles: team1,
    }
  }

  if (team2.score > team1.score) {
    return {
      similarity: 1 - Math.abs(deltaScore),
      angles: team2,
      frontline: team1,
    }
  }

  return {
    similarity: 1 - Math.abs(deltaScore),
    angles: team1,
    frontline: team2,
  }
}

function printCompareResult(result) {
  if (result.mirror) return 'effective mirror matchup, play to hero specific strengths';
  return `${result.angles.full} should take angles and disrupt agression, ${result.frontline.full} should deny angles or run it down mid (${Math.round(result.similarity * 100)}% similar)`;
}
