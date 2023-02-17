import './Rodape.css'

function Rodape() {
    return(
        <footer className="rodape" id="footer">
            <a href="#html" className="rodape__link-home">
                <span className="a11y__hidden">Logomarca Organo, clique para ir ao topo da página.</span>
            </a>

            <nav className="rodape__redes-sociais">
                <a href="https://twitter.com/" className="rede-social rede-social--twitter">
                    <span className="a11y__hidden">Link para a página inicial do Twitter.</span>
                </a>

                <a href="https://www.facebook.com/AluraCursosOnline/" className="rede-social rede-social--facebook">
                    <span className="a11y__hidden">Link para a página inicial do Facebook.</span>
                </a>

                <a href="https://www.instagram.com/aluraonline/" className="rede-social rede-social--instagram">
                    <span className="a11y__hidden">Link para a página inicial do Instagram.</span>
                </a>
            </nav>

            <p className="rodape__copyright">
                &copy;&nbsp;2023. Projeto de curso desenvolvido por <a href="https://cursos.alura.com.br/user/rafaelrb" className="inline__link copyright--clicavel">Rafael&nbsp;r.&nbsp;b.</a> utilizando e modificando o design de <a href="https://cursos.alura.com.br/user/isadora-cardoso" className="inline__link copyright--clicavel">isadora&nbsp;cardoso</a> da <a href="https://www.alura.com.br/" className="inline__link copyright--clicavel">alura</a>
            </p>
        </footer>
    );
}

export default Rodape;