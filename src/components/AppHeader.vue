<script>
export default{
    name: "AppHeader"
}
</script>

<template>
    <header>
        <div class="header-logo">
            <img src="../assets/Rick_and_Morty.svg" alt="Logo">
        </div>
    </header>
</template>

<style scoped>
.header-logo{
    width: 100%;
    height: 150px;
}

.header-logo img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

</style>