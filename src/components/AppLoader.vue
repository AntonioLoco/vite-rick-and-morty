<script>
export default{
    name: "AppLoader"
}
</script>

<template>
    <div class="container">
        <h1 class="text-center">Loading<span>.</span> <span>.</span> <span>.</span></h1>
    </div>
</template>

<style scoped>
.container{
    padding: 200px 0;
}

.container h1{
    font-size: 72px;
    background: -webkit-linear-gradient(150deg,#42b4ca 30%, #97ce4c 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h1 > span{
    background: -webkit-linear-gradient(150deg,#42b4ca 30%, #97ce4c 70%);
    -webkit-background-clip: text;
    margin: 0 -5px;
    display: inline-block;
    animation: animation-loading 1s linear infinite;
}

h1 > span:nth-child(2){
    animation-delay: .1s;
}

h1 > span:last-child{
    animation-delay: .2s;

}

@keyframes animation-loading{
    0%{
        transform: translateY(0);
    }

    50%{
        transform: translateY(-50%);
    }

    100%{
        transform: translateY(0);
    }
}
</style>