import alunos from "../../data/alunos";
export default props =>{
    const li1 =( 
    <li>
        {alunos[0].id}) {alunos[0].nome} == {alunos[0].nota}
    </li>    
    )
    return (

        <div>

            <ul>
                {li1}
                <li>Carlos - 7.7</li>
                <li>Daniel - 6.4</li>
            </ul>

        </div>

    )

}