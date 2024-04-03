import React from 'react';

//cria uma tabela para mostrar as informações das apostas realizadas até o momento
const Tabela = ({titulo, cabecalho, dados, numeros}) => {

    //numeros[id] é o array com os números apostados por usuário
    return (
      <div className="tabela-container">
        <h2 className='tabela-titulo'>{titulo}</h2>
        <table className="tabela">
          <thead>
            <tr>
              {cabecalho.map((item, id) => ( <th key={id}>{item}</th>))}
            </tr>
          </thead>
          <tbody>
            {dados.map((item,id) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{numeros[id]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Tabela;