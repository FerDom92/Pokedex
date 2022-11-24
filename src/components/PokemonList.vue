<template>
  <div>
    <div class="q-px-md card-wrapper" v-if="!loading">
      <q-card class="pokemon-card q-mb-md" v-for="(pokemon) in pokemons" :key="pokemon.id"
        @click="goToDetailPokemon(pokemon)">

        <q-card-section class="image-wrapper row justify-center">
          <img :src="pokemon.sprites.other.home.front_default" class="image-pokemon">
        </q-card-section>

        <q-card-section>
          <div class="text-h6">{{ pokemon.name }}</div>
          <Paragraph :text="`#${pokemon.id}`" weight="regular" />
        </q-card-section>

        <q-card-section class="row" style="height: 40px">
          <Paragraph :text="`Moves ${pokemon.moves.length}`" class="q-mr-xl" weight="regular" />
          <Paragraph :text="`Experience ${pokemon.base_experience}`" weight="regular" />
        </q-card-section>

        <div class="row items-center q-ml-md" style="height: 50px">
          <div class="image-type-wrapper">
            <q-img v-for="(image, index) in pokemon.types" :key="index" :src="`../../tags/${image.type.name}.png`"
              class="image-type q-mr-md" />
          </div>
        </div>
      </q-card>
    </div>

    <div v-else>
      <Skeleton v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index" />
    </div>

  </div>

</template>

<script>
import { mapState } from 'pinia'
import { Paragraph } from './ui/text'
import { usePokemonStore } from 'src/stores/pokemonStore'

import Skeleton from 'src/components/Skeleton.vue';

export default {
  name: 'PokemonList',
  components: {
    Paragraph,
    Skeleton
  },
  props: {
    pokemons: {
      type: Object || {}
    }
  },
  methods: {
    goToDetailPokemon(pokemon) {
      this.$router.push(`/detail/${pokemon.name}`)
    },
  },
  computed: {
    ...mapState(usePokemonStore, ['loading'])
  },
}
</script>

<style lang="scss">
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  justify-content: center;
}

.pokemon-card {
  border-radius: 16px;
  width: 400px;
  cursor: pointer;
}

.image-wrapper {
  background: #ECECF2;
  height: 160px;
  width: 100%;
}

.image-pokemon {
  position: absolute;
  width: 164px;
  top: -5px;
}

.image-type-wrapper {
  height: 32px;
  display: flex;
}

.image-type {
  width: 75px;
}
</style>
