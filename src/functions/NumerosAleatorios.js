//gera um número aleatório dentre [1 - 50]
const numeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 50) + 1;
    return numero;
};

//gera uma lista de 5 números aleatórios
const listaAleatorio = () => {
    //utilizei set para garantir a unicidade dos números
    const numeros = new Set();
    while (numeros.size < 5){
        numeros.add(numeroAleatorio());
    }

    //depois só converti para um array qualquer
    return [...numeros];
};

//adiciona um número em uma lista
const adicionaLista = (lista) => {
    //cria um número e uma set a partir da lista
    let numero = numeroAleatorio();
    let set = new Set(lista);

    //caso o número não esteja no set ele só o adiciona e retorna como lista
    if (!set.has(numero)) {
        set.add(numero);
        return [...set];
    } 
    
    //caso contrário, faz uma chamada recursiva para colocar um número novo dentro da lista
    else {

        return adicionaLista(lista);
    }
};

export { numeroAleatorio, listaAleatorio, adicionaLista };