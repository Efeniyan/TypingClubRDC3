<script setup>


</script>


<template>

<nav>
    <ul>
        <li>
           <RouterLink to="/"> <img src="../assets/svg/home_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt="Home"></RouterLink>
        </li>
        <li >
            <img src="../assets/svg/refresh_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt="Refresh">
        </li>
        <li>
            <img src="../assets/svg/play_circle_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt="Play">
        </li>
        <li>
            <img src="../assets/svg/settings_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt="Setting">
        </li>
    </ul>
</nav>


</template>


<style scoped>

nav {
    background-color: antiquewhite;
    padding: 5px;
}
ul {
    display: flex;
    justify-content: space-between;
}

li {
    list-style-type: none;
}

</style>