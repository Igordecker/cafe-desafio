<script setup>
import { RouterLink } from 'vue-router';
import PersonIcon from '@iconify-vue/mdi/person';
import CoffeeIcon from '@iconify-vue/mdi/coffee';
import HomeOutlineIcon from '@iconify-vue/mdi/home-outline';
import ClipboardTextOutlineIcon from '@iconify-vue/mdi/clipboard-text-outline';
import TrophyIcon from '@iconify-vue/mdi/trophy';
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const isHomePage = computed(() => route.name === 'home')
const isAvaliacaoPage = computed(() => route.name === 'avaliacao')
const isRankingPage = computed(() => route.name === 'ranking')

const liHome = computed(() => {
  if (isHomePage.value) {
    return 'liAtiva'
  } else {
    return 'LiDesativa'
  }
})
const liAvaliacao = computed(() => {
  if (isAvaliacaoPage.value) {
    return 'liAtiva'
  } else {
    return 'LiDesativa'
  }
})
const liRanking = computed(() => {
  if (isRankingPage.value) {
    return 'liAtiva'
  } else {
    return 'LiDesativa'
  }
})
</script>
<template>
    <header>
        <div class="container">
<div class="logo">
<RouterLink to="/"><CoffeeIcon height="5em"></CoffeeIcon><h1>COFFEE QUALITY <br>CHALLANGE</h1> </RouterLink>
</div>
<div class="navegacao">
    <nav>
       <ul>
        <li :class="liHome"><RouterLink to="/"><HomeOutlineIcon height="1.5em"></HomeOutlineIcon>  Home</RouterLink></li>
        <li :class="liAvaliacao"><RouterLink to="/avaliacao"><ClipboardTextOutlineIcon height="1.5em"></ClipboardTextOutlineIcon> Avaliação</RouterLink></li>
        <li :class="liRanking"><RouterLink to="/ranking"><TrophyIcon height="1.5em"></TrophyIcon> Ranking</RouterLink></li>
       </ul>
    </nav>
</div>
<div class="usuario">
   <PersonIcon height="5em" color="gray"></PersonIcon>
</div>
    </div>
    </header>
</template>
<style scoped>
div.container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 1vw 2vw;
    border-bottom: 1px solid rgb(179, 179, 179);;
}
h1{
    font-size: 2.5rem;
}
div.logo a{
    display: flex;
    align-items: center;
    justify-content: center;
}
ul{
    display: flex;
}
ul li{
    margin: 0 20px;
    font-size: 2rem;
    align-items: center;
    color: black;
}
ul li.liAtiva{
    color: brown;
    border-bottom: 3px solid brown;
}
ul li a{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
div.usuario {
background-color: rgb(179, 179, 179);
border-radius: 100vw;
padding: 0.3vw;
}
</style>
