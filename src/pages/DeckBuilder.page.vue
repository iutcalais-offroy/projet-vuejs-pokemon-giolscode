<template>
  <div>
    <h1>Deck Builder</h1>
    <div class="pokemon-list">
      <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
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

const fetchPokemons = async () => {
  try {
    const response = await axios.get('https://pokemon-api-seyrinian-production.up.railway.app/pokemon-cards');
    pokemons.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des Pokémon:', error);
  }
};

onMounted(fetchPokemons);
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