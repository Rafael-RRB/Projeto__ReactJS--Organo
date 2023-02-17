import "./Campo.css";

function Campo(props) {
    const aoDigitado = event => {
        props.aoAlterado(event.target.value);
    }


    return (
        <label className="campo">
            <span className="campo__titulo">{props.titulo}</span>
            <input value={props.valor} onChange={aoDigitado} type="text" placeholder={props.placeholder} className="campo__texto" required={props.required} />
        </label>
    );
}

export default Campo;