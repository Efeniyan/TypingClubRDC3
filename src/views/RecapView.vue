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

/************************************ */
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
  position: fixed; /* Positionnement fixe */
  top: 20px; /* Distance du haut de la page */
  right: 20px; /* Distance du côté droit de la page */
  z-index: 1000; /* Assure que le bouton est au-dessus des autres éléments */
}

.deconnecte {
  background-color: #ff4d4d; /* Couleur de fond rouge */
  color: white; /* Couleur du texte */
  border: none; /* Pas de bordure */
  border-radius: 5px; /* Coins arrondis */
  padding: 10px 20px; /* Espacement intérieur */
  font-size: 16px; /* Taille de police */
  cursor: pointer; /* Changer le curseur au survol */
  transition: background-color 0.3s ease; /* Animation au survol */
}

.deconnecte:hover {
  background-color: #ff1a1a; /* Couleur au survol */
}



</style>
