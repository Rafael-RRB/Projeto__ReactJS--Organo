import "./Time.css";
import Cartao from "../Cartao/Cartao.js";
import { useState } from "react";


function Time(props) {
    const timeInstrutores = props.funcoes[0];
    const timeSet = props.funcoes[1];

    const imagens = props.images.map(image => image);
    const nomes = props.names.map(name => name);
    const descricoes = props.descriptions.map(desc => desc);
    const identificador = props.id;

    const lista = ['programacao', 'frontend', 'datascience', 'devops', 'uxdesign', 'mobile', 'inovacaogestao'];
    const classeTime = `times times--${lista[identificador]}`;
    const classeTitulo = `times__titulo titulo--${lista[identificador]}`;
    const classeCartao = `cartao cartao--${lista[identificador]}`
    const classeLista = [classeTime, classeTitulo, classeCartao];
    
    const cartoes = (() => {
        let lista = [];
        for(let i = 0; i < descricoes.length; i++) {
            lista.push({
                'key': `cartao__${lista.length}`,
                'imagem': imagens[i],
                'nome': nomes[i],
                'descricao': descricoes[i]
            });
        }
        return lista;
    })();

    const [verMais, setVerMais] = useState(
        <article className="cartao cartao--default">
            <img src="./img/profile/default.svg" alt="" className="cartao__imagem" loading="lazy"/>
            <button className="cartao__botao" onClick={() => verMaisCartoes(props.id)}>
                <span className="a11y__hidden">Ver mais instrutores...</span>
            </button>
        </article>
    );


    function verMaisCartoes(index) {
        const listaCartoes = document.querySelectorAll('.times')[index].querySelectorAll('.cartao');
        const tamanhoLista = listaCartoes.length;
        const instrutorSlice = timeInstrutores[index].slice(0, tamanhoLista + 4 >= timeInstrutores[index].length ? timeInstrutores[index].length : tamanhoLista + 4);
        
        const elementoAlvo = listaCartoes[0].parentElement;
        let comeco = null;
        const fim = listaCartoes[listaCartoes.length - 2].offsetLeft;
        const tempo = window.innerWidth <= 768 ? 100 : 0;
        
        // Função criada através do chatGPT, não tenho experiência com "requestAnimationFrame"
        function scroll(timestamp) {
          if (!comeco) comeco = timestamp;
          let progress = timestamp - comeco;
          elementoAlvo.scrollLeft = fim * progress / tempo;
          if (progress < tempo) {
            window.requestAnimationFrame(scroll);
          }
        }

        let fontSize = window.getComputedStyle(document.querySelector("html")).fontSize;
        fontSize = parseFloat(fontSize.slice(0, fontSize.length - 2)) * 10;

        window.requestAnimationFrame(scroll);

        setTimeout(() => {
            timeSet[index](instrutorSlice);

            if(tamanhoLista + 4 >= timeInstrutores[index].length) {
                setVerMais();
            }

            (window.innerWidth >= 768) && window.scrollTo({top: listaCartoes[listaCartoes.length - 1].offsetTop - fontSize, left: 0, behavior: 'smooth'});
        }, tempo * 3);
    }

    return(
        <section className={classeLista[0]} >
                <h2 className={classeLista[1]}>{props.area}</h2>
                <section className="cartoes">
                    {cartoes.map(cartao => (
                        <Cartao key={cartao.key} imagem={cartao.imagem} nome={cartao.nome} descricao={cartao.descricao} class={classeLista[2]} />
                    ))}
                    {verMais}
                </section>
        </section>
    );
}

export default Time;