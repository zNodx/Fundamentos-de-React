export default props => {
    return (
        <div> 
            <span>{props.name} </span>
            <span><strong>{props.idade} </strong></span>
            <span>{props.sexo ? 'Menino' : 'Menina'}!</span>
        </div>
    )
}