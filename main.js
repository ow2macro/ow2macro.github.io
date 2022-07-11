const defaultPool = 'overwatch_1';

function render() {
  teams[0].resetView();
  teams[1].resetView();

  if (teams[0].roster.length > 1 && teams[1].roster.length > 1) {
    const result = analyzeMatchup(teams[0].build(), teams[1].build());
    teams[0].render(result[0], result[1]);
    teams[1].render(result[1], result[0]);
  }
}

function usePool(name) {
  const data = selectPool(name);

  window.appData.compositionSets = data.compositionSets;
  window.appData.roles = data.roles;

  for (const team of window.teams) team.reset();
}

function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(()=>{
  const teams = window.teams = [
    new TeamVue('Team 1'),
    new TeamVue('Team 2')
  ];

  teams[0].opponent = teams[1];
  teams[1].opponent = teams[0];

  const data = window.appData = {
    teams,
    roles: {},
    compositionSets: [],
    version: getVersion(),
  };

  var app = new Vue({
    el: '#teams',
    data,
  });

  usePool(defaultPool);
});
