import React,{Component} from "react" 
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const Box = styled.div `
display: flex;
width: 65vw;
height: 34vw;
flex-wrap:wrap;

`
const Title = styled.h1`
text-align: center;


` 

const BoxCarros = styled.div`
width: 15vw;
height: 10vw;
border:solid 2px black;
margin: 0.5rem;
`

const BoxP = styled.div`
height: 6.5vw;
padding: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;

`
const Carrosbuy = styled.div`
overflow:auto;
border:2px solid blue;
width: 30vw;
height: 40vw;


`

const Carrosbonito = styled.div`
display:flex;
justify-content: space-around;

`
class App extends Component {
  state = {
    carros:[{
      nome:"Jetta",
      montadora:"Volkswagen",
      preço:144000,
      tipo:"Sedan",
      id:1

    },{
      nome:"Polo",
      montadora:"Volkswagen",
      preço:70000,
      tipo:"Hatch",
      id:2

    },{
      nome:"T-Cross",
      montadora:"Volkswagen",
      preço:123000,
      tipo:"SUV",
      id:3

    },{
      nome:"Tiguan R-line",
      montadora:"Volkswagen",
      preço:146000,
      tipo:"SUV",
      id:4

    },{
      nome:"Civic",
      montadora:"Honda",
      preço:115000,
      tipo:"Sedan",
      id:5

    },{
      nome:"Corolla",
      montadora:"Toyota",
      preço:110000,
      tipo:"Sedan",
      id:6

    },{
      nome:"Corolla Cross",
      montadora:"Toyota",
      preço:184000,
      tipo:"SUV",
      id:7

    },{
      nome:"Compass",
      montadora:"Jeep",
      preço:132000,
      tipo:"SUV",
      id:8

    },{
      nome:"Golf GTI",
      montadora:"Volkswagen",
      preço:138000,
      tipo:"Hacth",
      id:9


    }],

    carrosComprados:[]


  } 
    adicionarCarros = (carro) => {
      this.setState({
        carrosComprados: this.state.carrosComprados.concat(carro)
      })
    }

removerCarros = (id) => {

    this.setState({
       carrosComprados: this.state.carrosComprados.filter((item)=>{
          return(item.id !== id)
          
       })
       

    })

}

render(){
  return(
    <div>
    <Title>Loja de carros!</Title>
    <div>
      <Carrosbonito>
    <Box>
      {this.state.carros.map((item)=>(
      <BoxCarros>
        
        <h2>{item.nome}</h2>
        <button onClick={()=>this.adicionarCarros(item)}>Add</button>
        <BoxP>
        <p><strong>Montadora: </strong>{item.montadora}</p>
        <p><strong>Preço: </strong>{item.preço.toLocaleString("pt-BR",{style: "currency",currency:"BRL", currencyDisplay:"symbol"})}</p>
        <p><strong>Tipo: </strong>{item.tipo}</p>
        </BoxP>

        

      </BoxCarros>
      ))}
    </Box>
    <div>
    <Carrosbuy>
      <div>
      {this.state.carrosComprados.map((item)=>(
        <div>
          <div>
            <h2>{item.nome}</h2>
            <button onClick={()=>this.removerCarros(item.id)}>X</button>
            <div>
            <p><strong>Montadora: </strong>{item.montadora}</p>
            <p><strong>Preço: </strong>{item.preço.toLocaleString("pt-BR",{style: "currency",currency:"BRL", currencyDisplay:"symbol"})}</p>
            <p><strong>Tipo: </strong>{item.tipo}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
      
    </Carrosbuy>
    <div>
       <h2>Total:</h2>
       <h2>{this.state.carrosComprados.reduce((a,b)=>
       a+b.preço,0).toLocaleString("pt-BR",{style: "currency",currency:"BRL", currencyDisplay:"symbol"})}</h2>
    </div>
    </div>
    </Carrosbonito>

    </div>
    <GlobalStyle />
    </div>
    
  )
}
}

export default App 