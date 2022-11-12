<script>
import { store } from '../store';
import CharacterCard from './CharacterCard.vue';


export default{
    components: {
        CharacterCard,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="container mt-3">
        <div class="row row-cols-2 row-cols-md-4 row-cols-xl-6">
            <div class="col" v-for="item in store.charactersList" :key="item.key">
                <CharacterCard :imgUrl="item.image" :name="item.name" :status="item.status" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.col{
    margin: 1em 0;
}
</style>