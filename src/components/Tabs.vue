<template>
  <div>
    <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
      narrow-indicator style="width: 50%">
      <q-tab name="about" label="About" content-class="tab" />
      <q-tab name="moves" label="Moves" content-class="tab" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="about">

        <div class="personal-info">

          <Paragraph text="Species:" weight="regular" class="key q-mt-lg" />
          <Paragraph :text="`${capitalizeName(pokemon.species.name)}`" weight="regular" class="value q-mt-lg" />

          <Paragraph text="Height:" weight="regular" class="key q-mt-md" />
          <Paragraph :text="`${pokemon.height}`" weight="regular" class="value q-mt-md" />

          <Paragraph text="Weight:" weight="regular" class="key q-mt-md" />
          <Paragraph :text="`${pokemon.weight}`" weight="regular" class="value q-mt-md" />

          <Paragraph text="Experience:" weight="regular" class="key q-mt-md" />
          <Paragraph :text="`${pokemon.base_experience}`" weight="regular" class="value q-mt-md" />

          <Paragraph text="Type:" weight="regular" class="key q-mt-md" />

          <div class="row items-center">
            <div v-for="(type, index) in pokemon.types" :key="index">
              <div v-for="(name, idx) in type" :key="idx">
                <q-chip v-if="name.name" class="q-ma-none q-mr-md q-mt-md text-white"
                  :style="`background-color: ${checkColor(capitalizeName(name.name))}`" square>
                  {{ capitalizeName(name.name) }}
                </q-chip>
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="row chart q-mt-lg">
            <SubTitle text="Base Stats" />
            <canvas id="statsChart" width="400" height="200"></canvas>

          </div>
        </div>

      </q-tab-panel>

      <q-tab-panel name="moves">

        <div class="grid-moves">
          <BlockCard v-for="(move, index) in moves" :key="index" :text="`${move.name}`"
            :style="`background-color: ${checkColor(move.type)}`" />
        </div>


      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { Paragraph, SubTitle } from './ui/text';
import Chart from 'chart.js/auto';
import BlockCard from './ui/blocks/BlockCard.vue';
import { getMoves } from 'src/utils/getMoves';

export default {
  name: 'TabS',
  components: {
    Paragraph,
    SubTitle,
    BlockCard
  },
  props: {
    pokemon: {
      type: Object || {}
    }
  },
  data() {
    return {
      active: true,
      tab: 'about',
      moves: [],
      chart: null
    };
  },
  methods: {
    capitalizeName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    checkColor(type) {
      switch (type) {
        case 'Grass':
          return '#16C172'

        case 'Poison':
          return '#6E44FF'

        case 'Bug':
          return '#1C4B27'

        case 'Dark':
          return '#040706'

        case 'Dragon':
          return '#448B95'

        case 'Electric':
          return '#EBED77'

        case 'Fairy':
          return '#971944'

        case 'Fighting':
          return '#6C6D6B'

        case 'Fire':
          return '#AB1F23'

        case 'Flying':
          return '#4A677D'

        case 'Ghost':
          return '#33336B'

        case 'Ground':
          return '#A9702C'

        case 'Ice':
          return '#86D2F5'

        case 'Normal':
          return '#75515B'

        case 'Psychic':
          return '#A42A6C'

        case 'Rock':
          return '#48180B'

        case 'Stell':
          return '#5F756D'

        case 'Water':
          return '#8CA8E8'

        default:
          break;
      }
    },
    showStats() {
      const ctx = document.getElementById('statsChart');

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Speed', 'Sp Defense', 'Sp Attack', 'Defense', 'Attack', 'HP'],
          datasets: [{
            label: '',
            data: [
              this.pokemon.stats[5].base_stat,
              this.pokemon.stats[4].base_stat,
              this.pokemon.stats[3].base_stat,
              this.pokemon.stats[2].base_stat,
              this.pokemon.stats[1].base_stat,
              this.pokemon.stats[0].base_stat
            ],
            backgroundColor: [
              'rgba(7, 42, 200, 1)',
              'rgba(7, 42, 200, 1)',
              'rgba(7, 42, 200, 1)',
              'rgba(7, 42, 200, 1)',
              'rgba(7, 42, 200, 1)',
              'rgba(7, 42, 200, 1)',

            ],
            borderWidth: 0
          }]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 0,
                },
              }
            }
          }
        }
      });

    },
    async getMoves() {
      const data = await getMoves(this.pokemon.moves)
      this.moves = data
    }
  },
  mounted() {
    this.showStats()
    this.getMoves();
  }
}
</script>

<style lang="scss">
.grid-moves {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  justify-items: center;
  width: min-content;
  margin: 0 auto;
}

.active-tab {
  color: #4361EE !important;
}

.tab {
  font-family: readexpro;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.personal-info {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  margin-left: 37px;
}

.key {
  color: $neutro3;
}
</style>
