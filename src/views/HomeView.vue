<script setup>
import CoffeeIcon from '@iconify-vue/mdi/coffee'
import ClipboardTextOutlineIcon from '@iconify-vue/mdi/clipboard-text-outline'; 
import PeopleGroupIcon from '@iconify-vue/mdi/people-group';
import { cafesAvaliados } from '@/data/cafes';
const quantidadedecafesAvaliados = cafesAvaliados.length
</script>
<template>
  <main>
    <section class="banner">
      <CoffeeIcon height="10vw" style="color: rgb(46, 22, 22)"></CoffeeIcon>
      <div class="container">
        <h2>
          Campeonato de Avaliação <br />
          de Qualidade de Café
        </h2>
        <div style="width: 4vw; height: 0.3vw; background-color: #b99d86; border-radius: 1vw"></div>
        <p>
          Avalie, compare e descubra os melhores <br />
          cafés espéciais
        </p>
      </div>
    </section>
    <section class="cards">
      <div class="cards">
<ul>
  <li>
<PeopleGroupIcon height="4em"></PeopleGroupIcon>
<div>
  <h3>Total de Cafés Avaliados</h3>
  <p>{{ quantidadedecafesAvaliados }}</p>
  <p>Cafés</p>
</div>
  </li>
  <li></li>
  <li></li>
</ul>
      </div>
      <button><ClipboardTextOutlineIcon height="1.5em"></ClipboardTextOutlineIcon>Ver avaliações</button>
    </section>
  </main>
</template>
<style scoped>
section.banner {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #eae5f2;
  background-color: #f8f5f2;
  margin: 2vw 3vw;
  border-radius: 20px;
  padding: 3vw;
}
section.banner h2 {
  font-size: 4rem;
  font-weight: bold;
  color: black;
}
section.banner p {
  font-size: 2rem;
}
div.container {
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
  gap: 1.5vw;
}
section.cards{

}
section.cards div.cards{

}
section.cards button{
  display: flex;
  align-items: center;
}
</style>
