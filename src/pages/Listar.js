import { Link } from 'react-router-dom';
import Tabela from '../components/Tabela';
import ImportarApostas from '../functions/ImportarApostas';
import '../styles/style.css'

//cria as informações que irão servir de cabeçalho para a tabela
const lista = ['ID', 'NOME', 'CPF', 'NÚMEROS'];

//página onde lista as apostas
export const Listar = () => {
    //importa apostas e formata os números para aparecerem de forma mais legível
    const apostas = ImportarApostas();
    const formatados = apostas.map(aposta => aposta.numeros.join(' '))

    return (
        <div className='container-listar'>
            <div className='fundo-quadro-listar'>
                <div className='botao-voltar-div'>
                    <Link to='/escolha' id='botao' className='botao-voltar'>VOLTAR</Link>
                </div>
                <Tabela titulo='LISTA' cabecalho={lista} dados={apostas} numeros={formatados}/>
            </div>
        </div>
    );
};