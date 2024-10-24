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
    </div>
    <p id="affichageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat dolore, neque, blanditiis labore doloribus, quia quidem explicabo libero cum esse quae quaerat quam excepturi.
    </p>
  </div>
</template>

<script>

export default {
  data() {
      const para = "Lorem ipsum quae quaerat quam ."
    return {
      inputText: '',
      totalLength: para.length,
    };
  },
  computed: {
    progress() {
      return Math.min((this.inputText.length / this.totalLength) * 100, 100);
    },
  },
  // methods: {
  //   updateProgress() {
  //     // La barre de progression est automatiquement mise à jour par computed
  //   },
  // },
};
</script>

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
</style>
