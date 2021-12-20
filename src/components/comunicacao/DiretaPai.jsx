import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div> 
            <DiretaFilho name="Maria" idade = {25} sexo={false}></DiretaFilho>
            <DiretaFilho name="Mateus" idade = {22} sexo={true}></DiretaFilho>
        </div>
    )
}