import IndiretaFilho from "./IndiretaFilho"

export default props => {

    let nome = '?'
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nomeParam,idadeParam,nerdParam){
        nome= nomeParam
        idade = idadeParam
        nerd = nerdParam
    }

    return (
        <div> 
        <span>{nome} </span>
        <span>{idade} </span>
        <span>{nerd ? 'Nerdola' : 'Imã de xereca'}</span> 
        <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
} 