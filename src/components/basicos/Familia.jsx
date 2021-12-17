import Membro from "./FamiliaMembro"
export default props => {

    return (
     <div>
         <Membro name="Pedro" sobName={props.sobName}/>
         <Membro name="Ana" {...props}/>
         <Membro name="Gustavo" sobName="Silva"/>
     </div>
    )



}

