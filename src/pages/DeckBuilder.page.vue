<template>
  <div>
    <h1>Deck Builder</h1>
    <div>
      <form @submit.prevent>
        <input v-model="searchQuery" type="text" name="search" placeholder="Rechercher une carte..." />
      </form>
    </div>
    <div class="pokemon-list">
      <PokemonCard v-for="pokemon in FiltrePokemons" :key="pokemon.id" :pokemon="pokemon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  import PokemonCard from '../components/PokemonCard.vue';

  interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    type: string;
    hp: number;
    attack: number;
  }

  const pokemons = ref<Pokemon[]>([]);
  const searchQuery = ref('');

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokemon-api-seyrinian-production.up.railway.app/pokemon-cards');
      pokemons.value = response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des Pokémon:', error);
    }
  };
  onMounted(fetchPokemons);

  const FiltrePokemons = computed(() => {
  return pokemons.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

});

</script>

<style scoped>
  .pokemon-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
  .pokemon-card {
    max-width: 300px;
  }
  .pokemon-card img {
    width: 100%;
    height: auto;
  }
  h1 {
    text-align: center;
    margin-bottom: 2em;
  }
</style>