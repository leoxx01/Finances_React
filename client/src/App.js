import React,{useState,useEffect} from 'react';
import Buscar from './components/Buscar';
import FiltroNome from './components/FiltroNome';
import Card from './components/Card';
import Info from './components/Info'

import axios from 'axios'
 

export default function App() {
  const [data,setData] = useState([])

  useEffect(() => {
    const teste = async () =>{
      try{
        const dados = await axios.get('http://localhost:3002/api/transaction/teste')
        
        setData(dados)
      }catch{
    
      }
      }
      teste()
  }, [])
 
  console.log(data)

  return (
    <div >
        <h5 className='center'><strong>Desafio Final do Bootcamp Full Stack</strong></h5>
        <p className='center' style={{fontSize: '20px'}}>Controle Financeiro Pessoal</p>
        <Buscar/>
        <Info/>
        <FiltroNome/>
        <Card data={data.data}/>
    </div>
    )
}
