import React from "react"
import If, {Else} from "./if"
export default props =>{
    const usuario = props.usuario || {}
    return (
        <div> 
            {/* <If test={usuario && usuario.name}>
            Seja bem vindo <strong>{usuario.name}</strong>!
            </If>  
            <If test={!usuario || !usuario.name}>
            Seja bem vindo <strong>Amigão</strong>!
            </If>  */}

            <If test={usuario && usuario.name}>
            Seja bem vindo <strong>{usuario.name}</strong>!
            <br></br>
            <Else>
            Seja bem vindo <strong>Amigão</strong>!
            </Else>
            </If>    
        </div>
    )
}