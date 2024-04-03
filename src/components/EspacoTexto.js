import React, { useState } from 'react';

//Componente que cria uma input text-box 
const EspacoTexto = ({ nome, ph, onChange, valor }) => {
  const [input, setInput] = useState('');

  //Hook que inicializa o input zerado e também o atualiza caso necessário
  const insereValor = (e) => {
    setInput(e.target.value);
    onChange(e);
  };

  //Pequena correção gramática na escrita do título
  let nomeUpper = nome.toUpperCase();
  if (nomeUpper.includes('NUMERO')) {
    nomeUpper = 'NÚMEROS';
  }

  return (
    <div className={`input-${nome}`}>
      <p className={`titulo-criar`}>{nomeUpper}</p>
      <input type='text' className={`input-box-${nome}`} placeholder={ph} onChange={insereValor} valor={input}/>
    </div>
  );
};

export default EspacoTexto;