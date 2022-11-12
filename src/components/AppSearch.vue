<script>
import { store } from '../store';

export default{
    name: "AppSearch",
    data(){
        return {
            store
        }
    },
    methods: {
        clearInput(){
            this.store.searchNameKey = ""
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="mt-5">
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="store.searchNameKey">
                <label for="floatingInput">Cerca personaggio</label>
                <button class="btn btn-search" type="submit" @click="$emit('btnSearch'),clearInput()">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-floating{
    display: flex;
}

input{
    max-width: 500px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

input:focus{
    box-shadow: none;
    border-style: none;
}

.btn-search{
    background-color: #42b4ca;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>