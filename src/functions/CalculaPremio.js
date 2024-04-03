import ImportarApostas from '../functions/ImportarApostas'

//calcula o valor do prêmio
const calculaPremio = (quantidade, numeros) => {
    //importa as apostas
    const apostas = ImportarApostas();

    /*resolvi calcular o valor totalmente baseado em proporções
    descobri que o brasileiro gasta em torno de 20% de um salário mínimo (=~250) e multipliquei por 10 para dar um número maior
    depois multipliquei pela quantidade de apostas e reduzi do total a quantidade de números sorteados além dos 5
    por fim dividi pela quantidade de ganhadores*/
    const total = ((2500*apostas.length) - (numeros*100))/quantidade;

    //nesse momento percebi que poderia armazenar alguns valores no localStorage temporariamente (apesar de não saber se isso é muito aconselhavel)
    //Se eu tivesse percebido antes talvez minha vida teria sido mais fácil
    localStorage.setItem('premio', total);
    return total;
}

export {calculaPremio};