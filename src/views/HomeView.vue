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
      toggleRecap() {
        this.RecapView = !this.RecapView; 
        this.updateScore(500)
      },

      updateScore(newScore) {
        this.score = newScore; 
        this.updateStars(newScore); // Mettre à jour les étoiles
      },

      updateStars(score) {      
        if (score >= 1000) {
          // coleur.value = true;
          this.starCompleted = 5;
        } else if (score >= 800) {
          // star.classList.add('yellow');
          this.starCompleted = 4;
        } else if (score >= 700) {
          // star.classList.add('yellow');
          this.starCompleted = 3;
        } else if (score >= 500) {
          // star.classList.add('yellow');
          this.starCompleted = 2;
        } else if (score >= 200) {
          // star.classList.add('yellow');
          this.starCompleted = 1;
        }

      },

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

        this.animateText(titleElement, titleText, 200); // 200 ms pour le titre

        setTimeout(() => {
          this.animateText(paragraphElement, paragraphText, 200); // 200 ms pour le paragraphe
        }, titleText.length * 200 + 300); // Délai après le titre

        setTimeout(() => {
          this.animateText(h2Element, h2Text, 200); // 200 ms pour le h2
        }, (titleText.length + paragraphText.length) * 200 + 900); // Délai après le paragraphe

        setTimeout(() => {
          startButton.style.display = "block"; // Afficher le bouton
        }, (titleText.length + paragraphText.length + h2Text.length) * 200 + 1200); // Délai après le h2
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
          <button class="btn" id="start-button" @click="toggleRecap" style="display: none;"><img src="../assets/plays.svg" alt=""></button>
        </div>
      </section>
    </div>
  </div>
/*********************recap***************************** */
  <div class="Rcp">
    <div class="recap" v-if="RecapView">
      <div class="sommaire">
        <h2>Récapitulatif de votre frappe</h2>
        <div class="star-container">
          <span v-for="index in stars" :key="index" class="star"><img src="../assets/etoile.svg" alt="" :class="{ yellow: stars > 0 }"></span>
          <span v-if="stars < 5" v-for="index in (5 - stars)" :key="'empty-' + index" class="star"><img src="../assets/etoile.svg" alt=""></span>
        </div>
        <div id="stars">
        <span v-for="i in 5" :class="{star: coleur}"><svg :fill="(starCompleted !== null && starCompleted >= i) ? 'yellow' : '#000000'" width="50px" height="50px" viewBox="0 0 256 256" id="Flat"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                    <path
                        d="M132.41106,190.73266l50.43543,31.95385c6.44693,4.08451,14.45124-1.99032,12.53819-9.51579l-14.57192-57.32241a8.75742,8.75742,0,0,1,2.83756-8.87589l45.2273-37.64345c5.94268-4.9462,2.87542-14.80876-4.75965-15.30428l-59.06388-3.83326a8.41836,8.41836,0,0,1-7.24792-5.3506l-22.02834-55.473a8.31887,8.31887,0,0,0-15.55566,0L98.19383,84.84083a8.41836,8.41836,0,0,1-7.24792,5.3506L31.882,94.02469c-7.63507.49552-10.70233,10.35808-4.75965,15.30428l45.2273,37.64345a8.75742,8.75742,0,0,1,2.83756,8.87589L61.6734,209.00846c-2.29566,9.03056,7.30952,16.32036,15.04583,11.41895l46.86971-29.69475A8.21431,8.21431,0,0,1,132.41106,190.73266Z" />
                </g>
                <path
                    d="M187.2627,231.9834a16.22513,16.22513,0,0,1-8.69825-2.53931l-50.43457-31.95361v.00024a.21827.21827,0,0,0-.25976,0L81,227.1853a17.80084,17.80084,0,0,1-20.08008-.63134,18.36991,18.36991,0,0,1-6.999-19.51661l13.51367-53.16a.77184.77184,0,0,0-.20215-.75562L22.00391,115.47791a16.65647,16.65647,0,0,1-5.16407-18.06019A16.36086,16.36086,0,0,1,31.36328,86.0415l59.06445-3.83325a.45615.45615,0,0,0,.33008-.31885l22.0293-55.47424a16.31782,16.31782,0,0,1,30.42578.00037l22.0293,55.47265a.45648.45648,0,0,0,.3291.32007l59.06543,3.83313a16.36115,16.36115,0,0,1,14.52344,11.37634,16.656,16.656,0,0,1-5.16407,18.05994l-45.22754,37.64356a.76927.76927,0,0,0-.20214.75659l14.57129,57.3219a16.6353,16.6353,0,0,1-6.3418,17.67138A16.21482,16.21482,0,0,1,187.2627,231.9834ZM128,181.46558a16.23665,16.23665,0,0,1,8.69238,2.509v.00024l50.43555,31.95386a.579.579,0,0,0,.14551.07373.818.818,0,0,0,.30566-.2666.646.646,0,0,0,.05274-.59424l-14.57227-57.32226a16.812,16.812,0,0,1,5.47363-16.99622l45.22657-37.64294a.64454.64454,0,0,0,.18652-.81043c-.11328-.3468-.23145-.35449-.34668-.36194l-59.06445-3.83325a16.4984,16.4984,0,0,1-14.16407-10.38232L128.3418,32.32043C128.21484,32,128.13379,32,128,32s-.21484,0-.3418.32007L105.62891,87.79346a16.49935,16.49935,0,0,1-14.165,10.3811l-59.06348,3.83325c-.11523.00745-.2334.01514-.34668.36194a.64479.64479,0,0,0,.18652.81055l45.22754,37.64331a16.81409,16.81409,0,0,1,5.47364,16.99512L69.42676,210.97949a2.334,2.334,0,0,0,.88672,2.62232,1.71518,1.71518,0,0,0,2.123.06811l46.8711-29.69507A16.23481,16.23481,0,0,1,128,181.46558Z" />
            </svg></span>
    </div>
      </div>

      <div class="summary-container">
        <div class="circle">
          <div class="circle-content">
            <p><strong>{{ speed }} MPM</strong></p>
          </div>
          <p class="dure">Vitesse</p>
        </div>

        <div class="circle duration-circle">
          <div class="circle-content">
            <p><strong>{{ duration }} s</strong></p>
          </div>
          <p class="dure">Durée</p>
        </div>
      </div>
      <div class="btnR">
        <router-link to="/"><button><img src="../assets/repeate.svg" alt=""></button></router-link>
      </div>
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

