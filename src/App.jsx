
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () =>{
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={6.9}
        />
        <Primeiro></Primeiro>
    </div>
};    

