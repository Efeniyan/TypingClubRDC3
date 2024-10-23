<script setup>
function animationTitre() {
  const elementTitle = document.getElementById('animation');
  const titleText = elementTitle.innerText.replace(/ /g, '\u00A0'); // Remplace les espaces par des espaces insécables
  elementTitle.innerText = '';

  let index = 0;

  const interval = setInterval(() => {
    if (index < titleText.length) {
      elementTitle.innerText += titleText[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

document.addEventListener('DOMContentLoaded', animationTitre);
</script>

<template>

  <div class="home">
    <header>
      <h1 id="animation">Bienvenue au Skill Sprint!</h1>
      <p>Améliorez votre dactylographie en vous amusant!</p>
    </header>
  

    <section class="cta">
      <h2>Prêt à commencer?</h2>
      <router-link to='/recap' class="btn">Commencer les leçons</router-link>
    </section>
  </div>
</template>

<style scoped>
/********************************* */
.home {
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  text-align: center;
  padding: 20px;
  margin: 0 auto;
  background-image: url('../assets/cl.jpg');
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 
  height: 100vh; 
}

header {
  color: white; 
  padding: 20px;
  flex: 1; 
  margin-top: 200px
}

.cta {
  margin-bottom: 300px;
  flex: 1; 
}

h1, h2, p {
  width: 100%; 
  margin: 10px 0;
}

h1 {
  font-size: 2.5em; 
}

h2 {
  font-size: 2em; 
  color: white; 
  padding-bottom: 20px;
}

p {
  font-size: 1.2em; 
}

/* Style du bouton */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #FF5722; 
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  width: 70%; 
  max-width: 300px; 
}

.btn:hover {
  background-color: #E64A19; 
}


@media (max-width: 768px) {
  header {
    padding: 15px;
  }

  .btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  h1 {
    font-size: 2em; 
  }

  h2 {
    font-size: 1.5em; 
  }

  p {
    font-size: 1em; 
  }
}

@media (max-width: 480px) {
  header {
    padding: 10px;
  }

  .btn {
    width: 100%; 
    padding: 12px 0; 
  }
}
</style>

