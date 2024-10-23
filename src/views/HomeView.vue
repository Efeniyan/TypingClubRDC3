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
    <!-- <div class="sticker">
      <img src="../assets/image/clavier.jpg" alt="Clavier" />
    </div> -->

    <section class="cta">
      <h2>Prêt à commencer?</h2>
      <router-link to="/lessons" class="btn">Commencer les leçons</router-link>
    </section>
  </div>
</template>

<style scoped>
/********************************* */
.home {
  text-align: center;
  padding: 20px;
  margin: center;
  background-image: url('../assets/cl.jpg');
  background-size: contain; /* L'image couvre tout l'écran */
  background-position: center; /* Centre l'image */
  background-repeat: no-repeat; /* Évite de répéter l'image */
  height: 100vh; /* Assure que la section occupe toute la hauteur de l'écran */
}


header {
  /* background-color: #4CAF50; */
 
  color: black;
 
  padding: 20px;
  /* border-bottom: 2px solid #388E3C; */

}

.sticker {
  margin: 20px 0;
}

.sticker img {
  max-width: 100%;
  /* Rend l'image responsive */
  height: auto;
  /* Conserve le ratio d'aspect */
}

.cta {
  margin-top: 30px;
  /* background-color:#4CAF50 ; */
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #FF5722;
  /* Orange vif */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #E64A19;
  /* Une nuance plus foncée d'orange */
}


@media (max-width: 768px) {
  header {
    padding: 15px;
  }

  .btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  header {
    padding: 10px;
  }

  h1 {
    font-size: 1.5em;
    /* Réduire la taille du texte sur les petits écrans */
  }

  p {
    font-size: 0.9em;
    /* Réduire la taille du texte sur les petits écrans */
  }

  .btn {
    width: 100%;
    /* Bouton plein largeur sur mobile */
    padding: 12px 0;
    /* Plus d'espace pour le bouton */
  }
} 
/******************************** */

.home {
  display: flex; /* Utiliser flexbox pour la mise en page */
  flex-direction: column; /* Disposer les éléments en colonne */
  justify-content: center; /* Centrer verticalement */
  align-items: center; /* Centrer horizontalement */
  text-align: center;
  padding: 20px;
  margin: 0 auto;
  background-image: url('../assets/image/clavier.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; /* Prendre toute la hauteur de l'écran */
}

header {
  color: black;
  padding: 20px;
  flex: 1; /* Permet à l'en-tête de prendre plus d'espace */
}

.cta {
  margin-top: 30px;
  flex: 1; /* Permet à la section CTA de prendre plus d'espace */
}

h1, h2, p {
  width: 100%; /* Prendre toute la largeur disponible */
  margin: 10px 0; /* Ajoute un espace vertical */
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #FF5722;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  width: 100%; /* Le bouton prend toute la largeur */
  max-width: 300px; /* Optionnel : une largeur maximale */
}

.btn:hover {
  background-color: #E64A19;
}

/* Media queries pour adapter le style aux différentes tailles d'écran */
@media (max-width: 768px) {
  header {
    padding: 15px;
  }

  .btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  header {
    padding: 10px;
  }

  h1 {
    font-size: 1.5em;
  }

  p {
    font-size: 0.9em;
  }

  .btn {
    width: 100%;
    padding: 12px 0;
  }
}

/****************************** */
h1 {
  font-size: 2.5em; /* Taille pour h1 */
  margin: 20px 0; /* Marge pour espacer */
}

h2 {
  font-size: 2em; /* Taille pour h2 */
  margin: 15px 0; /* Marge pour espacer */
}

p {
  font-size: 1.2em; /* Taille pour les paragraphes */
  margin: 10px 0; /* Marge pour espacer */
}

/* Optionnel : Ajustements supplémentaires pour les petits écrans */
@media (max-width: 768px) {
  h1 {
    font-size: 2em; /* Réduire la taille pour h1 sur petits écrans */
  }

  h2 {
    font-size: 1.5em; /* Réduire la taille pour h2 sur petits écrans */
  }

  p {
    font-size: 1em; /* Réduire la taille pour p sur petits écrans */
  }
}


</style>
