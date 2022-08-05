<template>
<router-view></router-view>
<router-link to="/portfolio"> </router-link>

<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!-- <main-card></main-card>  -->
 <ProjectsCard/> 
</template>

<script>
//  import MainCard from './components/MainCard.vue'
 

export default {
    name: 'App',
    components: {
    //  MainCard,

     
}
}
</script>

<style>
body{
    margin: 0%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #1a1a1d ;
    /* margin-top: 60px; */
    
}
</style>
