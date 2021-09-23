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
background-color: green;
width: 65vw;
height: 34vw;
flex-wrap:wrap;
`
const BoxCarros = styled.div`
background-color: red;
width: 15vw;
height: 10vw;
border:solid 2px black;
margin: 0.5rem;
`

const BoxP = styled.div`
background-color: purple;
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
      tipo:"Sedan"

    },{
      nome:"Polo",
      montadora:"Volkswagen",
      preço:70000,
      tipo:"Hatch"

    },{
      nome:"T-Cross",
      montadora:"Volkswagen",
      preço:123000,
      tipo:"SUV"

    },{
      nome:"Tiguan R-line",
      montadora:"Volkswagen",
      preço:146000,
      tipo:"SUV"

    },{
      nome:"Civic",
      montadora:"Honda",
      preço:115000,
      tipo:"Sedan"

    },{
      nome:"Corolla",
      montadora:"Toyota",
      preço:110000,
      tipo:"Sedan"

    },{
      nome:"Corolla Cross",
      montadora:"Toyota",
      preço:184000,
      tipo:"SUV"

    },{
      nome:"Compass",
      montadora:"Jeep",
      preço:132000,
      tipo:"SUV"

    },{
      nome:"Golf GTI",
      montadora:"Volkswagen",
      preço:138000,
      tipo:"Hacth"

    }],

    carrosComprados:[]


  }

render(){
  return(
    <div>
    <h1>Loja de carros!</h1>
    <div>
      <Carrosbonito>
    <Box>
      {this.state.carros.map((item)=>(
      <BoxCarros>
        
        <h2>{item.nome}</h2>
        <button>Add</button>
        <BoxP>
        <p><strong>Montadora: </strong>{item.montadora}</p>
        <p><strong>Preço: </strong>R${item.preço}</p>
        <p><strong>Tipo: </strong>{item.tipo}</p>
        </BoxP>

        

      </BoxCarros>
      ))}
    </Box>
    <Carrosbuy>
      <div>
      {this.state.carrosComprados.map((item)=>(
        <div>
          <div>
            <h2>{item.nome}</h2>
            <button>X</button>
          </div>
        </div>
      ))}
      </div>
    </Carrosbuy>
    </Carrosbonito>
    </div>
    <GlobalStyle />
    </div>
    
  )
}
}

export default App 