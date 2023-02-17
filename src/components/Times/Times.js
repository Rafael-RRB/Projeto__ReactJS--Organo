import './Times.css';
import Time from './Time/Time.js';


function Times(props) {
    const lista = props.lista;

    return (
        <section className="lista-times">
            {lista.map((cat, index) => {
                return (
                    (lista[index][1][0].length > 0) && <Time area={cat[0]} key={index} id={index}
                    images={cat[1][0].map(devs => devs.img)}
                    names={cat[1][0].map(devs => devs.nome)} 
                    descriptions={cat[1][0].map(devs => devs.descricao)}
                    funcoes={props.funcoes} />
                )
            })}          
        </section>
    );
}

export default Times;