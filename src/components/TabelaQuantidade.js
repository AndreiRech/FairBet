import React from 'react';

//cria a tabela utilizada para mostrar os números de 1-50 e suas frequências
const TabelaQuantidade = ({cabecalho, dados}) => {
  
  //dados representa uma lista com a lista de números e a lista de suas quantidades
  const numeros = dados[0];
  const quantidades = dados[1];

  return (
    <div className="tabela-container">
      <table className="tabela">
        <thead>
          <tr>
            {cabecalho.map((item, id) => (<th key={id}>{item}</th>))}
          </tr>
        </thead>
        <tbody>
          {numeros.map((numero, index) => (
            <tr key={index}>
              <td>{numero}</td>
              <td>{quantidades[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaQuantidade;