import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CriaBotao from '../components/CriaBotao';
import Popup from '../components/PopUp';
import '../styles/style.css'

//cria os botões para selecionar o que deseja fazer
const BotaoEscolha = ({ nome, to, texto, botao }) => {
    return (
        <div className={`opcao-${nome}`}>
             <p className={`${nome}-texto`}>{texto}</p>
            <Link to={to} className={`botao-${nome}-jogo`}>{botao}</Link>
        </div>
    );
};

//página que você pode escolher o que fazer (ver lista ou criar aposta)
export const Escolha = () => {
    //funções para fazer o popup aparecer só quando solicitado e fechar quando necessário
    const [estado, setIsOpen] = useState(false);

    const abrirPopup = () => {
        setIsOpen(true);
    };

    const fecharPopup = () => {
        setIsOpen(false);
    };

    return (
        <div className='container-escolha'>
            <div className='fundo-quadro-escolha'>
                <h1 className='titulo-escolha-texto'>ESCOLHA O QUE FAZER</h1>

                <div className='opcoes-escolha'>
                    <BotaoEscolha nome='criar' to='/criar' texto='CRIAR JOGOS' botao='COMEÇAR'/>
                    <BotaoEscolha nome='listar' to='/listar' texto='LISTAR APOSTAS' botao='VISUALIZAR'/>
                </div>

                <div className='botao-finais'>
                    <CriaBotao nome='sorteio' texto='INICIAR SORTEIO' onClick={abrirPopup}/>
                    <Link to='/' id='botao' className='botao-voltar'>VOLTAR</Link>
                </div>

                <Popup aberto={estado} fechar={fecharPopup} estilo={1}/>
            </div>
        </div>
    );
}