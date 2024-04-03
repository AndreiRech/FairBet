import React from 'react';
import TabelaQuantidade from './TabelaQuantidade';

//define a criação da tabela padrão e uma variedade da mesma utilizado para os números/frequência
const TabelaResultados = ({ tamanho, nome, titulo, texto }) => {

    //else if para definir qual tabela criar
    if (nome === 'numeros-apostados') {
        return (
            <div className={`tabela-${tamanho}`}>
                <p className={`tabela-${nome}-titulo`}>{titulo}</p>
                <div className={`tabela-${tamanho}-${nome}`}>
                    <TabelaQuantidade titulo={titulo} cabecalho={['NÚMERO', 'QUANTIDADE']} dados={texto} />
                </div>
            </div>
        );
    } else {
        return (
            <div className={`tabela-${tamanho}`}>
                <p className={`tabela-${nome}-titulo`}>{titulo}</p>
                <div className={`tabela-${tamanho}-${nome}`}>
                    <p className='tabela-conteudo'>{texto}</p>
                </div>
            </div>
        );
    }
};

export default TabelaResultados;