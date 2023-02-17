import "./Formulario.css";
import { useState } from 'react';
import Campo from "./Campo/Campo.js";
import CampoLista from "./CampoLista/CampoLista.js";
import Botao from "./Botao/Botao.js";



function Formulario(props) {
    /* O useState('') está no formulário */
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [select, setSelect] = useState(0);
    //
    const aoSalvar = event => {
        event.preventDefault();
        
        /* Primeira função utilizada
        
        // Cria o card
        
        props.funcoes[1][select]([...props.times[select][1][0], {
            'key': `cartao__${props.times[select][1][0].length}`,
            'imagem': imagem,
            'nome': nome,
            'descricao': cargo
        }]);
        
        */

        // Cria o objeto do instrutor
        const novoInstrutor = {
            "img": imagem,
            "nome": nome,
            "descricao": cargo,
            "area": select
        }
        let instrutoresAtual = props.times[select][1];
        instrutoresAtual.unshift(novoInstrutor);
        instrutoresAtual.pop();
        props.funcoes[1][select]([], instrutoresAtual);

        props.funcoes[0][select].unshift(novoInstrutor);
        // Adiciona o instrutor para o localStorage
        let instrutoresStorage = JSON.parse(localStorage.getItem('instrutores'));
        instrutoresStorage['instrutores'].unshift(novoInstrutor);
        localStorage.setItem('instrutores', JSON.stringify(instrutoresStorage));

        /* Limpa o formulário */
        setNome('');
        setCargo('');
        setImagem('');
        setSelect(0);

        const alvo = document.querySelector(`.times:nth-of-type(${select + 1})`);
        window.scrollTo({top: alvo.offsetTop, behavior: 'smooth'});
    }

    return (
        <form className="formulario js__hide" onSubmit={aoSalvar} id="formulario">
            <h2 className="formulario__titulo">Preencha os dados para criar o card do colaborador.</h2>

            <Campo valor={nome} aoAlterado={valor => setNome(valor)} required={true} titulo='Nome' placeholder='Digite o nome do colaborador'/>
            <Campo valor={cargo} aoAlterado={valor => setCargo(valor)} required={true} titulo='Cargo' placeholder='Digite o cargo do colaborador'/>
            <Campo valor={imagem} aoAlterado={valor => setImagem(valor)} titulo='Imagem' placeholder='Informe o endereço da imagem'/>
            <CampoLista valor={select} aoAlterado={valor => setSelect(valor)} required={true} titulo='Time' />

            <Botao/>
        </form>
    );
}

export default Formulario;
