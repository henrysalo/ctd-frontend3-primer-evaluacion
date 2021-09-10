import React from "react";
import data from "./components/data.json";
import Preguntas from "./components/Preguntas";
import Botones from "./components/Botones";
import Ultima from "./components/Ultima";
import Lista from "./components/Lista";

const anteriores = [];
let ultimaLetra = [];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {letra: "", cont: 0, id: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        window.alert("Bienvenido a la aventura")
    }

    handleClick(e) {
        const letra = e.target.value;
        const contador = this.state.cont;

        if( this.state.id < 4 ) {
            this.setState({letra: e.target.value, id: this.state.id + 1});

            if( letra === "A" && contador === 0 ) {
                this.setState( { cont: contador + 1 } );
            } else if( letra === "A" && ultimaLetra === "B" ) { 
                this.setState( { cont: contador + 1 } );
            } else if( letra === "A" && ultimaLetra === "A" ) {
                this.setState( { cont: contador + 2 } );
            } else if( letra === "B" && contador === 0 ) {
                this.setState( { cont: contador + 2 } );
            } else if( letra === "B" && ultimaLetra === "B" ) {
                this.setState( { cont: contador + 2 } );
            }else if( letra === "B" && ultimaLetra === "A" ) {
                this.setState( { cont: contador + 3 } )
            };
        } else {
           alert("Fin del juego");
        }
        
        anteriores.push(e.target.value);
        ultimaLetra = [...anteriores].pop();
    }

    render() {
        const contar = this.state.cont;
        const id = this.state.id;
        return(
            <>
                <Preguntas id={id + 1} historia={data[contar].historia} />
                <div id="botones">
                  <Botones value="A" opcion={data[contar].opciones.a} onClick={this.handleClick} />
                  <Botones value="B" opcion={data[contar].opciones.b} onClick={this.handleClick} />
                </div>
                <Ultima ultima={id + ultimaLetra} />
                <Lista lista={anteriores} id={id} />
            </>
        )
    }
}
