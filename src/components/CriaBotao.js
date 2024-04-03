import React from 'react';

//Componente que cria os botões utilizados e já os seta com o estilo necessário
const CriaBotao = ({nome, texto, onClick}) => {
    return <button id='botao' className={`botao-${nome}`} onClick={onClick}>{texto}</button>
};

export default CriaBotao;