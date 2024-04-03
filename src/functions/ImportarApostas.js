//importa a lista de apostas até o momento do localStorage
const ImportarApostas = () => {
    const apostas = localStorage.getItem('apostas');

    //se apostas ainda não foi inicializada, começa com um array vazio, senão retorna o valor atual
    return apostas ? JSON.parse(apostas) : [];
};

export default ImportarApostas;