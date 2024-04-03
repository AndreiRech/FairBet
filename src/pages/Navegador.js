import React, {useState} from 'react';
import CriaBotao from '../components/CriaBotao';
import logoGrande from '../assets/logo-grande.png';
import logoPequeno from '../assets/logo-pequeno.jpg';
import Popup from '../components/PopUp';
import '../styles/style.css'

/*cria a barra de navegação fixa do site, contendo as logos e o botão de informações
antes eu tinha deixado o botão de home, mas percebi que poderia quebrar muito fácil o programa
então resolvi tirar o botão. O problema é que ficou muito vazio, logo coloquei as informações, que encaixou bem*/
export const Nav = () => {
    //funções para fazer o popup aparecer só quando solicitado e fechar quando necessário
    const [estado, setIsOpen] = useState(false);
    const abrirPopup = () => {
        setIsOpen(true);
    };
    const fecharPopup = () => {
        setIsOpen(false);
    };

    return (
        <nav className='cabecalho'>
            <div className='cabecalho-esquerda'>
                <img src={logoPequeno} alt='Fair Bet'/>
            </div>
            <div className='cabecalho-centro'>
                <img src={logoGrande} className='imagem-logo' alt='Logo Fair Bet'/>
            </div>
            <div className='cabecalho-direita'>
                <CriaBotao nome='reiniciar' texto='INFORMAÇÕES' onClick={abrirPopup}/>
            </div>
            <Popup aberto={estado} fechar={fecharPopup} estilo={4}/>
        </nav>
    );
}