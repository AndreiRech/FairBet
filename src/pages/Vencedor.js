import React from 'react'
import CriaBotao from '../components/CriaBotao';
import RepeteEmoji from '../components/RepeteEmoji';
import {deletar} from '../functions/Delete'
import '../styles/style.css'
import logoGrande from '../assets/logo-grande.png';

//página final com a quantia do prêmio
export const Vencedor = () => {
    //cria 15 emojis para serem 'voados'
    const emojis = <RepeteEmoji quantidade={15}/>;

    //recupera o valor do prêmio do localStorage
    const premio = localStorage.getItem('premio');

    //ao clicar no botão 'reiniciar' apaga todos os dados armazenados e volta para a página inicial
    return (
        <div className='container'>
            <div className='logo-grande'>
                <img src={logoGrande} className='imagem-logo-grande' alt='Logo Fair Bet'/>
            </div>
  
            <div class="linha-vertical"></div>
  
            <div className='introducao'>
                <div className='mensagem-vencedor'>
                    <h1 className='mensagem-titulo-vencedor'>PARABÉNS</h1>
                </div>

                <div className='vencedores'>
                    <div className='emojis'>{emojis}</div>
                        <p className='vencedores-premio'>OS GANHADORES RECEBERÃO <span>R${premio}</span></p>
                    <div className='emojis'>{emojis}</div>
                </div>

                <div className='final'>
                    <a href='/'><CriaBotao nome='reiniciar' texto='REINICIAR PROGRAMA' onClick={() =>deletar()}/></a>
                </div>
            </div>
        </div>
    );
  };