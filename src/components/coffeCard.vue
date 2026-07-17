<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps(['nome', 'produtor', 'data', 'media'])
</script>

<template>
  <li>
<div class="esquerda">
  <div class="icon">
    <Icon
icon="mdi:seed-outline"
></Icon>
   </div>
<div class="content">
<h3>{{ props.nome }}</h3>
<h4>Produtor: {{ props.produtor }}</h4>
<p>Avaliado em: {{ new Date(props.data).toLocaleString('pt-BR')}}</p>
</div>
</div>
<div class="direita">
<div class="conteiner">
  <h4>Média SCA</h4>
  <p>{{ props.media }}</p>
</div>
<Icon
icon="mdi:dots-vertical"></Icon>
</div>
  </li>
</template>
<style scoped>
li{
  display: flex;
  border: 1px solid #c4bdcf;
  border-radius: 5px;
  margin: 1vw 0;
  padding: 1vw 2vw;
  gap: 10vw;
  align-items: center;
  justify-content: space-between;
}
div.esquerda{
  display: flex;
  align-items: center;
  gap: 1vw;
}
.icon{
  background-color: #f8f5f2;
  color: brown;
  padding: 1vw;
}
div.content{
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
}
li h4{
  font-size: 1.8rem;
}
li p {
  font-size: 1.5rem;
}
div.direita{
  display: flex;
  align-items: center;
  gap: 2vw;
}
div.direita div.conteiner{
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
}
</style>
