import { reactive } from "vue";

const cafesAvaliados = reactive([
    {
        id: 1,
        nome: 'Bourboun Amarelo',
        produtor: 'Fazenda Boa Vista',
        aroma: 2,
        sabor: 5,
        acidez: 3,
        corpo: 7,
        finalizacao: 9,
        media: 5.2,
        data: '14/07/2026, 15:40:41',
        observacoes: 'Este é um café esquisito'
    },
    {
        id: 2,
        nome: 'Bourboun Vermelho',
        produtor: 'Fazenda Vila Nova',
        aroma: 3,
        sabor: 5,
        acidez: 5,
        corpo: 7,
        finalizacao: 9,
        media: 6.2,
        data: '12/07/2026, 12:50:41',
        observacoes: 'Fds'
    },
    {
        id: 3,
        nome: 'Bourboun Laranja',
        produtor: 'Fazenda Botas de Judas',
        aroma: 2,
        sabor: 5,
        acidez: 3,
        corpo: 7,
        finalizacao: 9,
        media: 4.3,
        data: '09/07/2026, 12:35:51',
        observacoes: 'Este é um café esquisito'
    },
    {
        id: 4,
        nome: 'Catuaí Vermelho',
        produtor: 'Sítio Santa Maria',
        aroma: 4,
        sabor: 6,
        acidez: 4,
        corpo: 6,
        finalizacao: 8,
        media: 5.6,
        data: '14/07/2026, 16:00:22',
        observacoes: 'Bem equilibrado e doce.'
    },
    {
        id: 5,
        nome: 'Geisha',
        produtor: 'Fazenda Vista Alegre',
        aroma: 5,
        sabor: 5,
        acidez: 5,
        corpo: 5,
        finalizacao: 10,
        media: 6.0,
        data: '13/07/2026, 10:15:30',
        observacoes: 'Notas florais muito intensas.'
    },
    {
        id: 6,
        nome: 'Topázio',
        produtor: 'Recanto dos Pássaros',
        aroma: 3,
        sabor: 4,
        acidez: 4,
        corpo: 6,
        finalizacao: 7,
        media: 4.8,
        data: '11/07/2026, 09:45:12',
        observacoes: 'Corpo médio, mas finalização curta.'
    },
    {
        id: 7,
        nome: 'Arara',
        produtor: 'Fazenda Primavera',
        aroma: 4,
        sabor: 5,
        acidez: 3,
        corpo: 7,
        finalizacao: 8,
        media: 5.4,
        data: '08/07/2026, 14:20:00',
        observacoes: 'Café excelente para o dia a dia.'
    }
]);

export { cafesAvaliados };