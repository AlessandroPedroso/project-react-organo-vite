
import {Times,Label,Select} from './styleListaSuspensa.js'

const ListaSuspensa = (props) =>{

    return (
        <Times>
            <Label>{props.label}</Label>
            <Select onChange={evento => props.aaAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map((item)=>(

                    <option key={item}>{item}</option>
                ))}
            </Select>
        </Times>
    )
}

export default ListaSuspensa