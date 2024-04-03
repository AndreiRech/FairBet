import React from 'react';

//definindo a animação para os emojis ficarem 'voando' kk
const fazGirar = {display: 'inline-block', animation: 'voar 2s linear infinite'}

//apenas faz com que os emojis se repitam uma quantidade determinada de vezes
const RepeteEmoji = ({quantidade}) => {
    const emojis = [];
    const emoji = <span style={fazGirar}>💸</span>;

    for (let i = 0; i < quantidade; i++) {
        emojis.push(emoji);
      }
    return emojis;
}
export default RepeteEmoji;