<script setup>
import coffeRankingCard from '@/components/coffeeRankingCard.vue'; 
import { cafesranqueados } from '@/Utils/rankingUtils.js';
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>Posição</th>
        <th>Café</th>
        <th>Produtor</th>
        <th colspan="2">Nota Final (Média SCA)</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
<coffeRankingCard v-for="cafe in cafesranqueados" :key="cafe.id" :media="cafe.media" :nome="cafe.nome" :produtor="cafe.produtor" :id="cafe.id"></coffeRankingCard>
    </tbody>
  </table>
</template>
<style scoped>
table{
  border-collapse: collapse;
  width: 100%;
  margin-top: 3vw;
}
table thead{
  background-color: #eeecf2;
   border: 1px solid rgb(166, 156, 156);
}
table thead th{
  font-size: 3rem;
  color: black;
  vertical-align: middle;
  padding: 1vw 2vw;
  text-align: center;
}
</style>
