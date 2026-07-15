import { cafesAvaliados } from '@/data/cafes'
const quantidadedecafesAvaliados = cafesAvaliados.length
let cafecommaiornota
for (let cafe of cafesAvaliados) {
  if (cafecommaiornota == undefined || cafe.media > cafecommaiornota.media) {
    cafecommaiornota = cafe
  }
}
let cafeMaisRecente
for (let cafe of cafesAvaliados) {
  const dataAtual = new Date(cafe.data)
  if (cafeMaisRecente == undefined) {
    cafeMaisRecente = cafe
  } else {
    const dataMaisRecente = new Date(cafeMaisRecente.data)
    if (dataAtual.getTime() > dataMaisRecente.getTime()) {
      cafeMaisRecente = cafe
    }
  }
}
export { quantidadedecafesAvaliados, cafecommaiornota, cafeMaisRecente }
