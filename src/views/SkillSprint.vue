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
let inputText = ref('');
let totalLength = newPhrase.value.length;
const progress = ref(0);
const precisionTabGreen = ref([]);
const precisionTabOrange = ref([]);
const precisonGreen = ref(null);
const precisonOrange = ref(null);
const precisionTotale = ref(null);


function pressKeyUp(event) {
    lastKey.value = event.key;
    // console.log(lastKey.value);

    const listSpan = document.querySelectorAll(".maClasse")
    // console.log(listSpan);
    //  console.log( g++);
    inputText.value += lastKey.value;
    // console.log(inputText);


    g++;
    for (let i = g; i < newPhrase.value.length ; i++) {
    progress.value = Math.min((inputText.value.length / newPhrase.value.length) * 100, 100);
    if (g === newPhrase.value.length -1 ) {
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
                if(elem.style.backgroundColor === "green") {
                    precisionTabGreen.value.push(elem)
                }
            })
            console.log("precisionTabGreen", precisionTabGreen.value);
            
            precisonGreen.value = Math.floor((precisionTabGreen.value.length / newPhrase.value.length) * 100);
            console.log("precisonGreen", precisonGreen.value);

            listSpan.forEach((elem, index) => {
                if(elem.style.backgroundColor === "orange") {
                    precisionTabOrange.value.push(elem)
                }
            })
            console.log("precisionTabOrange", precisionTabOrange.value);
            precisonOrange.value = Math.floor(((precisionTabOrange.value.length / 2) / newPhrase.value.length *100));
            console.log("precisonOrange", precisonOrange.value);

            precisionTotale.value = precisonGreen.value + precisonOrange.value;

            console.log(" precisionTotale",  precisionTotale.value);
            
            //Fonction de vitesse par mot
            let x = newPhrase.value.join("");
            x = x.split(" ")
            console.log( x);
            
            return



        }, 500)
    } else{

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
    console.log(phrase.value.split(" "));
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
    color: #3498db; /* Couleur au survol */
}

.progress-bar {
    width: 60%;
    background: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    height: 20px;
    margin-top: 20px;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 0 20% ;
}

.progress {
    height: 100%;
    background: #4caf50; /* Couleur de progression */
    transition: width 0.3s ease-in-out;
}


</style>