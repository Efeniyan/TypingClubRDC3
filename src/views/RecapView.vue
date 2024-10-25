<script setup>
</script>

<template>
  <div class="recap">
    <div class="sommaire">

      <h2>Récapitulatif de votre frappe</h2>

      <div class="star-container">

        <span class="star">⭐</span>
        <span class="star">⭐</span>
        <span class="star">⭐</span>
        <span class="star">⭐</span>
        <span class="star">⭐</span>

      </div>

    </div>

    <div class="summary-container">

      <div class="circle">

        <div class="circle-content">

          <p><strong>50 MPM</strong></p>

        </div>

        <p>Vitesse</p>

      </div>

      <div class="circle duration-circle">

        <div class="circle-content">

          <p><strong>30 s</strong></p>

        </div>

        <p>Durée</p>

      </div>
      
    </div>
    <div class="btn">
      <button>Recommencer</button>
    </div>
  </div>

</template>

<style scoped>
.recap {
  /* background-image: url('../assets/cl6.jpg'); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 850px; 
  padding-top: 150px; 

}
h2{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.sommaire {
  text-align: center;
  margin: 20px;
}

.summary-container {
  display: flex;
  flex-wrap: wrap; /* Permet de passer à la ligne */
  justify-content: center;
  margin: 20px 0;
  gap: 100px; /* Réduit l'écart sur les petits écrans */
}

.circle {
  border: 5px solid;
  border-radius: 50%;
  width: 100px; 
  height: 100px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.circle-content {
  font-size: 16px; 
  text-align: center;
}

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
}

.btn {
  text-align: center;
  padding: 20px; 
  /* background-color: red; */
}
button{
  color: red;
  background-color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
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

</style>
