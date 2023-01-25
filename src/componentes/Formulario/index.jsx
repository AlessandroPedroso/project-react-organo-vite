import { useState } from 'react'
import Botao from '../Botao/index.jsx'
import CampoTexto from '../CampoTexto/index.jsx'
import ListaSuspensa from '../ListaSuspensa/index.jsx'
import { Section, Form,H2} from './styleFormulario.js'

export const Formulario = (props) => {

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({nome,cargo,imagem,time})
        // console.log('Form foi submetido =>',nome,cargo,imagem,time)
    }

    return (
        <Section>
            <Form onSubmit={aoSalvar}>
                <H2>Preencha os dados para criar o card do colaborador.</H2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} 
                    aaAlterado={valor => setNome(valor)}
                
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo} 
                    aaAlterado={valor =>setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aaAlterado={valor =>setImagem(valor)}

                />
                <ListaSuspensa
                    obrigatorio={true} 
                    label="Times" 
                    itens={times}
                    valor={time}
                    aaAlterado={valor => setTime(valor)}
                    
                    />
                <Botao>
                    Criar Card
                </Botao>
            </Form>
        </Section>
    )

}

export default Formulario