import {Image, View, Text} from 'react-native';
import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

const Texto = styled.View`
flex-direction:row;
background-color: ;
height: 50px;
width:1000px;
justify-content: center;
align-items:row;

`;

const Texto2 = styled.View`
flex-direction:row;
background-color: ;
height: 100px;
width:1000px;
justify-content: center;
align-items:row;

`;

const Header = styled.View`
flex-direction:row;
background-color: ;
height: 300px;
flex-wrap: wrap;
justify-content: center;
`;

const Quadrado = styled.View`

background-color: ${props => props.cor};
width:350px;
height:300px;
justify-content:center;
align-items:row;
`;

const QuadradoG = styled.View`

background-color: ${props => props.cor};
width:1050px;
height:300px;
justify-content:center;
align-items:row;
`;
const Pagina = styled.View`
  flex:1;
  
`;

function App() {
  return ( 
    
    <Pagina>
      <Header>

       <Texto >
          <h1>
            <p1>
              Galeria de imagens do José Felix
            </p1>
          </h1>
      </Texto>
 
      <Texto2 >
          <h1>
            <p1>
             CARROS
            </p1>
          </h1>
      </Texto2>
      <Quadrado  cor="white">

        <Image source={require('./src/imagens/01-27.png')}
           style={{width: 350, height: 300, backgroundColor:'#AAA'}}
           resizeMode='stretch' />
      
      </Quadrado>
      
      <Quadrado  cor="white">

        <Image source={require('./src/imagens/03-19.png')}
           style={{width: 350, height: 300, backgroundColor:'#AAA'}}
           resizeMode='stretch' />
      
      </Quadrado>

      <Quadrado  cor="white">

        <Image source={require('./src/imagens/02-21.png')}
        style={{width: 350, height: 300, backgroundColor:'#AAA'}}
        resizeMode='stretch' />

      </Quadrado>

      <Quadrado  cor="white">

        <Image source={require('./src/imagens/006.png')}
        style={{width: 350, height: 300, backgroundColor:'#AAA'}}
        resizeMode='stretch' />

        </Quadrado>

        <Quadrado  cor="white">

        <Image source={require('./src/imagens/0010.png')}
        style={{width: 350, height: 300, backgroundColor:'#AAA'}}
        resizeMode='stretch' />

        </Quadrado>
 
        <Quadrado  cor="white">

       <Image source={require('./src/imagens/04-21.png')}
       style={{width: 350, height: 300, backgroundColor:'#AAA'}}
       resizeMode='stretch' />

       </Quadrado>

      <QuadradoG cor="white">

        <Image source={{uri:'https://www.pinpng.com/pngs/m/130-1302714_carros-png-mi-carro-sv-transparent-png.png'}}
           style={{width: 1050, height: 300, backgroundColor:'#AAA'}}
           resizeMode='stretch' />
      
      </QuadradoG>
  
      

      </Header>
    </Pagina>
  );
}

export default App;