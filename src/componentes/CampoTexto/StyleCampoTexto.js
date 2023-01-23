import styled from "styled-components";

export const CampoTextoDiv = styled.div`

    margin: 24px 0;

`

export const LabelTexto = styled.label`

    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 18px;
    font-family: 'Montserrat';
`

export const Input = styled.input`

    width: 100%;
    background: #FFFFFF;
    mix-blend-mode: normal;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
    border:none;
    font-size:24px;
    padding: 24px;
    outline: none;
    font-weight: 400;
    font-family: 'Montserrat';
    &::placeholder{
        font-size: 16px;
        font-family: 'Montserrat';
        font-weight: 400;
        color: #A4A4A4;
    }
`