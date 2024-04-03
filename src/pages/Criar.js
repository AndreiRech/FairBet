import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CriaBotao from '../components/CriaBotao';
import EspacoTexto from '../components/EspacoTexto';
import { verificaNome, verificaCpf, verificaNumeros, verificaAposta } from '../functions/Verificacoes';
import { listaAleatorio } from '../functions/NumerosAleatorios';
import ImportarApostas from '../functions/ImportarApostas';

//Página onde é possível criar as apostas
export const Criar = () => {
  //cria hooks para todas as informações que serão guardadas no localStorage
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [numeros, setNumeros] = useState('');
  const [apostas, setApostas] = useState(ImportarApostas());

  //criação da base inicial do ID
  let atual = 1000;

  //função que lida com os inputs das input text-boxes de forma genérica
  const handleChangeInput = (e, tipo) => {
    tipo(e.target.value);
  }

  //cria uma aposta a partir dos dados informados pelo usuário
  const geraNormal = () => {

    //realiza a verificação se há alguma informação incorreta
    if (!verificaNome(nome) ||!verificaCpf(cpf, apostas, nome) ||!verificaNumeros(numeros) ||!verificaAposta(numeros, cpf, apostas)) {
      return;
    }

    //cria uma aposta com todas as informações (id, nome, cpf e números apostados)
    const novaAposta = {
      id: atual + apostas.length,
      nome: nome,
      cpf: cpf,
      numeros: numeros.split('-').map((num) => Number(num.trim()))
    };

    //cria uma lista com todas as apostas até o momento e adiciona a nova aposta criada nela
    const novasApostas = [...apostas, novaAposta];

    //muda a variável aposta para futuras alterações
    setApostas(novasApostas);

    //guarda a lista com todas as apostas no localStorage
    localStorage.setItem('apostas', JSON.stringify(novasApostas));

    //aumenta em qual ID está
    atual++;

    //avisa o usuário que funcionou!
    alert("Apostas criadas com sucesso!")
  }

  //função que gera automáticamente as apostas (melhor para testar)
  const geraAutomatico = () => {
    const apostasAutomaticas = [];
  
    //caso queira mudar a quantidade de apostas criadas, só aumentar o valor do i dentro do for (o máximo que aceitou para mim foi =~ 20k)
    for (let i = 1; i <= 100; i++) {
      //cria nomes, cpf's e numeros todos 'aleatórios'
      const nomeAleatorio = `Pessoa ${i+apostas.length}`;
      const cpfAleatorio = Math.floor(Math.random() * 100000000000).toString().padStart(11, '0');
      const numerosAleatorios = [...listaAleatorio()];

      //adiciona a aposta
      const novaAposta = {
        id: atual + apostas.length + i,
        nome: nomeAleatorio,
        cpf: cpfAleatorio,
        numeros: numerosAleatorios
      };

      apostasAutomaticas.push(novaAposta);
    }

    //realiza a mesma coisa que em cima
    const novasApostas = [...apostas, ...apostasAutomaticas];
    setApostas([...apostas, ...apostasAutomaticas]);
    localStorage.setItem('apostas', JSON.stringify(novasApostas));
    alert("100 apostas criadas com sucesso!")
    atual++;
  }

  //função que gera os números aleatórios, caso assim seja desejado
  const geraAleatorio = () => {
    //gera os números e os formata para mostrar quais foram os criados
    const numerosAleatorios = [...listaAleatorio()];
    const numerosFormatados = numerosAleatorios.join('-');

    //faz a verificação para conferir se há nome e cpf dentro da input box
    if (!verificaNome(nome) ||!verificaCpf(cpf, apostas, nome)) {
      return;
    }
    
    //cria uma aposta nova
    const novaAposta = {
      id: atual + apostas.length,
      nome: nome,
      cpf: cpf,
      numeros: numerosAleatorios
    };

    //realiza a mesma coisa que em cima
    const novasApostas = [...apostas, novaAposta];
    setApostas(novasApostas);
    localStorage.setItem('apostas', JSON.stringify(novasApostas));
    atual++;
    alert(`Aposta com os números aleatório ${numerosFormatados} criada com sucesso!`)
  }

  return (
    <div className='container-criar'>
      <div className='fundo-quadro-criar'>
        <h1 className='titulo-criar-texto'>TICKET</h1>
        <div className='input-criar'>
          <EspacoTexto nome='nome' onChange={(e) => handleChangeInput(e, setNome)} ph='Informe seu nome | ex: Andrei'/>
          <EspacoTexto nome='cpf' onChange={(e) => handleChangeInput(e, setCpf)} ph='Informe seu cpf sem caracteres especiais | ex: 12345678900 '/>
          <EspacoTexto nome='numeros' onChange={(e) => handleChangeInput(e, setNumeros)} values={numeros} ph='Digite 5 números dentre [1 - 50] separados por hífens (-) | ex: 1-20-3-4-10'/>
          <CriaBotao nome='aleatorio' texto='ALEATÓRIO' onClick={geraAleatorio}/>
        </div>

        <div className='botoes-finais' style={{ marginTop: '80px'}}>
         <div className='automatico'>
          <CriaBotao nome='automatico' texto='AUTOMÁTICO' onClick={geraAutomatico}/>
          <p className='automatico-descricao'>cria 100 apostas com informações aleatórias e as envias automáticamente</p>
         </div>
          <CriaBotao nome='enviar' texto='ENVIAR' onClick={geraNormal}/>
          <Link to='/escolha' id='botao' className='botao-voltar'>VOLTAR</Link>
        </div>
      </div>
    </div>
  );
};