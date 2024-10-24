<script>
import Head from './Head.vue';
export default {
    data() {
        const tableau = [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Natus fugiat dolore, neque, blanditiis labore doloribus,",
            "quia quidem explicabo libero cum ",
            "cum esse quae quaerat quam excepturi.",
        ]
        const caract = ref("");
        const phrase = () => {
            return tableau[Math.floor(Math.random() * (tableau.length-1))]
        };
        
        return {
            inputText: '',
            totalLength: phrase.length,
        };
    },
    computed: {
          progress() {
            return Math.min((this.inputText.length / this.totalLength) * 100, 100);
          },
        },
        methods: {
          updateProgress() {
              // La barre de progression est automatiquement mise à jour par computed
            },
        },
    };
    </script>
<template>
    <Head></Head>
  <div>
      <textarea
        v-model="inputText"
        @input="updateProgress"
        placeholder="Commence à taper ici..."
      ></textarea>
      <div class="progress-bar">
        <div
          class="progress"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
      <p id="affichageText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat dolore, neque, blanditiis labore doloribus, quia quidem explicabo libero cum esse quae quaerat quam excepturi.
      </p>
    </div>
</template>
  
  
<style>
  .progress-bar {
    width: 100%;
    background: #eee;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 10px;
  }
  .progress {
    height: 20px;
    background: #4caf50;
    transition: width 0.2s;
  }

  #affichageText {
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
  