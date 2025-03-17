<template>
  <n-card :title="pokemon.name">

    <template #cover>
      <img :src="pokemon.imageUrl" alt="pokemon.name" class="pokemon-image" />
    </template>

    <div class="pokemon-details">
      <p> <strong> Type: </strong> {{ pokemon.type.name }}</p>
      <p> <strong> HP: </strong> {{ pokemon.lifePoints }} | <strong> Taille: </strong> {{ pokemon.lifePoints }}  | <strong> Poids : </strong> {{ pokemon.weight }} </p>
      <p> <strong> Attaque: </strong> {{ pokemon.attack.name }} | <strong> Dégât : </strong> {{ pokemon.attack.damages }} </p>
    </div>

  </n-card>

</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.n-card {
  max-width: 300px;
  margin: 1em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

}
.pokemon-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}
.pokemon-details {
  margin-top: 1em;
  padding: 1em;
  background-color: #f9f9f9;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  
}
</style>