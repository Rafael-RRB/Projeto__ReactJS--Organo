import "./Banner.css";

// JSX NÃO É HTML! Isso é um componente ReactJS.
function Banner() {
    return (
        <section className="banner" id="banner">
            <div className="banner__imagem">
                <h1 className="banner__titulo">Pessoas e times</h1>
                <h2 className="banner__subtitulo">organizados em um só lugar</h2>
            </div>
        </section>
    )
}

export default Banner;