import './App.css';
import { Component } from 'react';
import { Busca } from './components/Busca/Busca';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Lista } from './components/Lista/Lista';

class App extends Component {

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome=' +busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) =>{
    this.setState({busca: evento.target.value});
    this.carregaODAs();
  }

  render(){
    const {odas} = this.state;
    return(
      <section id='bocaweb'>
        <div className='header'>
          <Header
          />
        </div>

        <div className='container'>
          
          <Busca
            busca = {this.state.busca}
            buscaODA = {this.buscaODA} 
          />

          <div className='lista'>
            <p id='listaodas'>{odas.length} odas</p>
            {odas.map(oda =>(
              <Lista
              id = {oda._id}
              nome = {oda.nome}
              usuario = {oda.usuario}
              descricao = {oda.descricao}
              data_insercao = {oda.data_inclusao}
              palavras_chave = {oda.palavras_chave}
              />
            ))}
          </div>
        </div>
        <div className='footer'>
          <Footer 
          />
        </div>
      </section>
    ) 
  }
}

export default App;
