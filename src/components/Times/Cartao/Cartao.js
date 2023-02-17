import "./Cartao.css";

function Cartao(props) {
    return (
        <article className={props.class}>
            <img src={(() => props.imagem !== "" ? props.imagem : './img/profile/default.svg')()} alt="" className="cartao__imagem" loading="lazy"/>
            <h3 className="cartao__nome">{props.nome}</h3>
            <p className="cartao__descricao">{props.descricao}</p>
        </article>
    );
}

export default Cartao;