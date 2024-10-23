
<script setup>

</script>

<template>
  <div class="typing-summary">
    <h2>Récapitulatif de votre frappe</h2>
    <div class="summary-container">
      <div class="circle">
        <div class="circle-content">
          <p><strong>50 WPM</strong></p> 
        </div>
        <p>Vitesse</p>
      </div>
      <div class="circle">
        <div class="circle-content">
          <p><strong>30 s</strong></p> 
        </div>
        <p>Durée</p>
      </div>
    </div>
    <button>Recommencer</button> 
  </div>
</template>




<style scoped>
.typing-summary {
  text-align: center;
  margin: 20px;
}

.summary-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.circle {
  border: 5px solid #4caf50;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.circle-content {
  font-size: 1.5em;
}
</style>