/**************************************  Css REcapView ***********************************************/

/* Ajoutez une classe pour les étoiles jaunes */
.star {
  font-size: 24px; /* Ajustez la taille selon vos préférences */
}

.star.yellow img {
  filter: brightness(1.5); /* Exemple pour éclaircir l'étoile */
}

.star-container {
  display: flex; /* Changer la mise en page des étoiles */
  justify-content: center; /* Centrer les étoiles */
}

.recap {
  /* background-image: url('../assets/cl6.jpg'); */
  /* background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  
  background-image: url("../assets/cl9.jpg"); 
  background: transparent;
  background-size: cover;
  backdrop-filter: blur(50px); 
  

  width: 50%;
  margin: auto;

  /* height: 850px;  */ /*********/
  /* padding-top: 150px; */
  background-color:#FFFFFF00;
  position: absolute;
  /* top: 0;
  left: 250px; */
  

  left: 50%; 
  top: 40%; 
  transform: translate(-50%, -50%); 

  /************************ */
  


}

h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.sommaire {
  text-align: center;
  margin: 20px;
}

.summary-container {
  display: flex;
  flex-wrap: wrap;
  /* Permet de passer à la ligne */
  justify-content: center;
  margin: 20px 0;
  gap: 100px;
  /* Réduit l'écart sur les petits écrans */
}

.circle {
  border: 5px solid;
  /* border-radius: 50%; */
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.dure{
  text-align: center;
}

.circle-content {
  font-size: 16px;
  text-align: center;
}
/* 
.star-container {
  position: relative;
  height: 100px;
  margin: auto;
  padding-top: 2%;
}

.star {
  position: absolute;
  font-size: 24px;
}

.star:nth-child(1) {
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.star:nth-child(2) {
  left: 40%;
  top: 30%;
  transform: translate(-50%, -50%);
}

.star:nth-child(3) {
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
}

.star:nth-child(4) {
  left: 60%;
  top: 30%;
  transform: translate(-50%, -50%);
}

.star:nth-child(5) {
  left: 70%;
  top: 50%;
  transform: translate(-50%, -50%);
} */

.btnR {
  text-align: center;
  padding: 20px;
  /* background-color: red; */
  
}

button {
  color: red;
  background-color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding: 20px;
}


@media (max-width: 768px) {
  .circle {
    width: 80px;
    height: 80px;
  }

  .circle-content {
    font-size: 14px;
  }

  .star {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .circle {
    width: 60px;
    height: 60px;
  }

  .circle-content {
    font-size: 12px;
  }

  .star {
    font-size: 18px;
  }
}
/* *********css confetti */
.Rcp {
  background: #f0f8ff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.sommaire h2 {
  color: #333;
  font-family: 'Arial', sans-serif;
}

.star-container {
  margin: 10px 0;
}

.star {
  font-size: 24px;
}

.summary-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.circle {
  background: black;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
}

.circle:hover {
  transform: scale(1.05);
}

.circle-content p {
  margin: 5px 0;
  font-family: 'Arial', sans-serif;
}

.dure {
  color: #9b5b5b;
  font-size: 14px;
}

.btnR {
  margin-top: 20px;
}

button {
  /* background-color: #4CAF50; */
  /* color: black; */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  /* background-color: #45a049; */
}

/************************************ */
.star-container {
  display: flex; /* Changer la mise en page des étoiles */
  justify-content: center; /* Centrer les étoiles */
}

.star {
  font-size: 24px; /* Ajustez la taille selon vos préférences */
  margin: 0 2px; /* Ajoutez un espace entre les étoiles */
}
</style>
