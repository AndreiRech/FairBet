import React from 'react';
import CriaBotao from '../components/CriaBotao';
import { Link } from 'react-router-dom';
import TabelaResultados from './TabelaResultados';
import {calculaPremio} from '../functions/CalculaPremio'
import {deletar} from '../functions/Delete'
import '../styles/style.css';

//Método que cria de fato o botão a partir da necessidade
const tipoBotao = (fechar, estilo, conteudo) => {

  //Estilo 1 corresponde ao popup de confirmação pré-sorteio
  if (estilo === 1) {
    return (
      <div className='popup-fundo'>
        <div className="popup-conteudo">
          <p className='popup-titulo'>DESEJA COMEÇAR?</p>
          <p className='popup-info'>Ao começar o sorteio não serão mais permitidas apostas</p>
          <div className='popup-botoes'>
              <Link onClick={fechar} to='/sorteio' id='botao' className='botao-continuar'>CONTINUAR</Link>
              <CriaBotao nome='fechar' texto='FECHAR' onClick={fechar}/>
          </div>
        </div>
      </div>
    );
  }

  //Estilo 2 corresponde à tabela final com o resultado do sorteio
  else if (estilo ===2) {
    //Chamada para a realização do cálculo da quantidade a ser prêmiada
    calculaPremio(conteudo.quantidade, conteudo.nova.length-5);

    /*conteudo.numerosApostados => lista com todos os números apostados e suas quantidades
    conteudo.vencedores => nome de todos os vencedores
    conteudo.nova.join('-') => números que foram sorteados já separados por hífens
    conteudo.nova.length-5 => quantidade de rodadas extras após a realização do sorteio inicial
    conteudo.quantidade => quantidade de vencedores*/
    return (
      <div className='popup-fundo-sorteio'>
        <div className="popup-conteudo-sorteio">
          <h1 className='titulo-resultado'>RESULTADO</h1>
          
          <div className='tabelas-resultados'>
              <TabelaResultados tamanho={'grande'} nome={'numeros-apostados'} titulo={'NÚMEROS APOSTADOS'} texto={conteudo.numerosApostados} />
              <div className='tabelas-esquerda'>
                  <TabelaResultados tamanho={'medio'} nome={'vencedores'} titulo={'VENCEDORES'} texto={conteudo.vencedores} />
                  <TabelaResultados tamanho={'medio'} nome={'numeros-vencedores'} titulo={'NÚMEROS VENCEDORES'} texto={conteudo.nova.join('-')} />
                  <div className='tabelas-peq-baixo'>
                      <TabelaResultados tamanho={'pequeno'} nome={'rodadas'} titulo={'RODADAS'} texto={conteudo.nova.length-5} />
                      <TabelaResultados tamanho={'pequeno'} nome={'n-vencedores'} titulo={'QUANTOS'} texto={conteudo.quantidade} />
                  </div>
              </div>
          </div>

          <div className='botao-finais' style={{ marginTop: '20px' }}>
            <Link to='/vencedor' className='botao-premio' id='botao'>PRÊMIO</Link>
          </div>
        </div>
      </div>
    );
  } 
  
  //Estilo 3 para quando realiza 25x o sorteio e não sai nenhum vencedor
  else if (estilo === 3) {
    return (
      <div className='popup-fundo'>
        <div className="popup-conteudo">
          <p className='popup-titulo'>SEM VENCEDORES</p>
          <p className='popup-info'>Infelizmente não encontramos nenhum vencedor :/</p>
          <div className='popup-botoes'>
            <a href='/'><CriaBotao nome='reiniciar' texto='REINICIAR PROGRAMA' onClick={() => deletar()}/></a>
          </div>
        </div>
      </div>
    );
  }

  //Estilo 4 para mostrar as informações
  else {
    return (
      <div className='popup-fundo'>
        <div className="popup-conteudo">
          <p className='popup-titulo'>INFORMAÇÕES</p>
          <p className='popup-info'>Esse programa simula uma loteria. Para jogar, crie apostas informando o nome, cpf e 5 números entre [1-50], ou, alternativamente, clique em automático para gerar 100 apostas aleatórias.</p>

          <div className='popup-botoes'>
            <CriaBotao nome='reiniciar' texto='ENTENDI' onClick={fechar}/>
          </div>
        </div>
      </div>
    );
  }
}

//Criação de popups contendo seu estado (aberto/fechado), o popup a ser criado (estilo) e o conteúdo(que no caso foi um array) caso necessário
const Popup = ({ aberto, fechar, estilo, conteudo }) => {
  if (!aberto) return null;

  return (
    <div className="popup">
      {tipoBotao(fechar, estilo, conteudo)}
    </div>
  );
};

export default Popup;