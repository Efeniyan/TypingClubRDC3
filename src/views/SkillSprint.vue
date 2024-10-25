<template>
    <Header></Header>
    <div class="typing-club">
        <div class="phrase-container">
            <span class="maClasse" v-for="(elem, index) in newPhrase" :key="index.id">{{ elem }}</span>
        </div>
    </div>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
    <div class="chrono">
        <p>{{ format }}</p>
        <p>Precision: {{ precisionTotale }}%</p>
        <p>Vitesse: {{ vitesse }}MPM</p>
    </div>
</template>


<script setup>
import Header from '@/components/Header.vue';
import { onMounted, ref, computed } from 'vue';



let lastKey = ref('');
let phrase = ref([]);
let newPhrase = ref([]);
let g = -1;
let inputText = ref('');
const progress = ref(0);
const precisionTabGreen = ref([]);
const precisionTabOrange = ref([]);
const precisonGreen = ref(null);
const precisonOrange = ref(null);
const precisionTotale = ref(null);
const vitesse = ref(null);
const totalSeconds = ref(null);
const interval = ref(null);
const format = ref("");

function startChrono() {
    interval.value = setInterval(() => {
        totalSeconds.value++;
    }, 1000);
};

function stopTimer() {
    clearInterval(interval.value);
};

function pressKeyUp(event) {

    format.value = computed(() => {
        const minutes = Math.floor(totalSeconds.value / 60);
        const seconds = totalSeconds.value % 60;

        return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    });
    lastKey.value = event.key;

    // console.log(event);

    const listSpan = document.querySelectorAll(".maClasse")
    // console.log(listSpan);
    //  console.log( g++);
    inputText.value += lastKey.value;
    // console.log(inputText);



    g++;
    for (let i = g; i < newPhrase.value.length; i++) {
        if (inputText.value.length === 1 && listSpan[i].style.backgroundColor !== "brown") {
            startChrono();
        }

        progress.value = Math.min((inputText.value.length / newPhrase.value.length) * 100, 100);
        if (g === newPhrase.value.length - 1) {
            if (newPhrase.value[i] === lastKey.value) {
                listSpan[i].style.backgroundColor = "green";

            } else {
                listSpan[i].style.backgroundColor = "red";

            }
            setTimeout(() => {
                alert("Vous aviez fini le jeu")
                console.log(listSpan);

                //Fonction de precision

                listSpan.forEach((elem, index) => {
                    if (elem.style.backgroundColor === "green") {
                        precisionTabGreen.value.push(elem)
                    }
                })
                console.log("precisionTabGreen", precisionTabGreen.value);

                precisonGreen.value = Math.floor((precisionTabGreen.value.length / newPhrase.value.length) * 100);
                console.log("precisonGreen", precisonGreen.value);

                listSpan.forEach((elem, index) => {
                    if (elem.style.backgroundColor === "orange") {
                        precisionTabOrange.value.push(elem)
                    }
                })
                console.log("precisionTabOrange", precisionTabOrange.value);
                precisonOrange.value = Math.floor(((precisionTabOrange.value.length / 2) / newPhrase.value.length * 100));
                console.log("precisonOrange", precisonOrange.value);

                precisionTotale.value = precisonGreen.value + precisonOrange.value;

                console.log(" precisionTotale", precisionTotale.value);

                //Fonction de vitesse par mot
                let x = newPhrase.value.join("");
                x = x.split(" ");
                vitesse.value = Math.floor((x.length * 60) / totalSeconds.value);
                console.log(x);
                console.log("vitesse:", vitesse.value);

                stopTimer();

                return



            }, 500)
        } else {

            if (lastKey.value === "Backspace") {
                g -= 2;
                listSpan[i - 1].style.backgroundColor = "brown";
                listSpan[i - 1].style.borderBottom = "solid 2px";
                // return alert("Cornard");
                if (newPhrase.value[i - 1] === lastKey.value) {
                    listSpan[i - 1].style.backgroundColor = "black";
                    console.log(newPhrase.value.length);
                    return;
                }
                return;

            }
            else if (newPhrase.value[i] === lastKey.value) {
                if (listSpan[i].style.backgroundColor === "brown") {
                    console.log(listSpan[i].style.backgroundColor);

                    listSpan[i].style.backgroundColor = "orange";

                    return;
                } else {
                    listSpan[i].style.backgroundColor = "green";
                    listSpan[i].style.borderBottom = "none";
                    listSpan[i + 1].style.borderBottom = "solid 2px";
                    return;
                }
                // console.log(newPhrase.value.length);
                // return;
            } else {
                listSpan[i].style.backgroundColor = "red";
                listSpan[i].style.borderBottom = "none";
                listSpan[i + 1].style.borderBottom = "solid 2px";
                console.log(progress.value);
                return;
            };


        };
    }





};

