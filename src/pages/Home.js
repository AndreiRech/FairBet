import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/style.css'
import logoGrande from '../assets/logo-grande.png';
import editar from '../assets/edit.png';

//antes tinha dois botões com imagens, mas após avanço no desenvolvimento ficou só um
//decidi deixar mesmo assim pois facilita entender o código principal
const BotaoComImagem = ({ nome, to, titulo, paragrafo, imagemSrc, alt }) => {
  return (
    <Link to={to} className={`botao-${nome}`}>
      <div className={`botao-${nome}-esquerda`}>
        <p className='mensagem-titulo-botao'>{titulo}</p>
        <p className='mensagem-paragrafo-botao'>{paragrafo}</p>
      </div>
      <div className={`botao-${nome}-direita`}>
        <img src={imagemSrc} className={`imagem-${nome}`} alt={alt} />
      </div>
    </Link>
  );
};

//página incial com as informações de boas-vidnas
export const Home = () => {
  return (
    <div className='container'>
      <div className='logo-grande'>
        <img src={logoGrande} className='imagem-logo-grande' alt='Logo Fair Bet'/>
      </div>

      <div class="linha-vertical"></div>

      <div className='introducao'>
        <div className='mensagem'>
          <h1 className='mensagem-titulo'>Bem-Vindo!</h1>
          <p className='mensagem-paragrafo'>Apresentamos com entusiasmo a Fair Bets, sua nova plataforma de apostas  que combina diversão e responsabilidade. Aqui, você pode desfrutar da emoção do entretenimento enquanto nos  preocupamos com a integridade e segurança de suas apostas. Seja  bem-vindo ao mundo da Fair Bets, onde a diversão e a transparência andam  lado a lado!</p>
        </div>

        <div className='botoes-criar-vencedor'>
          <BotaoComImagem nome='criar' to='/escolha' titulo='Cadastro' paragrafo='Cadastre e visualize tickets!' imagemSrc={editar} alt='Símbolo de Edição'/>
        </div>
      </div>
    </div>
  );
};
