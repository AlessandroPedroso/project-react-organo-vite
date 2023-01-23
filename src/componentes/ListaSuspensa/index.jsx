
import {Times,Label,Select} from './styleListaSuspensa.js'

const ListaSuspensa = (props) =>{
    return (
        <Times>
            <Label>{props.label}</Label>
            <Select>
                {props.itens.map((item)=>(

                    <option key={item}>{item}</option>
                ))}
            </Select>
        </Times>
    )
}

export default ListaSuspensa