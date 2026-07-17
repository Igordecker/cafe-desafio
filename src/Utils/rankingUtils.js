import { cafesAvaliados } from "@/data/cafes";
import { computed } from "vue";
const cafesranqueados = computed(() => {
  return [...cafesAvaliados].sort((a, b) => b.media - a.media)
})
function definirposicao(id){
const posicao = cafesranqueados.value.findIndex(c => c.id == id) + 1
return posicao
}
function countingstars(nota){
  let quantitystars;
if(nota >= 9){
  quantitystars = 5;
}else if(nota >= 8){
  quantitystars = 4;
}
else if(nota >= 7){
  quantitystars = 3;
}
else if(nota >= 6){
  quantitystars = 2
}
else {quantitystars = 1
}
return quantitystars;
}
export{cafesranqueados, definirposicao, countingstars}
