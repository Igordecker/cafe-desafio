<script setup>
import BullhornOutlineIcon from '@iconify-vue/mdi/bullhorn-outline'
import MedalOutlineIcon from '@iconify-vue/mdi/medal-outline'
import StarOutlineIcon from '@iconify-vue/mdi/star-outline'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const isHomePage = computed(() => route.name === 'home')
const isAvaliacaoPage = computed(() => route.name === 'avaliacao')
const isRankingPage = computed(() => route.name === 'ranking')
</script>
<template>
  <footer>
    <div class="container">
      <div class="footer-home" v-if="isHomePage">
        <BullhornOutlineIcon height="4em" style="color: black;"></BullhornOutlineIcon>
        <div class="content">
          <h3>Participe e Faça a Diferença!</h3>
          <p>
            Cada avaliação ajuda a reconhecer o trabalho dos produtores <br> e valorizar o café de
            qualidade
          </p>
        </div>
      </div>
      <div class="footer-avaliacao" v-if="isAvaliacaoPage">
        <StarOutlineIcon height="4em" style="width: 4em; height: 4em; color: white; background-color: brown; border-radius: 100vw; padding: 0.5vw; box-sizing: content-box;"></StarOutlineIcon>
        <div class="content">
          <h3>Dicas:</h3>
          <ul>
            <li>Todas as notas devem estar entre 0 e 10</li>
            <li>A media será atualizada automaticamente conforme você altera as notas</li>
            <li>Após salvar, o café será adicionado na lista e ao ranking automaticamente</li>
          </ul>
        </div>
      </div>
      <div class="footer-ranking" v-if="isRankingPage">
        <MedalOutlineIcon height="4em" style="color: brown;"></MedalOutlineIcon>
        <div class="content">
          <h3>Como funciona a pontuação?</h3>
          <p>As notas são baseadas na metodologia SCA (Speceality Coffe Association).</p>
          <p>Cada critério recebe uma nota de 0 a 10 e a média final define a classificação.</p>
        </div>
      </div>
      <img src="/images/footerimage.png" alt="café"/>
    </div>
  </footer>
</template>
<style scoped>
div.container {
  display: flex;
  background-color: #f8f5f2;
  border: 1px solid #eae5f2; margin: 2vw 3vw;
  border-radius: 10px;
  padding: 1vw;
  justify-content: space-between;
}
div.container div.footer-home{
  display: flex;
  gap: 1vw;
  margin: 3vw;
}
div.container div.footer-avaliacao{
  display: flex;
  margin: 3vw;
  gap: 1vw;
}
div.container div.footer-ranking{
  display: flex;
  gap: 1vw;
  margin: 3vw;
}

img {
  width: 40vw;
  height: auto;
  background-color: #f8f5f2;
  padding: 0;
}
h3{
  color: black;
  font-weight: bold;
  font-size: 3rem;
  margin: 0 0 1vw 0;
}
p {
  color: #777878;
  font-size: 2em;
}
ul{
  list-style: disc;
}
ul li{
  color: black;
  font-size: 2em;
}
</style>
