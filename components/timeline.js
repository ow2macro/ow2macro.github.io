function getTimeLineData(teams) {
  const labels = ['', 'Poke', 'Engagement', 'Midfight', ''];

  const colors = [
    'rgb(69, 120, 233)',
    'rgb(233, 69, 103)',
  ];

  const backgroundColors = [
    'rgba(69, 120, 233, 0.1)',
    'rgba(233, 69, 103, 0.1)',
  ];

  const datasets = teams.map(team => ({
    label: team.name,
    data: [
      0,
      team.data.poke * 100,
      team.data.engage * 100,
      team.data.mid * 100,
      0,
    ],
    cubicInterpolationMode: 'monotone',
    tension: 0.25,
    borderColor: colors.shift(),
    backgroundColor: backgroundColors.shift(),
    fill: true,
  }));

  return {
    labels: labels,
    datasets,
  }
}

const timeline = {
    props: ['teams'],
    template: `
      <canvas ref="canvas" style="max-height: 768px"></canvas>
    `,

    watch: {
      teams: {
        handler(teams) {
          this.update();
        },
        deep: true,
      }
    },

    methods: {
      update() {
        this.chart.data = getTimeLineData(teams);
        this.chart.update();
      },
    },

    mounted() {
      console.log(this.teams)
      const ctx = this.$refs.canvas.getContext('2d');
      const teams = this.teams;

      const config = {
        type: 'line',
        data: getTimeLineData(teams),
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Time',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Impact',
              },
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 80,
            }
          },
          plugins: {
            tooltip: {
              enabled: false,
            }
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      };

      this.chart = new Chart(ctx, config);
    }
}
