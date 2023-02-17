import './App.css';
import { useState } from 'react';
import Cabecalho from './components/Cabecalho/Cabecalho.js';
import Banner from './components/Banner/Banner.js';
import Formulario from './components/Formulario/Formulario.js';
import Organizacao from './components/Organizacao/Organizacao.js';
import Times from "./components/Times/Times.js";
import Rodape from "./components/Rodape/Rodape.js";

function App() {
  /* Funções para criar os cards iniciais */
  // Preenche uma categoria com a array passada, ou com a array debug.
  
  
  /* Lista de times */
  const objetoProgramacao = [];
  const objetoFrontEnd = [];
  const objetoDataScience = [];
  const objetoDevOps = [];
  const objetoUXDesign = [];
  const objetoMobile = [];
  const objetoInovacaoGestao = [];
  const objetoLista = [objetoProgramacao, objetoFrontEnd, objetoDataScience, objetoDevOps, objetoUXDesign, objetoMobile, objetoInovacaoGestao];

  const [listaProgramacao, setListaProgramacao] = useState([]);
  const [listaFrontEnd, setListaFrontEnd] = useState([]);
  const [listaDataScience, setListaDataScience] = useState([]);
  const [listaDevOps, setListaDevOps] = useState([]);
  const [listaUXDesign, setListaUXDesign] = useState([]);
  const [listaMobile, setListaMobile] = useState([]);
  const [listaInovacaoGestao, setListaInovacaoGestao] = useState([]);
  const listaArray = [listaProgramacao, listaFrontEnd, listaDataScience, listaDevOps, listaUXDesign, listaMobile, listaInovacaoGestao];
  const setLista = [setListaProgramacao, setListaFrontEnd, setListaDataScience, setListaDevOps, setListaUXDesign, setListaMobile, setListaInovacaoGestao];

  (async () => {
    let file;
    let fileJSON;

    if(localStorage.getItem('instrutores') === null) {
      file = await fetch('./instrutores.json');
      fileJSON = await file.json();
      localStorage.setItem('instrutores', JSON.stringify(fileJSON));
    } else {
      fileJSON = JSON.parse(localStorage.getItem('instrutores'));
    }

    Array.from(fileJSON['instrutores']).forEach((instrutor, index) => {
      objetoLista[fileJSON['instrutores'][index].area].push(instrutor);
    });
    
    setLista.forEach((set, index) => {
      if(listaArray[index].length <= 4) {
        set(objetoLista[index].slice(0, 5).map(funcionario => funcionario));
      }
    });
  })();

  const times  = [
      ["Programação", [listaProgramacao]],
      ["Front-End", [listaFrontEnd]],
      ["Data Science", [listaDataScience]],
      ["DevOps", [listaDevOps]],
      ["UX e Design", [listaUXDesign]],
      ["Mobile", [listaMobile]],
      ["Inovação e Gestão", [listaInovacaoGestao]]
  ];

  return (
    <div className="App">
      <Cabecalho />
      <Banner />
      <Formulario funcoes={[objetoLista, setLista]} times={times} />
      <Organizacao />
      <Times funcoes={[objetoLista, setLista]} lista={times} />
      <Rodape />
    </div>
  );
}

export default App;