function choosePhrase() {
    const tableau = [
        "orem ipsum dolor sit amet consectetur adipisicing elit.",
        "atus fugiat dolore, neque, blanditiis labore doloribus,",
        "quia quidem explicabo libero cum ",
        "cum esse quae quaerat quam excepturi.",
    ]

    phrase.value = tableau[Math.floor(Math.random() * (tableau.length))];
    // console.log(phrase.value);
    return phrase;
};
function maPhrase() {
    newPhrase.value = phrase.value.split("");
    console.log(newPhrase.value);
    return newPhrase.value;
};




onMounted(() => {
    window.addEventListener('keyup', (event) => pressKeyUp(event));
    choosePhrase();
    maPhrase();

});

</script>





<style scoped>
.typing-club {
    font-family: 'Arial', sans-serif;
    text-align: center;
    background-color: #b7beba;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;

    margin: 10% 20% 1%;
}

.typing-club:hover {
    background-color: #e0e7ee;
}

.phrase-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.maClasse {
    font-size: 28px;
    margin: 0 4px;
    transition: transform 0.2s, color 0.3s;
    padding: 4px;
    border-radius: 4px;
}

.maClasse:hover {
    transform: scale(1.1);
    color: #3498db;
    /* Couleur au survol */
}

.progress-bar {
    width: 60%;
    background: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    height: 20px;
    margin-top: 20px;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 0 20%;
}

.progress {
    height: 100%;
    background: #4caf50;
    /* Couleur de progression */
    transition: width 0.3s ease-in-out;
}
</style>
<template>
    <Header></Header>
    <div class="typing-club">
        <div class="phrase-container">
            <span class="maClasse" v-for="(elem, index) in newPhrase" :key="index.id">{{ elem }}</span>
        </div>
    </div>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
</template>


<script setup>
import Header from '@/components/Header.vue';
import { onMounted, ref, computed } from 'vue';



let lastKey = ref('');
let phrase = ref([]);
let newPhrase = ref([]);
let g = -1;
let inputText = ref([]);
let totalLength = newPhrase.value.length;
const progress = ref(0);


function toggleRecap() {
        this.RecapView = !this.RecapView;
        this.updateScore(900)
      },

      function updateScore(newScore) {
        this.score = newScore;
        this.updateStars(newScore); // Mettre à jour les étoiles
      };

    function updateStars(score) {
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

      };

function pressKeyUp(event) {
    lastKey.value = event.key;

    const listSpan = document.querySelectorAll(".maClasse")

    inputText.value.push(lastKey.value);

    g++;
    for (let i = g; i < newPhrase.value.length; i++) {
        if (lastKey.value === "Backspace") {
            inputText.value = inputText.value.slice(0, -2);
        }



        progress.value = Math.min((inputText.value.length / newPhrase.value.length) * 100, 100);

        if (lastKey.value === "Backspace") {
            console.log(lastKey.value);
            
            g -= 2;
            listSpan[i - 1].style.backgroundColor = "brown";
            listSpan[i - 1].style.borderBottom = "solid 2px";
            if (listSpan[0]=== "") {
                inputText.value.length = 0;
            }
            return;
        }

        else if (newPhrase.value[i] === lastKey.value) {
            if (listSpan[i].style.backgroundColor === "brown") {
                console.log(listSpan[i].style.backgroundColor);

                listSpan[i].style.backgroundColor = "orange";

                return;
            } else {
                listSpan[i].style.backgroundColor = "green";
                listSpan[i].style.borderBottom = "none";
                listSpan[i + 1].style.borderBottom = "solid 2px";
                return;
            }
            // console.log(newPhrase.value.length);
            // return;
        } else {
            listSpan[i].style.backgroundColor = "red";
            listSpan[i].style.borderBottom = "none";
            listSpan[i + 1].style.borderBottom = "solid 2px";
            console.log(progress.value);
            return;
        };


    };

};

