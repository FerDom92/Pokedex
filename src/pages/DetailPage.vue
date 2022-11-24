<template>
  <div v-if="pokemon">
    <div class="top">
      <Icon name="arrow-left" class="q-ml-md q-pt-md" @click="goBack()" />
      <div>
        <div class="row justify-center items-center">
          <TitleH1 :text="capitalizeName(pokemon.name)" class="q-mr-sm" />
          <TitleH2 :text="`#${pokemon.id}`" />
        </div>

        <div class="image-wrapper">
          <img :src="pokemon.sprites.other.home.front_default" class="image-pokemon">
        </div>
      </div>

    </div>

    <div class="bot">
      <Tabs :pokemon="pokemon" />
    </div>
  </div>

</template>

<script>
import { pokeApi } from 'src/boot/axios';
import { usePokemonStore } from 'src/stores/pokemonStore';
import { mapState } from 'pinia';
import { TitleH1, TitleH2 } from 'src/components/ui/text';
import Tabs from 'src/components/Tabs.vue'
import Icon from 'src/components/ui/Icon.vue';

export default {
  name: 'DetailPage',
  data() {
    return {
      pokemon: null
    }
  },
  components: {
    Tabs,
    TitleH1,
    TitleH2,
    Icon
  },
  computed: {
    ...mapState(usePokemonStore, ['pokemonSelected'])
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    async getPokemon() {
      this.$q.loading.show()
      const name = this.$route.path.split('/').pop()
      const { data } = await pokeApi(`/pokemon/${name}`)

      this.pokemon = data

      this.$q.loading.hide()
    },
    capitalizeName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
  mounted() {
    this.getPokemon()
  },
}
</script>

<style lang="scss" scoped>
.top {
  height: 237px;
  width: 100%;
  background: #ECECF2;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-pokemon {
  margin-top: 70px
}
</style>
