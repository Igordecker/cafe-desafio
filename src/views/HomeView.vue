<script setup>
import ClipboardTextOutlineIcon from '@iconify-vue/mdi/clipboard-text-outline';
import PeopleGroupIcon from '@iconify-vue/mdi/people-group';
import TrophyOutlineIcon from '@iconify-vue/mdi/trophy-outline';
import ClockOutlineIcon from '@iconify-vue/mdi/clock-outline';
import { quantidadedecafesAvaliados, cafeMaisRecente, cafecommaiornota } from '@/Utils/HomeUtils';
import { RouterLink } from 'vue-router';
</script>
<template>
  <main>
    <section class="banner">
      <img src="/public/images/coffe.png" alt="">
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
  <li class="primeiro">
  <PeopleGroupIcon height="8em" style="border-radius: 100px;background-color: #f8f5f2; color: #5A3621;"></PeopleGroupIcon>
<div>
  <h3>Total de Cafés Avaliados</h3>
  <p class="numero" style="color: #5A3621;">{{ quantidadedecafesAvaliados }}</p>
  <p>Cafés</p>
</div>
  </li>
  <li class="maior">
   <TrophyOutlineIcon height="8em" style="border-radius: 100px;background-color: #f8f5f2; color: #385411"></TrophyOutlineIcon>
    <div>
      <h3>Café com Maior Nota</h3>
      <p class="numero" style="color: #385411;">{{ cafecommaiornota.media }}</p>
      <p class="grande">{{ cafecommaiornota.nome }}</p>
      <p>{{ cafecommaiornota.produtor }}</p>
    </div>
  </li>
  <li class="recente">
      <ClockOutlineIcon height="8em" style="border-radius: 100px;background-color: #f8f5f2; color: #2A507D;"></ClockOutlineIcon>
  <div>
<h3>Última Avaliação</h3>
<p class="numero" style="color: #2A507D;">{{ cafeMaisRecente.media }}</p>
<p class="grande">{{ cafeMaisRecente.nome }}</p>
<p>{{ cafeMaisRecente.data }}</p>
  </div>
  </li>
</ul>
      </div>
      <RouterLink to="/avaliacoes"><ClipboardTextOutlineIcon height="1.5em"></ClipboardTextOutlineIcon>Ver avaliações</RouterLink>
    </section>
  </main>
</template>
<style scoped>
section.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10vw;
  border: 1px solid #eae5f2;
  background-color: #f8f5f2;
  margin: 2vw 3vw;
  border-radius: 20px;
  padding: 3vw;
}
section.banner img{
  height: 15vw;
  width: auto;
}
section.banner h2 {
  font-size: 5.5rem;
  font-weight: bold;
  color: black;
}
section.banner p {
  font-size: 4rem;
  color: black;
}
div.container {
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
  gap: 1.5vw;
}
section.cards{
  place-items: center;
  display: flex;
  flex-direction: column;
  gap: 2vw;
}
div.cards div{
  display: flex;
  flex-direction: column;
  gap: 0.7vw;
  justify-content: center;
  text-align: center;
}
section.cards div.cards ul{
display: flex;
align-items: center;
justify-content: center;
gap: 2vw;
}
section.cards div.cards ul li{
  border: 1px solid #c4bdcf;
  display: flex;
  width: 25vw;
  height: 30vh;
  border-radius: 30px;
  align-items: center;
  gap: 2vw;
  justify-content: center;
}
div.cards ul li h3{
font-size: 2.3rem;
color: black;
}
div.cards ul li p{
  color: #777878;
  font-size: 2em;
}
div.cards ul li p.grande{
  color: black;
  font-size: 2.5rem;
}
div.cards ul li p.numero{
font-size: 3.3rem;
}
section.cards a{
  display: flex;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  background-color: #5A3621;
  border: none;
  border-radius: 10px;
  padding: 0.5vw 5vw;
}
</style>
