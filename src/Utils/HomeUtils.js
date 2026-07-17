import { computed } from 'vue'
import { cafesAvaliados } from '@/data/cafes'

const quantidadeDeCafesAvaliados = computed(() => cafesAvaliados.length)

const cafeComMaiorNota = computed(() => {
  let melhorCafe
  for (let cafe of cafesAvaliados) {
    if (melhorCafe == undefined || cafe.media > melhorCafe.media) {
      melhorCafe = cafe
    }
  }
  return melhorCafe
})

const cafeMaisRecente = computed(() => {
  let recente
  for (let cafe of cafesAvaliados) {
    const dataAtual = new Date(cafe.data)
    if (recente == undefined || dataAtual.getTime() > new Date(recente.data).getTime()) {
      recente = cafe
    }
  }
  return recente
})

export { quantidadeDeCafesAvaliados, cafeComMaiorNota, cafeMaisRecente }
