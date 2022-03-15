import React from 'react';
import { useState } from 'react';
import './App.css';


import Button from './components/Button';
import Card from './components/Card';
import Item from './components/Item';

const App = () =>{

  const [valor , setValor] = useState(0)

  function Adicionar(){
    setValor(valor + 1) 
  } 
  function Remover(){
    if(valor > 0){
      setValor(valor - 1) 
    }
  } 

  return(
    <div className="container">
      <h1>Sergio Souza</h1>
      <p>Ola !!! Bem Vindo, Sou SERGIO, Um desenvolverdor em evolução... e no memento estou estudando REACT-JS</p>
      <div  className='list-group item'>
        <Item>React-Native</Item>
        <Item>JavaScript</Item>
        <Item>Python</Item>
        <Item>Node-JS</Item>
      </div>
      <div>
        <Card 
          className='card'
          title="ReactJS" 
          subtitle="Criando Components no React JS"
          value = "Aqui vamos ver alguns boas praticas e como estar criando componentes em react-js e esta reutilizando esse components e dando estilos a eles, assim vocẽ vai sair daqui com um conhecimento mais aprofundado no assunto"
          
        />
         <Card 
          className='card'
          title="Contador" 
          subtitle="Criando Components no React JS" 
          value={valor}
        >

          
        </Card>
      </div>
    
      <Button  
        className='btn btn-warning' 
        onclick={Adicionar}
      >Adicionar</Button>
      <Button 
        className='btn btn-danger' 
        onclick={Remover} 
      >Remover</Button>
      
    </div>
  )
}
export default App;
