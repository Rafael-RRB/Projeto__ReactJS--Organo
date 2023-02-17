import "./Organizacao.css";

function Organizacao(props) {
    function mostraForm(event) {
        const form = document.getElementById('formulario');

        let fontSize = window.getComputedStyle(document.querySelector("html")).fontSize;
        fontSize = parseFloat(fontSize.slice(0, fontSize.length - 2)) * 7;
        if(form.classList.contains('js__hide')) {
            form.classList.remove('js__hide');
            window.scrollTo({top: form.offsetTop - fontSize, left: 0, behaviour: 'smooth'});
        } else {
            form.classList.add('js__hide');
            window.scrollTo({top: event.target.parentElement.offsetTop - fontSize, left: 0, behaviour: 'smooth'});
        }
    }

    return(
        <section className="organizacao">
            <div className="espaco"></div>

            <h2 className="organizacao__titulo">minha organização:</h2>

            <button className="organizacao__botao" onClick={mostraForm}>
                <span className="a11y__hidden">Abrir formulário de criação de cartão.</span>
            </button>
        </section>
    );
}

export default Organizacao;