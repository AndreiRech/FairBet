# INTRODUÇÃO

Esse programa simula uma loteria. Para jogar, crie apostas informando o nome, cpf e 5 números entre [1-50], ou, alternativamente, clique em automático para gerar 100 apostas aleatórias.

# 🛠 PRÉ REQUISITOS

É necessária a instalação do [NODE](https://nodejs.org/en/download/) de preferência na versão 10.4.0

# ⚙ INSTALAÇÃO E INICIALIZAÇÃO

Para instalar as dependências do código vá para a raiz e utilize o comando:
```bash
  npm install
```
Logo após, inicialize o projeto utilizando o comando:
```bash
  npm start
```

# ℹ️ INFORMAÇÕES CRUCIAIS

Em um determinado momento, haverá um popup com dois botões: *GERAR ESTATÍSTICAS* e *VER ESTATÍSTICAS*. Para o bom funcionamento da aplicação, é **obrigatoriamente necessário** clicar no botão **GERAR ESTATÍSTICAS** antes do outro.

# 🎮 COMO jogar

1. Clique no botão `CADASTRAR` na *página inicial*  

2. Clique no botão `COMEÇAR` na *página de escolhas*

3. Cadastre suas informações nos `input text-box`, contendo obrigatoriamente `nome, cpf e números (separados por '-')`    
  3.1 Após, envie as mesmas clicando em `ENVIAR`    
  3.2 Alternativamente, pode somente inserir `nome e cpf` e clicar no botão `ALEATÓRIO` para gerar os 5 números para você   
  3.3 Também, pode clicar no botão `AUTOMÁTICO`, pois assim criará 100 apostas de maneira aleatória

4. Caso queira ver as apostas criadas até o momento, saia da *página de criação* clicando no botão `VOLTAR`
  4.1 Na página de escolhas, clique em `VISUALIZAR`

5. Ao terminar de cadastrar apostas, na *página de escolhas*, clique no botão `INICIAR SORTEIO`

6. Clique em `CONTINUAR`
  6.1 Caso não houve nenhum vencedores, clique em `SORTEAR NOVAMENTE` até alguma mudança ocorrer  
  6.2 Caso haja algum vencedor, clique **PRIMEIRAMENTE** em `GERAR ESTATÍSTICAS` e **SOMENTE DEPOIS** em `VER ESTATÍSTICAS`  
  6.3 Caso clique 25 vezes em `SORTEAR NOVAMENTE` e não tenha resultados positivos, clique no botão `REINICIAR PROGRAMA` para recomeçar

7. Veja o resumo das apostas e desça a página até encontrar o botão `PRÊMIO`

8. Veja o resultado e o prêmio na *página final*