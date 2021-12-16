import './index.css'
import ReactDOM from 'react-dom'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'




ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
        titulo="Situação do Aluno" 
        aluno="Pedro"
        nota={6.9}
        ></ComParametro>
    </div>
    , document.getElementById('root')
    )