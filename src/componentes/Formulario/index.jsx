import Botao from '../Botao/index.jsx'
import CampoTexto from '../CampoTexto/index.jsx'
import ListaSuspensa from '../ListaSuspensa/index.jsx'
import { Section, Form,H2} from './styleFormulario.js'

export const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    return (
        <Section>
            <Form>
                <H2>Preencha os dados para criar o card do colaborador.</H2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </Form>
        </Section>
    )

}

export default Formulario