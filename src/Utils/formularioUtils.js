import { cafesAvaliados } from "@/data/cafes";
function adicionarCafe(nome,produtor,aroma,sabor,acidez,corpo,finalizacao,media,data,obs) {
    const ultimoId = Math.max(...cafesAvaliados.map(item => item.id));
    cafesAvaliados.push({
        id: ultimoId+1,
        nome: nome,
        produtor: produtor,
        aroma: aroma,
        sabor: sabor,
        acidez: acidez,
        corpo: corpo,
        finalizacao: finalizacao,
        media: media,
        data: data,
        observacoes: obs
    })
}
export {adicionarCafe}
