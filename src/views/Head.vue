<template>
    <div>
      <input type="text"  placeholder="Tape quelque chose..." />

      <div class="madiv">
       <span class="maClasse" v-for="(elem, index) in newPhrase" :key="index.id">{{ elem }}_</span> 

      </div>
      <p>Touche pressée : {{ lastKey }}</p>
    </div>
  </template>
  
  <script>

import { ref } from "vue";

  export default {
    
    
    data() {
      return {
        lastKey: '',
        phrase: [],
        newPhrase: [],
        // maClasse: ref(["col1","col2"])
        g : -1,

      };
    },
    mounted() {
    window.addEventListener('keyup', this.pressKeyUp);
    this.choosePhrase();
    this.maPhrase();
   
  },
    methods: {

        pressKeyUp(event) {
        this.lastKey = event.key;
         const listSpan = document.querySelectorAll(".maClasse")
         console.log(listSpan);
        //  console.log( this.g++);
        this.g++
         for (let i= this.g; i< this.newPhrase.length; i++) {
            if (this.newPhrase[i] === this.lastKey) {
                listSpan[i].style.backgroundColor = "green";
                
                return;
            } else {
                listSpan[i].style.backgroundColor = "red";
            
                return;

            } ; 
    
        }
        },
        
        
        maPhrase() {
            this.newPhrase = this.phrase.split("");
            console.log(this.newPhrase);
        },
        choosePhrase () {
        const tableau = [
            "orem ipsum dolor sit amet consectetur adipisicing  elit. ",
            "atus fugiat dolore, neque, blanditiis labore doloribus,",
            "quia quidem explicabo libero cum ",
            "cum esse quae quaerat quam excepturi.",
        ]
        
        this.phrase = tableau[Math.floor(Math.random() * (tableau.length))];
        console.log(this.phrase);
    },
    }
  }
  </script>
  <style scoped>
  .madiv {
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
  }

  .col1{
    background-color: green;
  }

  .col2{
    background-color: rgb(128, 94, 0);
  }
</style>
  