<script>
import axios from 'axios';
import { store } from './store';

import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import AppLoader from './components/AppLoader.vue';
import AppSearch from './components/AppSearch.vue';
import AppError from './components/AppError.vue';

export default{
  components: {
    AppHeader ,
    CharactersList,
    AppLoader,
    AppSearch,
    AppError
  },
  data(){
    return {
      store
    }
  },
  methods: {
    getCharacters(){
      this.store.loading = true;
      this.store.error = false;

      const urlParams = {
        ...this.store.searchNameKey && { name: this.store.searchNameKey }
      }

      axios
        .get("https://rickandmortyapi.com/api/character", { params: urlParams })
        .then( (resp) => {
          this.store.charactersList = resp.data.results;
        })
        .catch( (error) => {
          console.log(error);
          this.store.error = true;
          this.store.charactersList = [];
        })
        .finally( () => {
          this.store.loading = false;
        });
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader />

  <AppLoader v-if="store.loading" />
  <main v-else>
    <AppSearch @btnSearch="getCharacters"/>
    <AppError v-if="store.error" />
    <CharactersList v-else />
  </main>
</template>

<style>
</style>
