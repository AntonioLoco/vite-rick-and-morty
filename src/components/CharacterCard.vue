<script>
export default{
    name: "CharacterCard",
    props: {
        imgUrl: String,
        name: String,
        status: String
    }
}
</script>

<template>
    <div class="characters-card">
        <div class="character-photo">
            <img :src="imgUrl" :alt="name">
        </div>
        <div class="character-description text-center">
            <h3>{{name}}</h3>
            <h5>{{status}}</h5>
        </div>
    </div>
</template>

<style scoped>
.characters-card{
    width: 100%;
    height: 100%;
    padding: 1.5em .5em;
    border-radius: 20px;
    box-shadow: 7px 7px 22px 1px rgba(0,0,0,0.51);
}
.characters-card .character-photo{
    width: 100%;
    height: 60%;
}

.characters-card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
}

.characters-card .character-description{
    width: 100%;
    height: 40%;
    padding: 1em 0;
}

.character-description h3{
    font-size: 2rem;
}
</style>