function choosePhrase() {
    const tableau = [
        "orem ipsum dolor sit amet consectetur adipisicing  elit. ",
        "atus fugiat dolore, neque, blanditiis labore doloribus,",
        "quia quidem explicabo libero cum ",
        "cum esse quae quaerat quam excepturi.",
    ]

    phrase.value = tableau[Math.floor(Math.random() * (tableau.length))];
    // console.log(phrase.value);
    return phrase;
};
function maPhrase() {
    newPhrase.value = phrase.value.split("");
    // console.log(newPhrase.value);
    return newPhrase.value;
};




onMounted(() => {
    window.addEventListener('keyup', (event) => pressKeyUp(event));
    choosePhrase();
    maPhrase();

});

</script>





<style scoped>
.typing-club {
    font-family: 'Arial', sans-serif;
    text-align: center;
    background-color: #f7f9fc;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;

    margin: 10% 20% 1%;
}

.typing-club:hover {
    background-color: #e0e7ee;
}

.phrase-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.maClasse {
    font-size: 28px;
    margin: 0 4px;
    transition: transform 0.2s, color 0.3s;
    padding: 4px;
    border-radius: 4px;
}

.maClasse:hover {
    transform: scale(1.1);
    color: #3498db;
    /* Couleur au survol */
}

.progress-bar {
    width: 60%;
    background: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    height: 20px;
    margin-top: 20px;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 0 20%;
}

.progress {
    height: 100%;
    background: #4caf50;
    /* Couleur de progression */
    transition: width 0.3s ease-in-out;
}

/**************************************  Css REcapView ***********************************************/

/* Ajoutez une classe pour les étoiles jaunes */
.star {
    font-size: 24px;
    /* Ajustez la taille selon vos préférences */
}

.star.yellow img {
    filter: brightness(1.5);
    /* Exemple pour éclaircir l'étoile */
}

.star-container {
    display: flex;
    /* Changer la mise en page des étoiles */
    justify-content: center;
    /* Centrer les étoiles */
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

    /* height: 850px;  */
    /*********/
    /* padding-top: 150px; */
    background-color: #FFFFFF00;
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

.dure {
    text-align: center;
}

.circle-content {
    font-size: 16px;
    text-align: center;
}

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
    text-align: center;
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

/* *********************************** */
.star-container {
    display: flex;
    /* Changer la mise en page des étoiles */
    justify-content: center;
    /* Centrer les étoiles */
}

.star {
    font-size: 24px;
    /* Ajustez la taille selon vos préférences */
    margin: 0 2px;
    /* Ajoutez un espace entre les étoiles */
}



/* Déconnection  */



.ntb {
    position: fixed;
    /* Positionnement fixe */
    top: 20px;
    /* Distance du haut de la page */
    right: 20px;
    /* Distance du côté droit de la page */
    z-index: 1000;
    /* Assure que le bouton est au-dessus des autres éléments */
}

.deconnecte {
    background-color: #ff4d4d;
    /* Couleur de fond rouge */
    color: white;
    /* Couleur du texte */
    border: none;
    /* Pas de bordure */
    border-radius: 5px;
    /* Coins arrondis */
    padding: 10px 20px;
    /* Espacement intérieur */
    font-size: 16px;
    /* Taille de police */
    cursor: pointer;
    /* Changer le curseur au survol */
    transition: background-color 0.3s ease;
    /* Animation au survol */
}

.deconnecte:hover {
    background-color: #ff1a1a;
    /* Couleur au survol */
}
</style>