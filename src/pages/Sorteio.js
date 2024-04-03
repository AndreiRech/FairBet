import React, {useState} from 'react';
import { adicionaLista, listaAleatorio } from '../functions/NumerosAleatorios';
import {verificaSorteio} from '../functions/VerificaSorteio';
import CriaBotao from '../components/CriaBotao';
import ImportarApostas from '../functions/ImportarApostas';
import Popup from '../components/PopUp';
import '../styles/style.css'

//página responsável pela realização do sorteio
export const Sorteio = () => {
    //criação de hooks com todos os tipos de informações necessárias

    //cria uma lista com 5 números aleatórios que serão os premiados e, se necessário, ampliados
    const [nova, setNova] = useState(listaAleatorio());

    //números apostados com suas quantidades, nome dos vencedores e quantidade de vencedores
    const [numerosApostados, setNumerosApostados] = useState({ numeros: [], quantidade: 0 });
    const [vencedores, setVencedores] = useState({ nome: "", numero: [] });
    const [quantidade, setQuantidade] = useState(0);

    //recuperação das apostas
    const apostas = ImportarApostas();

    //inicializando o popup e suas funções
    const [estado, setIsOpen] = useState(false);
    const abrirPopup = () => {
        setIsOpen(true);
    };
    const fecharPopup = () => {
        setIsOpen(false);
    };

    //aumenta a lista de sorteados em +1 elemento até o máximo de 30 (25 sorteios)
    const denovo = () => {
        const MAX = 25;
        if (nova.length - 5 < MAX) {
            setNova(adicionaLista(nova));
        } 
        
        //caso não encontre, mostra o popup que não foi encontrado nenhum vencedor e finaliza
        else {
            abrirPopup();
        }
    };

    //gera as estatisticas para mostrar na tabela de informações após o sorteio
    const estatisticas = () => {
        //primeiro encontra as apostas que tiveram sucesso acertando os números sorteados
        const vencedoresFiltrados = apostas.filter(aposta => {
            const numerosIguais = aposta.numeros.filter(num => nova.includes(num));
            return numerosIguais.length === 5;
        });

        //seta a quantidade de vencedores
        setQuantidade(vencedoresFiltrados.length);

        //pega o nome e as apostas correspondente as apostas vencedoras
        const vencedoresOrdenados = vencedoresFiltrados.map(vencedor => ({ nome: vencedor.nome, aposta: vencedor.numeros.join(' - ')}));

        //ordena o objeto em ordem alfabética
        vencedoresOrdenados.sort((a, b) => a.nome.localeCompare(b.nome));

        //cria um arry final com "nome [ aposta ]" e seta o mesmo
        const vencedoresFormatados = vencedoresOrdenados.map(vencedor => `${vencedor.nome} [${vencedor.aposta}]`);
 
        setVencedores(vencedoresFormatados);

        //nessas próxmias linhas basicamente faz a frequência dos números
        let numerosContados = {};
        for (let aposta of apostas) {
            let numeros = aposta.numeros;

            for (let numero of numeros) {
                if (numerosContados[numero]) {
                    numerosContados[numero]++;
                } else {
                    numerosContados[numero] = 1;
                }
            }
        }

        //gera um arry contendo [key : value] (nesse caso [números : quantidades])
        const pares = Object.entries(numerosContados);
        const numeros = [];
        const quantidades = [];

        //separa os valores em duas listas diferentes
        for (const [numero, quantidade] of pares) {
            numeros.push(parseInt(numero));
            quantidades.push(quantidade);
        }
        const final = [numeros, quantidades];
        setNumerosApostados(final);
    };

    //define qual conteúdo deve aparecer (se já encontrou vencedores ou ainda não)
    const defineTela = () => {
        //estava dando problemas sem a utilização do conteudo por conta de algum early return
        //então tive que mudar o jeito que implemente e optei por retornar o conteúdo da tela em uma variável
        //talvez não tenha sido isso que arrumou, mas pelo menos não ocorreu mais
        let conteudo = null;

        //define o conteudo que será presente no popup
        const conteudoPopup = {quantidade, vencedores, nova, numerosApostados};

        //popup quando acharam um vencedor
        if (verificaSorteio(nova)) {
            conteudo = (
                <div className='conteudo-sorteio'>
                    <h1 className='titulo-sorteio-texto'>FASE DE SORTEIO</h1>
                    <p className='paragrafo-sorteio'>ALGUÉM VENCEU!</p>
                    <p className='paragrafo-sorteio'>Mas calma. Antes disso, <strong>volte para a página inicial</strong> e clique em gerar estatisticas para <strong>criar as informações extras!</strong>!</p>
                    <CriaBotao nome='estatisticas' texto='GERAR ESTATÍSTICAS' onClick={estatisticas}/>
                    <CriaBotao nome='ver' texto='VER ESTATÍSTICAS' onClick={abrirPopup}/>
                    <Popup aberto={estado} fechar={fecharPopup} estilo={2} conteudo={conteudoPopup}/>
                </div>
            );
        } 

        //popup enquanto ainda precisa sortear mais números
        else {
            conteudo = (
                <div className='conteudo-sorteio'>
                    <h1 className='titulo-sorteio-texto'>FASE DE SORTEIO</h1>
                    <p className='paragrafo-sorteio'>Não houve nenhum vencedor.</p>
                    <p className='paragrafo-sorteio'>Realize o sorteio de novo para adicionar outro <strong>número ao sorteio!</strong></p>
                    <p className='paragrafo-sorteio-tentativas'>TENTATIVAS = {nova.length - 5}</p>
                    <CriaBotao nome='denovo' texto='SORTEAR NOVAMENTE' onClick={denovo} />
                    <Popup aberto={estado} fechar={fecharPopup} estilo={3}/>
                </div>
            );
        }

        return conteudo;
    };

    return (
        <div className='container-sorteio'>
            <div className='fundo-quadro-sorteio'>
                {defineTela()}
            </div>
        </div>
    );
};