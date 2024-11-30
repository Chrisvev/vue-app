<script setup>
import { ref } from 'vue';

// Referencias
const chiste = ref(null);
const cargandoValue = ref(false);

function fetchData() {
  cargandoValue.value = true; 
  chiste.value = null;  // Esto limpia el chiste anterior

  fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
    .then(response => response.json())
    .then(data => {
  
      if (data.type === 'single') {
        chiste.value = data.joke;
      } else {
        chiste.value = `${data.setup} - ${data.delivery}`;
      }
    })
    .catch(error => console.error('Error al obtener el chiste:', error))
    .finally(() => {
      cargandoValue.value = false; 
    });
}
</script>

<template>
 
  <div class="containerBody">
    <button class="btnChiste" @click="fetchData">¡Dame un chiste!</button>
    <div class="pd">By Christofer Velazquez</div>
    <div v-if="cargandoValue" class="cargando-spinner">
      <div class="spinner"></div>
      <p>Cargando un chiste...</p>
    </div>

    <div v-if="chiste && !cargandoValue" class="carta">
      <p>{{ chiste }}</p>
    </div>
  </div>
</template>



<style>
.pd{
  font-size: x-small;
}
body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .containerBody {
    text-align: center;
  }
  
  .btnChiste {
    background-color: #416dff;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .btnChiste:hover {
    background-color: #f84f4f;
  }
  
  .carta {
    margin-top: 20px;
    padding: 20px;
    max-width: 400px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    color: #333;
  }
  
  .cargando-spinner {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    color: #666;
  }
  
  .spinner {
    width: 30px;
    height: 30px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #ff6b6b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  