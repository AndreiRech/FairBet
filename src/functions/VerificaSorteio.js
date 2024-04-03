import ImportarApostas from './ImportarApostas';

//confere se já existe alguma aposta que tenha acertados com os números atuais
const verificaSorteio = (lista) => {
    const apostas = ImportarApostas();

    //verifica todas as apostas em busca da primeira que feche 5 números
    for (const aposta of apostas) {
        if (aposta.numeros.every(num => lista.includes(num))) {
            return true;
        }
    }

    //caso não encontre, retorna falso
    return false;
}

export {verificaSorteio};