import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default () =>(
    <div className="App">  
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards">
        {/*----------EXERCÌCIO #04------------- */}

        <Card titulo="#04 Desafio Aleatório" color="#282e54">
        <Aleatorio min = {1} max ={60}/>
        </Card>

        {/*----------EXERCÌCIO #03------------- */}

        <Card titulo="#03 Fragmento"color="#05324b">
        <Fragmento />
        </Card>
        
        {/*----------EXERCÌCIO #02------------- */}    
        <Card titulo="#02 Com Parâmetro" color="#074e67">
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={6.9}
        />
        </Card>

        {/*----------EXERCÌCIO #01------------- */}

        <Card titulo="#01 Primeiro" color="#0a6496">
        <Primeiro></Primeiro>
        </Card>

        </div>

     
    </div>
)