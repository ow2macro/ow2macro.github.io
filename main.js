const defaultPool = 'overwatch_1';

function render() {
  teams[0].resetView();
  teams[1].resetView();

  if (teams[0].roster.length >= 3 && teams[1].roster.length >= 3) {
    const result = analyzeMatchup(teams[0].build(), teams[1].build());
    teams[0].render(result[0], result[1]);
    teams[1].render(result[1], result[0]);
  }
}

function usePool(name) {
  window.appData.datapool = DataPool.load(name);
  for (const team of window.teams) {
    team.datapool = window.appData.datapool;
    team.reset();
  }
}

ready(()=>{
  window.appData = {
    datapool: new DataPool(),
    version: getVersion(),
    versionShort: getShortVersion(),
  }

  const teams = window.teams = [
    new TeamVue('Team 1', 0, window.appData.datapool),
    new TeamVue('Team 2', 1, window.appData.datapool),
  ];

  teams[0].opponent = teams[1];
  teams[1].opponent = teams[0];

  window.appData.teams = teams;

  var app = new Vue({
    el: '#teams',
    data: window.appData,

    components: {
      placeholder,
      rendercontent,
    }
  });

  usePool(defaultPool);
});
