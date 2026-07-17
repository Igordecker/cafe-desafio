<script setup>
import TrophyOutlineIcon from '@iconify-vue/mdi/trophy-outline';
import SignalCellularOutlineIcon from '@iconify-vue/mdi/signal-cellular-outline';
import { quantidadeDeCafesAvaliados } from '@/Utils/HomeUtils';
import LeaderboardTable from '@/components/LeaderboardTable.vue';
</script>
<template>
   <main>
    <section class="ranking">
      <div class="partesuperior">
        <div class="title">
          <TrophyOutlineIcon height="4vw" style="color: rgb(69, 15, 15);"></TrophyOutlineIcon>
        <div class="conteiner">
      <h2>Ranking Geral</h2>
      <p>Classificação dos melhores cafés do campeonato.</p>
      </div>
      </div>
      <div class="totaldecafes">
        <SignalCellularOutlineIcon height="3vw" style="color: rgb(69, 15, 15);"></SignalCellularOutlineIcon>
        <div class="content">
          <h3>Total de cafés avaliados</h3>
          <p>{{ quantidadeDeCafesAvaliados }}</p>
        </div>
      </div>
      </div>
<div class="table">
<LeaderboardTable></LeaderboardTable>
</div>
    </section>
   </main>
</template>
<style scoped>
section.ranking{
  margin: 2vw 3vw;
}
section.ranking div.partesuperior{
  display: flex;
  color: black;
  justify-content: space-between;
}
div.partesuperior div.title{
  display: flex;
  color: black;
  gap: 1vw;
}
div.title h2{
font-size: 5rem;
font-weight: bold;
margin-bottom: 1vw;
}
div.title p{
  font-size: 2rem;
  color: rgb(52, 46, 46);
}
div.totaldecafes{
  display: flex;
  color: black;
  gap: 1vw;
  border: 1px solid #eae5f2;
  background-color: #f8f5f2;
  border-radius: 10px;
  width: 20vw;
  height: auto;
  text-align: center;
  padding: 1vw 1vw;
  justify-content: center;
}
div.totaldecafes h3{
  font-size: 2rem;
  margin: 0 0 0.7vw 0;
}
div.totaldecafes p{
font-size: 4rem;
}
</style>
