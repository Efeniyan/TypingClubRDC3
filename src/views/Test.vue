<template>
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
        <div
          class="character"
          :style="{ left: progress + '%' }"
        ></div>
      </div>
      <div class="progress-text">
        <p id="affichageText">{{ phrase }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      const phrase = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat dolore, neque, blanditiis labore doloribus, quia quidem explicabo libero cum esse quae quaerat quam excepturi.";
      return {
        inputText: '',
        phrase,
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
  
  <style>
  .progress-bar {
    position: relative;
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
  
  .character {
    position: absolute;
    bottom: 25px; /* Ajustez la position verticale si nécessaire */
    width: 30px; /* Largeur du bonhomme */
    height: 30px; /* Hauteur du bonhomme */
    background: url('https://example.com/bonhomme.png') no-repeat center center; /* Remplacez par l'URL de votre bonhomme */
    background-size: contain; /* Ajuste l'image pour contenir le div */
    transition: left 0.2s;
  }
  
  .progress-text {
    margin-top: 10px;
  }
  </style>
  