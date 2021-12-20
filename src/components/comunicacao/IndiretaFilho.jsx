
export default props => {
    
    return (
        <div>
            <div>Filho</div> 
            <button onClick={function (e){
                props.quandoClicar('João', 53, true)
            }
            }>Enviar Informações</button>
        </div>
    )
}