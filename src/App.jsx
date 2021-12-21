import './App.css'

import Mega from './components/mega/Mega'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import TabelaProduto from './components/repeticao/TabelaProduto'
import Membro from './components/basicos/FamiliaMembro'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
export default () =>(
    <div className="App">  
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards">

    {/*----------EXERCÌCIO #12------------ */}

    <Card titulo="#13 - Megasena" color="#28FF35">
        <Mega qtde={8}/>
    </Card>  

    
    {/*----------EXERCÌCIO #12------------ */}

    <Card titulo="#12 - Contador" color="#33DD95">
        <Contador numeroInicial={10}/>
    </Card>  


    {/*----------EXERCÌCIO #11------------ */}

    <Card titulo="#11 - Comunicação Controlada" color="#DD9595">
        <Input/>
    </Card>         


          {/*----------EXERCÌCIO #10------------ */}

    <Card titulo="#10 - Comunicação Indireta" color="#339595">
        <IndiretaPai></IndiretaPai>
    </Card>      

        {/*----------EXERCÌCIO #09------------- */}

  <Card titulo="#09 - Comunicação Direta" color="#332395">
        <DiretaPai></DiretaPai>
    </Card>

    {/*----------EXERCÌCIO #08------------- */}

    <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20}/>
        <UsuarioInfo usuario={{name:'Mateus'}}/>
        <UsuarioInfo usuario={{}}/>

    </Card>

    {/*----------EXERCÌCIO #07------------- */}

    <Card titulo="#07 - Produtos" color="#3FDDF9">
        <TabelaProduto/>
    </Card>
    
        {/*----------EXERCÌCIO #06------------- */}

    <Card titulo="#06 - Listas" color="#FDFF29">
        <ListaAlunos></ListaAlunos>
    </Card>

        {/*----------EXERCÌCIO #05------------- */}

    <Card titulo="#05 - Componente com Filhos" color="#30FF29">
    <Familia sobName="Silva">
        <Membro name="Pedro"/>
        <Membro name="Ana"/>
        <Membro name="Gustavo"/>
    </Familia>
    </Card>

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