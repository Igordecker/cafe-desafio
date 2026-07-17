<script setup>
import { definirposicao, countingstars } from '@/Utils/rankingUtils';
import { Icon } from '@iconify/vue';
const props = defineProps(['nome', 'produtor', 'media', 'id']);
const posicao = definirposicao(props.id)
const quantitystars = countingstars(props.media)
</script>
<template>
  <tr :class="['posicoes', {'topthree': posicao <= 3}]">
    <td>
    <Icon icon="mdi:medal-outline" class="gold" v-if="posicao==1"></Icon>
    <Icon icon="mdi:medal-outline" class="silver" v-else-if="posicao == 2"></Icon>
    <Icon icon="mdi:medal-outline" class="bronze" v-else-if="posicao == 3"></Icon>
    <p v-else>{{ posicao }}</p></td>
    <td class="nome">{{ props.nome }}</td>
    <td class="produtor">{{ props.produtor }}</td>
    <td class="media">{{ props.media }}</td>
    <td class="stars"><Icon
      v-for="estrela in 5"
      :key="estrela"
      icon="mdi:star"
      :class="['star-icon', { 'star-active': estrela <= quantitystars }]"
    ></Icon></td>
    <td><button>Ver Detalhes</button></td>
  </tr>
</template>
<style scoped>
tr{
  align-items: center;
  height: 5vw;
  border: 1px solid rgb(166, 156, 156);
}
tr.topthree{
  background-color: #f7f5f8;
}
td{
  font-size: 2.5rem;
  color: black;
  vertical-align: middle;
  padding: 0 2vw;
  text-align: center;
}
td.produtor{
  font-size: 2.3rem;
  font-weight: 100;
  color: rgb(68, 65, 65);
}
td.nome{
  font-weight: 700;
  font-size: 2.8rem;
}
td.media{
  padding: 0 0 0 2vw;
  font-weight: 600;
  color: rgb(28, 113, 28);
}
td.stars{
  padding: 0 2vw 0 0;
}
td button{
  font-size: 2rem;
  font-weight: 400;
  padding: 0.5vw 1vw;
  border-radius: 5px;
  background-color: white;
  border: 1px solid rgb(177, 161, 161);
}
.gold{
  color: gold;
  height: 4vw;
}
.silver{
  color: silver;
  height: 4vw;
}
.bronze{
  color: brown;
  height: 4vw;
}
.star-icon{
  color: rgb(161, 140, 140);
}
.star-active{
color: gold;
}
</style>
