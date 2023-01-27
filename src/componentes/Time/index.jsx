import Colaborador from '../Colaborador/index.jsx'
import { H3, SectionTime, DivColaboradores } from './StyleTime.js'


const Time = (props) => {

    return (

       (props.colaboradores.length > 0) ? <SectionTime corSecundaria={props.corSecundaria} >

            <H3 corPrimaria={props.corPrimaria}>{props.nome}</H3>
            <DivColaboradores>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo} />)}
            </DivColaboradores>

        </SectionTime>
        : ''
    )
}

export default Time