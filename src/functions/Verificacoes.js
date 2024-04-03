//optei por aceitar qualquer coisa no nome, então só optei para não deixar string vazias
const verificaNome = (nome) => {
  if (nome.trim() === '') {
     alert('Por favor, insira um nome válido!');
    return false;
  }
  return true;
};

const verificaCpf = (cpf, apostas, nome) => {
  //verifica se o cpf é composto somente por 11 números sequenciados
  if (!/^\d{11}$/.test(cpf)) {
    alert('Por favor, insira um CPF válido.');
    return false;
  }

  //confirma se não existe nenhuma aposta com o mesmo cpf e nomes diferentes (já que o cpf é único não pode pertencer a mais de 1 pessoa)
  if (apostas.some((aposta) => aposta.cpf === cpf && aposta.nome !== nome)) {
    alert('Este CPF não pertence a essa pessoa.');
    return false;
  }
  return true;
}

const verificaNumeros = (numeros) => {
  //transforma a string antes separadas por '-' e transforma em uma lista numerica
  const numerosArray = numeros.split('-').map((num) => Number(num.trim()));

  //verifica se não contem exatos 5 números, possua alguma coisa que não seja numero, não esteja dentre do range de [1-50] ou possua números repetidos
  if (numerosArray.length !== 5 || numerosArray.some((num) => isNaN(num) || num < 1 || num > 50) || new Set(numerosArray).size !== 5) {
    alert('Por favor, insira cinco números válidos de 1 a 50, separados por hífen.');
    return false;
  }
  return true;
}

const verificaAposta = (numeros, cpf, apostas) => {
  //mesma coisa do numerosArray superior
  const numerosArray = numeros.split('-').map((num) => Number(num.trim()));

  //verfica se uma pessoa está tentando realizar a mesma aposta duas vezes
  if (apostas.some((aposta) => aposta.cpf === cpf && JSON.stringify(aposta.numeros) === JSON.stringify(numerosArray))) {
    alert('A mesma pessoa não pode informar uma mesma aposta duas vezes.');
    return false;
  }
  return true;
}

export { verificaNome, verificaCpf, verificaNumeros, verificaAposta };