<template>
  <div>
    <canvas id="statsChart" width="400" height="200"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "ChartJS",

  props: {
    pokemon: {
      type: Object || {},
    },
  },

  methods: {
    showStats() {
      const ctx = document.getElementById("statsChart");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Speed",
            "Sp Defense",
            "Sp Attack",
            "Defense",
            "Attack",
            "HP",
          ],
          datasets: [
            {
              label: "",
              data: [
                this.pokemon.stats[5].base_stat,
                this.pokemon.stats[4].base_stat,
                this.pokemon.stats[3].base_stat,
                this.pokemon.stats[2].base_stat,
                this.pokemon.stats[1].base_stat,
                this.pokemon.stats[0].base_stat,
              ],
              backgroundColor: [
                "rgba(7, 42, 200, 1)",
                "rgba(7, 42, 200, 1)",
                "rgba(7, 42, 200, 1)",
                "rgba(7, 42, 200, 1)",
                "rgba(7, 42, 200, 1)",
                "rgba(7, 42, 200, 1)",
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          indexAxis: "y",
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 0,
                },
              },
            },
          },
        },
      });
    },
  },
  mounted() {
    this.showStats();
  },
};
</script>
