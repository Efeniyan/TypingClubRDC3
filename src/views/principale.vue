<script setup>
import Login from './Login.vue';
import Charger from './Charger.vue';

setTimeout(() =>{
    
},10000)
</script>


<template>
<div id="charger">
    <Charger></Charger>
</div>
<div id="login">
    <Login></Login>
</div>


</template>


<style scoped>
#charger {
    display: none;
}
</style>