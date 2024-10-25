<script>
import { ref } from 'vue';
function createComponent() {
  return {
    data() {
      return {
        RecapView: false,
        score: 15,
        speed: 12,
        duration: 60,
        coleur : ref(false),
        starCompleted: null
      };
    },
    // const coleur = ref(false);
    methods: {

      animateText(element, text, delay) {
        element.innerHTML = ""; // Vider l'élément
        const letters = text.split("");

        letters.forEach((letter, index) => {
          setTimeout(() => {
            element.innerHTML += letter; // Ajouter la lettre
            element.style.opacity = 1; // Rendre le texte visible
          }, index * delay); // Délai entre chaque lettre
        });
      },

      startAnimation() {
        const titleText = "Bienvenue au Skill Sprint!";
        const paragraphText = "Améliorez votre dactylographie en vous amusant!";
        const h2Text = "Prêt à commencer?";
        const titleElement = document.getElementById("animation-title");
        const paragraphElement = document.getElementById("animation-paragraph");
        const h2Element = document.getElementById("animation-h2");
        const startButton = document.getElementById("start-button");

        this.animateText(titleElement, titleText, 100); // 200 ms pour le titre

        setTimeout(() => {
          this.animateText(paragraphElement, paragraphText, 50); // 200 ms pour le paragraphe
        }, titleText.length * 200 + 50); // Délai après le titre

        setTimeout(() => {
          this.animateText(h2Element, h2Text, 80); // 200 ms pour le h2
        }, (titleText.length + paragraphText.length) * 200 + 100); // Délai après le paragraphe

        setTimeout(() => {
          startButton.style.display = "block"; // Afficher le bouton
        }, (titleText.length + paragraphText.length + h2Text.length) * 200 + 110); // Délai après le h2
      }
    },

    mounted() {
      // this.updateScore(1000); 
      this.startAnimation(); // Démarrer l'animation après le montage
    }
  };
}

export default createComponent();

</script>

<template>
  <div class="home1"></div>
  <div class="home2">
    <div class="home">
      <header>
        <h1 id="animation-title">Bienvenue au Skill Sprint!</h1>
        <p id="animation-paragraph">Améliorez votre dactylographie en vous amusant!</p>
      </header>

      <section class="cta">
        <h2 id="animation-h2">Prêt à commencer?</h2>
        <div class="aligne">
          <button class="btn" id="start-button" style="display: none;"><router-link to="/sprint"><img src="../assets/plays.svg" alt=""></router-link></button>
        </div>
      </section>
    </div>
  </div>

</template>




<style scoped>
/********************************* */
/* .star.yellow svg {
            fill: yellow;
            stroke: gray;
        } */

#animation-title, #animation-paragraph, #animation-h2 {
    display: inline-block;
    font-size: 2em;
    opacity: 0; 
    transition: opacity 0.5s ease;
}
/* .coleur{
  background-color: yellow;
} */

.home2{
  background: transparent;
  backdrop-filter: blur(10px); 
}

.home1{
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/b2.avif');
  /* background-color: #87CEFA; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 
  z-index: -10;
}

.home {
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
  /* background-color:rgba(189, 194, 194, 0.363) ; */
  height: 100vh;
}

header {
  color: black;
  padding: 20px;
  flex: 1;
  margin-top: 200px
}

.cta {
  margin-bottom: 300px;
  flex: 1;
}

h1,
h2,
p {
  width: 100%;
  margin: 10px 0;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 2em;
  color: black;
  padding-bottom: 20px;
}

p {
  font-size: 1.2em;
}

/* Style du bouton */
.btn {
  display: inline-block;
  padding: 10px 10px;
  background-color: white;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  width: 70%;
  max-width: 300px;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

/* .btn:hover {
  background-color: #E64A19;
} */


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
