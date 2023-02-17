import "./Cabecalho.css";

function Cabecalho(props) {
    /* Aqui, eu tentei criar um cabeçalho dinâmico. */
    // A ideia era criar um cabeçalho que fica posicionado normalmente, mas após uma certa quantidade de scroll para baixo,
    // O cabeçalho vira "fixado", escondendo-se ao scrollar para baixo, e revelando-se ao scrollar para cima.
    let valoresScroll = {
        'scrollAcumulado': 0,
        'posicaoPrevia': 0
    };

    window.onscroll = event => {
        // Define o header e o banner aqui -- o header não existe até ser criado pelo return
        const headerElement = document.getElementById("header");
        const bannerElement = document.getElementById("banner");
        // Pega o font-size, que virá como, por exemplo, "10px" e remove "px", para finalmente transformar-lo em número
        let fontSize = window.getComputedStyle(document.querySelector("html")).fontSize;
        fontSize = parseFloat(fontSize.slice(0, fontSize.length - 2)) * 7;

        valoresScroll.scrollAcumulado += window.scrollY - valoresScroll.posicaoPrevia;
        if(valoresScroll.scrollAcumulado > 300) {
            valoresScroll.scrollAcumulado = 300;
        } else if(valoresScroll.scrollAcumulado < 0) {
            valoresScroll.scrollAcumulado = 0;
        }
        valoresScroll.posicaoPrevia = window.scrollY;

        // Se a posição da tela for maior que 4 cabeçalhos, o cabeçalho torna-se fixed
        if(window.scrollY > fontSize * 3) {
            if(!headerElement.classList.contains('js__positionFixed')) {
                animacaoHeader(0, headerElement, bannerElement, fontSize);
            }
        }
        // Aqui, executa funções de animação baseadas na posição da tela
        switch(true) {
            // Se a posição atual for menor ou igual o tamanho do cabeçalho, reverte para o estado inicial
            case window.scrollY <= 0:
                animacaoHeader(1, headerElement, bannerElement, fontSize);
                break;
            // Se a posição atual for maior que o tamanho do cabeçalho, e o scroll for 0 ou menos, revela o header (scroll para cima)
            case window.scrollY > fontSize && valoresScroll.scrollAcumulado <= 0:
                animacaoHeader(2, headerElement, bannerElement, fontSize);
                break;
            // Se a posição atual for maior que o tamanho do cabeçalho, e o scroll for 400 ou mais, esconde o header (scroll para baixo)
            case window.scrollY > fontSize && valoresScroll.scrollAcumulado >= 300:
                animacaoHeader(3, headerElement, bannerElement, fontSize);
                break;
            default:
                // Do nothing
        }
    }

    function animacaoHeader(index, header, banner, height) {
        /* 
            Cheat sheet de classes para animação

                .js__positionTransition
                .js__positionFixed
                .js__positionHide
                .js__marginTop

        */

        // Função para fixar o header na tela.
        function pinHeader() {
            header.classList.add('js__positionHide');
            setTimeout(() => {
                header.classList.add('js__positionFixed');
                header.classList.add('js__positionTransition');
            }, 200);
        }
        // Função para desafixar o header na tela.
        function unpinHeader() {
            header.classList.remove('js__positionTransition');
            setTimeout(() => {
                banner.classList.remove('js__positionHide');
                header.classList.remove('js__positionFixed');
            }, 10);
        }
        // Função para mostrar o header, se fixado
        function showHeader() {
            if(header.classList.contains('js__positionFixed')) {
                header.classList.remove('js__positionHide');
            }
        }
        // Função para esconder o header, se fixado
        function hideHeader() {
            header.classList.add('js__positionHide');
        }

        // Chama uma função baseado no index passado
        const functionList = [pinHeader, unpinHeader, showHeader, hideHeader];
        try {
            functionList[index]();
            if(window.scrollY <= height) {
                header.classList.remove('js__positionHide');
            }
        } catch(error) {
            console.log(error);
        }
    }

    function menuHamburger() {
        setTimeout(() => { alert('A funcionalidade deste menu está fora do escopo do curso... desculpe!'); }, 400);
    }

    function modoNoturno() {
        const root = document.getElementById("root");
        root.classList.contains('js__darkMode') ? root.classList.remove('js__darkMode') : root.classList.add('js__darkMode');

    }

    return(
        <header className="cabecalho" id="header">
            <button onClick={menuHamburger} className="cabecalho__menu">
                <span className="a11y__hidden">Menu-hamburger. Atualmente está inativo.</span>
            </button>

            <a href="#html" className="cabecalho__home">
                <span className="a11y__hidden">Logomarca Organo, clique para ir ao topo da página.</span>
            </a>

            <button onClick={modoNoturno} className="cabecalho__luz">
                <span className="a11y__hidden">Botão para ativar o modo noturno. Atualmente está inativo.</span>
            </button>
        </header>
    );
}

export default Cabecalho;