<script setup>
import { ref } from 'vue';

const refreshPage = () => {
  window.location.reload();
};
</script>

<template>
  <nav>
    <span><img src="../assets/svg/skillSprinttt.jpg" alt="LOGO" class="logo"></span>
    <ul>
      <li>
        <RouterLink to="/">
          <img src="../assets/svg/home_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt="Home" />
        </RouterLink>
      </li>
      <li @click="refreshPage"> <!-- Ajout de l'événement click -->
        <img src="../assets/svg/refresh_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt="Refresh" />
      </li>
      <li>
        <img src="../assets/svg/play_circle_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt="Play" />
      </li>
      <li>
        <img src="../assets/svg/settings_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg" alt="Setting" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #b7beba; /* Fond blanc pour un look épuré */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Ombre pour la profondeur */
  padding: 10px 20px; /* Espacement interne */
  border-radius: 8px; /* Coins arrondis */
  position: relative; /* Pour le positionnement */
  z-index: 1000; /* S'assurer qu'il est au-dessus des autres éléments */
  display: flex;
  text-align: center;
  justify-content: space-around;
  font-weight: 800;
  font-size: 25px;
}

ul {
  width: 25%;
  display: flex;
  justify-content: space-between; /* Espacement uniforme */
  align-items: center; /* Alignement vertical */
  margin: 0; /* Supprime le margin par défaut */
  padding: 0; /* Supprime le padding par défaut */
}

li {
  list-style-type: none;
}

img {
  width: 60px; /* Taille des icônes */
  height: 34px; /* Taille des icônes */
  cursor: pointer; /* Curseur pointer sur hover */
  transition: transform 0.2s, filter 0.2s; /* Transitions pour les effets */
}

.logo {
  border-radius: 30px;
  border: 2px dashed orange;
  width: 100px;
  box-shadow: 1px 1px 1px 1px rgba(12, 12, 12, 0.205);
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes example {
  to { left: 0px }
  from { left: 100px }
}

img:hover {
  transform: scale(1.1); /* Zoom au survol */
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2)); /* Ombre portée au survol */
}

li + li {
  margin-left: 20px; /* Espacement entre les icônes */
}
</style>
