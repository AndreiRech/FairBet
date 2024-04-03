//apenas reinicia a 'base de dados' e consequentemente o programa
const deletar = () => {
    localStorage.removeItem('apostas');
    localStorage.removeItem('premio');
}
    
export {deletar};