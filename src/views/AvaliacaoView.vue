<script setup>
import { cafesAvaliados } from '@/data/cafes'
import { quantidadeDeCafesAvaliados } from '@/Utils/HomeUtils'
import coffeCard from '@/components/coffeCard.vue'
import { Icon } from '@iconify/vue'
import formularioCard from '@/components/formularioCard.vue';
</script>
<template>
  <main>
    <section class="avaliacoesdecafe">
      <div class="listagemdecafe">
        <div class="container">
          <Icon icon="mdi:seed"></Icon>
          <div class="content">
            <h2>Avaliações de cafés</h2>
            <p>Veja os cafés avaliados e adicione uma nova avaliação</p>
          </div>
        </div>
        <div class="cafesavaliados">
          <h3>Cafés Avaliados({{ quantidadeDeCafesAvaliados}})</h3>
          <ul>
            <coffeCard
              v-for="cafe in cafesAvaliados"
              :key="cafe.id"
              :nome="cafe.nome"
              :produtor="cafe.produtor"
              :data="cafe.data"
              :media="cafe.media"
            ></coffeCard>
          </ul>
        </div>
      </div>
      <div class="formulario">
<formularioCard></formularioCard>
      </div>
    </section>
  </main>
</template>
<style scoped>
section.avaliacoesdecafe{
  display: flex;
  margin: 2vw 3vw;
  gap: 3vw;
}
section.avaliacoesdecafe div{
  color: black;
  font-size: 2rem;
  max-width: 50vw;
}
section.avaliacoesdecafe div.listagemdecafe div.container{
  display: flex;
  gap: 1vw;
}
div.content h2{
  font-size: 3rem;
  margin-bottom: 0.5vw;
}
section.avaliacoesdecafe div.listagemdecafe div.cafesavaliados{
  border: 1px solid #c4bdcf;
  padding: 1vw 2vw;
  margin-top: 2vw;
}
div.cafesavaliados h3{
  font-size: 2.5rem;
}
</style>
