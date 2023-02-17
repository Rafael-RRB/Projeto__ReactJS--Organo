import "../Campo/Campo.css";
import './CampoLista.css';

function Select(props) {
    const aoDigitado = event => {
        props.aoAlterado(event.target.value);
    }

    return(
        <label className="campo">
            <span className="campo__titulo">{props.titulo}</span>
            <select value={props.valor} name="Selecione a àrea de atuação" onChange={aoDigitado} className="campo__texto campo__lista" required={props.required}>
                <option value="0">Programação</option>
                <option value="1">Front-End</option>
                <option value="2">Data Science</option>
                <option value="3">DevOps</option>
                <option value="4">UX & Design</option>
                <option value="5">Mobile</option>
                <option value="6">Inovação e Gestão</option>
            </select>
        </label>
    );
}

export default Select;