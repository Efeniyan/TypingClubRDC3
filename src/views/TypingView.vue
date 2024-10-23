<script setup>
import Header from '@/components/Header.vue';

</script>


<template>
    <Header></Header>
    <div class="maDiv">
        <div class="barreProgress">
            ------------------------------------
        </div>
        <div class="affichageText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat dolore, neque, blanditiis labore doloribus, quia quidem explicabo libero cum esse quae quaerat quam excepturi.
        </div>
    </div>
</template>


<style scoped>
    .affichageText {
        background-color: grey;
        font-size: 40px;
        padding: 15px;
        border-radius: 10px;
    }

    .maDiv {
        margin: 200px 100px;

    }

    .barreProgress{
        margin-bottom: 30px;
    }

</style>